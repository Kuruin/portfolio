/**
 * Spotify PKCE Authentication Helper
 * 
 * This implements the Authorization Code with PKCE flow for Spotify Web API.
 * PKCE is more secure as it doesn't require client_secret in the browser.
 */

import crypto from "node:crypto";



const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!
const REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI || 'http://127.0.0.1:3000/api/spotify/callback'

// PKCE utility functions
function base64URLEncode(str: Buffer): string {
    return str
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '')
}

function sha256(buffer: string): Buffer {
    return crypto.createHash('sha256').update(buffer).digest()
}

function generateCodeVerifier(): string {
    return base64URLEncode(crypto.randomBytes(32))
}

function generateCodeChallenge(verifier: string): string {
    return base64URLEncode(sha256(verifier))
}

export function generateAuthUrl(): { authUrl: string; codeVerifier: string } {
    // Generate PKCE parameters
    const verifier = generateCodeVerifier()
    const challenge = generateCodeChallenge(verifier)

    const params = new URLSearchParams({
        response_type: 'code',
        client_id: CLIENT_ID,
        scope: 'user-read-currently-playing user-read-playback-state user-read-recently-played',
        redirect_uri: REDIRECT_URI,
        code_challenge_method: 'S256',
        code_challenge: challenge,
    })

    return {
        authUrl: `https://accounts.spotify.com/authorize?${params.toString()}`,
        codeVerifier: verifier
    }
}

export async function exchangeCodeForTokens(code: string, verifier: string) {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            redirect_uri: REDIRECT_URI,
            client_id: CLIENT_ID,
            code_verifier: verifier,
        }),
    })

    if (!response.ok) {
        throw new Error(`Token exchange failed: ${response.status}`)
    }

    return response.json()
}
