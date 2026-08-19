"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

interface TrackPayload {
    isPlaying: boolean;
    title: string;
    artist: string;
    type: string;
    albumImageUrl: string;
    songUrl: string;
}

export const SpotifyCard = () => {
    const [payload, setPayload] = useState<TrackPayload | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const res = await axios.get("/api/spotify/now-playing");
                setPayload(res.data);
            } catch (error) {
                console.error("Error fetching currently playing track:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNowPlaying();
    }, []);

    if (loading) {
        return (
            <div className="dark:bg-[#041807] shadow-sm w-full sm:w-80 h-18 flex rounded-full items-center gap-x-4 relative animate-pulse">
                <div className="rounded-full bg-neutral-200 dark:bg-stone-800 size-13 ml-3 shrink-0"></div>
                <div className="leading-5 min-w-0 flex-1 pr-16 flex flex-col gap-1.5">
                    <div className="h-3.5 w-24 bg-neutral-200 dark:bg-stone-800 rounded"></div>
                    <div className="h-2.5 w-16 bg-neutral-200 dark:bg-stone-850 rounded"></div>
                </div>
            </div>
        );
    }

    if (!payload || !payload.title) {
        return null;
    }

    return (
        <Link href={payload.songUrl}>
            <div className="dark:bg-[#041807] shadow-sm w-full sm:w-80 h-18 flex rounded-full items-center gap-x-4 relative">
                <img 
                    src={payload.albumImageUrl} 
                    alt={`${payload.title} album cover`}
                    className="rounded-full object-cover size-13 ml-3 shrink-0" 
                />
                <div className="leading-5 min-w-0 flex-1 pr-16">
                    <h1 className="text-[15px] font-medium text-neutral-900 dark:text-primary truncate" title={payload.title}>
                        {payload.title}
                    </h1>
                    <p className="text-[11px] text-neutral-500 dark:text-secondary truncate" title={`${payload.type} · ${payload.artist}`}>
                        {payload.type} · {payload.artist}
                    </p>
                </div>
                <div className="flex items-end gap-0.5 h-4 absolute right-9">
                    {[8, 12, 6, 14].map((height, i) => (
                        <div
                            key={i}
                            className="w-0.5 rounded-full bg-green-500 animate-equalizer"
                            style={{
                                height: `${height}px`,
                                animationDelay: `${i * 0.12}s`,
                            }}
                        />
                    ))}
                </div>
            </div>
        </Link>
    );
};