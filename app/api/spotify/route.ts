// app/api/spotify/route.ts
import { generateAuthUrl } from '../../lib/spotify-pkce'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
    if ((process.env.NODE_ENV as string) === 'production') {
        return new NextResponse('Not Found', { status: 404 })
    }
    const { authUrl, codeVerifier } = generateAuthUrl()
    
    const response = NextResponse.redirect(authUrl)
    
    const cookieStore = await cookies()
    cookieStore.set('spotify_code_verifier', codeVerifier, {
        httpOnly: true,
        secure: (process.env.NODE_ENV as string) === 'production',
        sameSite: 'lax',
        maxAge: 300, // 5 minutes
        path: '/'
    })
    
    return response
}
