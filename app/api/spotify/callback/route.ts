// app/api/spotify/callback/route.ts  
import { exchangeCodeForTokens } from '../../../lib/spotify-pkce'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
    if ((process.env.NODE_ENV as string) === 'production') {
        return new NextResponse('Not Found', { status: 404 })
    }
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')

    if (!code) {
        return NextResponse.json({ error: 'No authorization code' }, { status: 400 })
    }

    const cookieStore = await cookies()
    const codeVerifier = cookieStore.get('spotify_code_verifier')?.value

    if (!codeVerifier) {
        return NextResponse.json({ error: 'No code verifier found in session cookies. Please try logging in again.' }, { status: 400 })
    }

    try {
        const tokens = await exchangeCodeForTokens(code, codeVerifier);
        
        cookieStore.delete('spotify_code_verifier')
        
        return NextResponse.json({ success: true, tokens })

    } catch (error) {
        return NextResponse.json({ error: 'Token exchange failed' }, { status: 500 })
    }
}
