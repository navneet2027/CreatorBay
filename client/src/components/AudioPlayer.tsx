// import React, { useEffect, useRef, useState } from "react";
// import { Volume2, MoreVertical } from "lucide-react";

// /**
//  * Props:
//  *  - audio: string (audio URL)         (required)
//  *  - thumbnail: string (image URL)     (optional)
//  *  - title: string                     (optional)
//  */
// export default function AudioPlayer({
//   audio,
//   thumbnail,
//   title = "Now Playing",
// }) {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0); // 0 - 100
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1);
//   const [muted, setMuted] = useState(false);
//    const [loaded, setLoaded] = useState(false);

//   // fallback thumbnail (uploaded file path)
//   const fallbackThumb = "sandbox:/mnt/data/e24bf2e1-a06c-4474-b2b6-4ef51e34ea88.png";
//   const thumbUrl = thumbnail || fallbackThumb;

//   useEffect(() => {
//     const a = audioRef.current;
//     if (!a) return;

//     const onTime = () => {
//       setCurrentTime(a.currentTime || 0);
//       setProgress(a.duration ? (a.currentTime / a.duration) * 100 : 0);
//     };
//     const onLoaded = () => {
//       setDuration(a.duration || 0);
//     };
//     a.addEventListener("timeupdate", onTime);
//     a.addEventListener("loadedmetadata", onLoaded);
//     a.addEventListener("ended", () => setIsPlaying(false));

//     return () => {
//       a.removeEventListener("timeupdate", onTime);
//       a.removeEventListener("loadedmetadata", onLoaded);
//     };
//   }, [audio]);

//   // Play / Pause
//   const togglePlay = async () => {
//     const a = audioRef.current;
//     if (!a) return;
//     if (isPlaying) {
//       a.pause();
//       setIsPlaying(false);
//     } else {
//       try {
//         await a.play();
//         setIsPlaying(true);
//       } catch (err) {
//         console.warn("Playback failed:", err);
//       }
//     }
//   };

//   // Seek
//   const onSeek = (e) => {
//     const a = audioRef.current;
//     if (!a) return;
//     const pct = Number(e.target.value);
//     const sec = (pct / 100) * (a.duration || 0);
//     a.currentTime = sec;
//     setProgress(pct);
//   };

//   // Volume
//   const onVolume = (e) => {
//     const a = audioRef.current;
//     const v = Number(e.target.value);
//     setVolume(v);
//     setMuted(v === 0);
//     if (a) a.volume = v;
//   };

//   // helper format time
//   const fmt = (sec = 0) => {
//     if (!sec || Number.isNaN(sec)) return "0:00";
//     const m = Math.floor(sec / 60);
//     const s = Math.floor(sec % 60).toString().padStart(2, "0");
//     return `${m}:${s}`;
//   };

//   return (
//     <div className="player-gradient p-6 max-w-md mx-auto small-shadow">
//       <div className="flex flex-col items-center gap-4">
//         {/* album / thumbnail */}
//         <div className="relative">
//           <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-white small-shadow">
//             <img
//               src={thumbUrl}
//               alt="thumbnail"
//                         onLoad={() => setLoaded(true)}

//               className={`w-full h-full object-cover ${isPlaying ? "animate-spin-slow" : ""}`}
//               style={{transformOrigin: "50% 50%",
//               filter: loaded ? "blur(0px)" : "blur(12px)",
//               transition: "0.4s ease",
//           }}

              
//             />
//           </div>

//           {/* center play/pause overlay */}
//           <button
//             onClick={togglePlay}
//             className="absolute inset-0 m-auto w-12 h-12 rounded-full flex items-center justify-center bg-black/40 hover:bg-black/45 transition"
//             style={{ top: "calc(50% - 24px)" }}
//             aria-label={isPlaying ? "Pause" : "Play"}
//           >
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sm">
//               {isPlaying ? "❚❚" : "▶"}
//             </div>
//           </button>
//         </div>

//         {/* Title */}
//         <div className="text-center">
//           <div className="text-lg font-semibold text-slate-800">{title}</div>
//         </div>

//         {/* controls row */}
//         <div className="w-full flex flex-col gap-3">
//           {/* time and progress bar */}
//           <div className="flex items-center justify-between gap-3 text-sm text-slate-700">
//             <div className="flex items-center gap-4">
//               <button onClick={togglePlay} className="p-1">
//                 <div className="w-9 h-9 rounded-md border border-slate-200 bg-white flex items-center justify-center">
//                   {isPlaying ? "❚❚" : "▶"}
//                 </div>
//               </button>
//               <div className="text-xs">{fmt(currentTime)} / {fmt(duration)}</div>
//             </div>

//             <div className="flex-1 mx-3">
//               <input
//                 type="range"
//                 min="0"
//                 max="100"
//                 value={progress}
//                 onChange={onSeek}
//                 className="w-full range-thumb"
//                 style={{ appearance: "none" }}
//               />
//             </div>

//             {/* volume */}
//             <div className="flex items-center gap-2">
//               <Volume2 className="w-5 h-5 text-slate-600" />
//               <input
//                 type="range"
//                 min="0"
//                 max="1"
//                 step="0.01"
//                 value={muted ? 0 : volume}
//                 onChange={onVolume}
//                 className="w-20"
//               />
//             </div>

//             {/* menu placeholder */}
//             <button className="p-1">
//               <MoreVertical className="w-5 h-5 text-slate-600" />
//             </button>
//           </div>

//           {/* hidden native audio element */}
//           <audio ref={audioRef} src={audio} preload="metadata" />
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause, Music } from "lucide-react";

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
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [loaded, setLoaded] = useState(false);

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

  const onSeek = (e) => {
    const a = audioRef.current;
    if (!a) return;
    const pct = Number(e.target.value);
    const sec = (pct / 100) * (a.duration || 0);
    a.currentTime = sec;
    setProgress(pct);
  };

  const onVolume = (e) => {
    const a = audioRef.current;
    const v = Number(e.target.value);
    setVolume(v);
    setMuted(v === 0);
    if (a) a.volume = v;
  };

  const toggleMute = () => {
    const a = audioRef.current;
    if (!a) return;
    if (muted) {
      a.volume = volume;
      setMuted(false);
    } else {
      a.volume = 0;
      setMuted(true);
    }
  };

  const fmt = (sec = 0) => {
    if (!sec || Number.isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="bg-gradient-to-br from-neutral-900 to-black rounded-xl border border-gray-800 overflow-hidden">
      {/* Container with responsive padding */}
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          {/* Album Art / Thumbnail */}
          <div className="relative flex-shrink-0">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg overflow-hidden border-2 border-orange-500/30 shadow-lg shadow-orange-500/20">
              {thumbnail ? (
                <img
                  src={thumbnail}
                  alt="thumbnail"
                  onLoad={() => setLoaded(true)}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isPlaying ? "scale-105" : "scale-100"
                  }`}
                  style={{
                    filter: loaded ? "blur(0px)" : "blur(12px)",
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <Music className="w-16 h-16 text-white" />
                </div>
              )}
            </div>

            {/* Play/Pause Overlay */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-14 h-14 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/80 backdrop-blur-sm transition-all hover:scale-110"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white fill-white" />
              ) : (
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              )}
            </button>
          </div>

          {/* Controls Section */}
          <div className="flex-1 w-full sm:w-auto">
            {/* Title */}
            <div className="text-center sm:text-left mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 line-clamp-1">
                {title}
              </h3>
              <p className="text-sm text-gray-400">Audio Track</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={onSeek}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:cursor-pointer hover:[&::-webkit-slider-thumb]:bg-orange-600"
                style={{
                  background: `linear-gradient(to right, rgb(249, 115, 22) 0%, rgb(249, 115, 22) ${progress}%, rgb(38, 38, 38) ${progress}%, rgb(38, 38, 38) 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{fmt(currentTime)}</span>
                <span>{fmt(duration)}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg transition-all flex items-center gap-2 text-white font-medium"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-white" />
                    <span className="hidden sm:inline">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span className="hidden sm:inline">Play</span>
                  </>
                )}
              </button>

              {/* Volume Control */}
              <div className="flex items-center gap-2 bg-neutral-800 px-3 py-2 rounded-lg border border-gray-700">
                <button onClick={toggleMute} className="text-gray-400 hover:text-white transition-colors">
                  {muted || volume === 0 ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={muted ? 0 : volume}
                  onChange={onVolume}
                  className="w-16 sm:w-20 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hidden Audio Element */}
        <audio ref={audioRef} src={audio} preload="metadata" />
      </div>
    </div>
  );
}