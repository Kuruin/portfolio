import axios from "axios";

const {
    SPOTIFY_CLIENT_ID: clientId,
    SPOTIFY_CLIENT_SECRET: clientSecret,
    SPOTIFY_REFRESH_TOKEN: refreshToken,
} = process.env;

const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const getAccessToken = async () => {
    if (!refreshToken) {
        throw new Error("No referesh token available, re-authenticate");
    }
    if (!clientId || !clientSecret) {
        throw new Error("Pls fill up the .env.local variables, SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET");
    }
    const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const body = new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken
    });
    try {

        const response = await axios.post(TOKEN_ENDPOINT, body.toString(), {
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': "application/x-www-form-urlencoded"
            }
        })
        return { access_token: response.data.access_token };
    } catch (e) {
        console.error("Spotify backend error", e)
        throw new Error("Failed to refresh Spotify access token");
    }
}

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();

    const headers = {
        Authorization: `Bearer ${access_token}`,
    }
    const response = await axios.get(NOW_PLAYING_ENDPOINT, { headers })
    if (response.status === 204) {
        const response = await axios.get(`${RECENTLY_PLAYED_ENDPOINT}?limit=1`, { headers });

        if (!response.data.items?.length) {
            return null
        }
        const track = response.data.items[0].track;
        return {
            isPlaying: false,
            title: track.name,
            artist: track.artists.map((artist: { name: string }) => artist.name).join(", "),
            type: track.type,
            albumImageUrl: track.album.images[1]?.url,
            songUrl: track.external_urls.spotify,
        }
    }

    const nowPlayingPayload = {
        isPlaying: response.data.is_playing,
        title: response.data.item.album.name,
        artist: response.data.item.artists.map((artist: { name: string }) => artist.name).join(", "),
        type: response.data.currently_playing_type,
        albumImageUrl: response.data.item.album.images[1]?.url,
        songUrl: response.data.item.external_urls.spotify,

    }

    return nowPlayingPayload;
}