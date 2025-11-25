import React, { useEffect, useRef, useState } from "react";
import { Volume2, MoreVertical } from "lucide-react";

/**
 * Props:
 *  - audio: string (audio URL)         (required)
 *  - thumbnail: string (image URL)     (optional)
 *  - title: string                     (optional)
 */
export default function AudioPlayer({
  audio,
  thumbnail,
  title = "Now Playing",
}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 - 100
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);

  // fallback thumbnail (uploaded file path)
  const fallbackThumb = "sandbox:/mnt/data/e24bf2e1-a06c-4474-b2b6-4ef51e34ea88.png";
  const thumbUrl = thumbnail || fallbackThumb;

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    const onTime = () => {
      setCurrentTime(a.currentTime || 0);
      setProgress(a.duration ? (a.currentTime / a.duration) * 100 : 0);
    };
    const onLoaded = () => {
      setDuration(a.duration || 0);
    };
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onLoaded);
    a.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onLoaded);
    };
  }, [audio]);

  // Play / Pause
  const togglePlay = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (isPlaying) {
      a.pause();
      setIsPlaying(false);
    } else {
      try {
        await a.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Playback failed:", err);
      }
    }
  };

  // Seek
  const onSeek = (e) => {
    const a = audioRef.current;
    if (!a) return;
    const pct = Number(e.target.value);
    const sec = (pct / 100) * (a.duration || 0);
    a.currentTime = sec;
    setProgress(pct);
  };

  // Volume
  const onVolume = (e) => {
    const a = audioRef.current;
    const v = Number(e.target.value);
    setVolume(v);
    setMuted(v === 0);
    if (a) a.volume = v;
  };

  // helper format time
  const fmt = (sec = 0) => {
    if (!sec || Number.isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="player-gradient p-6 max-w-md mx-auto small-shadow">
      <div className="flex flex-col items-center gap-4">
        {/* album / thumbnail */}
        <div className="relative">
          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-white small-shadow">
            <img
              src={thumbUrl}
              alt="thumbnail"
              className={`w-full h-full object-cover ${isPlaying ? "animate-spin-slow" : ""}`}
              style={{ transformOrigin: "50% 50%" }}
            />
          </div>

          {/* center play/pause overlay */}
          <button
            onClick={togglePlay}
            className="absolute inset-0 m-auto w-12 h-12 rounded-full flex items-center justify-center bg-black/40 hover:bg-black/45 transition"
            style={{ top: "calc(50% - 24px)" }}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sm">
              {isPlaying ? "❚❚" : "▶"}
            </div>
          </button>
        </div>

        {/* Title */}
        <div className="text-center">
          <div className="text-lg font-semibold text-slate-800">{title}</div>
        </div>

        {/* controls row */}
        <div className="w-full flex flex-col gap-3">
          {/* time and progress bar */}
          <div className="flex items-center justify-between gap-3 text-sm text-slate-700">
            <div className="flex items-center gap-4">
              <button onClick={togglePlay} className="p-1">
                <div className="w-9 h-9 rounded-md border border-slate-200 bg-white flex items-center justify-center">
                  {isPlaying ? "❚❚" : "▶"}
                </div>
              </button>
              <div className="text-xs">{fmt(currentTime)} / {fmt(duration)}</div>
            </div>

            <div className="flex-1 mx-3">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={onSeek}
                className="w-full range-thumb"
                style={{ appearance: "none" }}
              />
            </div>

            {/* volume */}
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-slate-600" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={muted ? 0 : volume}
                onChange={onVolume}
                className="w-20"
              />
            </div>

            {/* menu placeholder */}
            <button className="p-1">
              <MoreVertical className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          {/* hidden native audio element */}
          <audio ref={audioRef} src={audio} preload="metadata" />
        </div>
      </div>
    </div>
  );
}