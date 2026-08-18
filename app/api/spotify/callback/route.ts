// app/api/spotify/callback/route.ts  
import { exchangeCodeForTokens } from '../../../lib/spotify-pkce'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')

    if (!code) {
        return NextResponse.json({ error: 'No authorization code' }, { status: 400 })
    }

    try {
        const tokens = await exchangeCodeForTokens(code)

        // In a real app, you'd save the refresh_token securely
        console.log('Refresh token:', tokens.refresh_token)

        return NextResponse.json({ success: true, tokens })

    } catch (error) {
        return NextResponse.json({ error: 'Token exchange failed' }, { status: 500 })
    }
}
