// app/api/spotify/route.ts
import { generateAuthUrl } from '../../lib/spotify-pkce'
import { NextResponse } from 'next/server'

export async function GET() {
    const authUrl = generateAuthUrl()
    return NextResponse.redirect(authUrl)
}
