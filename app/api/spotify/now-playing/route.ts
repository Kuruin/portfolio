import { NextResponse } from 'next/server'
import { getNowPlaying } from '../../../lib/spotify'

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        const track = await getNowPlaying()

        return NextResponse.json(track)
    } catch (error) {
        console.error('Spotify Now Playing error:', error)

        return NextResponse.json(
            {
                error: 'Failed to fetch Spotify data',
            },
            {
                status: 500,
            }
        )
    }
}