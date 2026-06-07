import { useState, useRef, useEffect, useCallback } from "react";

export interface Song {
  name: string;
  artists: string[];
  src: string;
}

interface UseMusicPlayerProps {
  song: Song;
}

interface UseMusicPlayerReturn {
  isPlaying: boolean;
  duration: number;
  progressPercentage: number;
  formattedCurrentTime: string;
  formattedDuration: string;
  volume: number;
  togglePlayPause: () => void;
  handleSliderChange: (value: number[]) => void;
  setVolume: (value: number) => void;
  toggleMute: () => void;
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function useMusicPlayer({ song }: UseMusicPlayerProps): UseMusicPlayerReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(100);
  const [isMutedByToggle, setIsMutedByToggle] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(100);

  useEffect(() => {
    const audio = new Audio(song.src);
    audio.preload = "auto";
    audio.volume = 1;

    const onLoadedMetadata = () => setDuration(audio.duration);
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
      audio.pause();
      audio.src = "";
    };
  }, [song.src]);

  const setVolume = useCallback((value: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    const clamped = Math.max(0, Math.min(100, value));
    audio.volume = clamped / 100;
    setVolumeState(clamped);

    if (clamped > 0) {
      setIsMutedByToggle(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (volume > 0) {
      setPreviousVolume(volume);
      setVolume(0);
      setIsMutedByToggle(true);
    } else if (isMutedByToggle) {
      setVolume(previousVolume);
    } else {
      setVolume(40);
    }
  }, [volume, isMutedByToggle, previousVolume, setVolume]);

  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  const handleSliderChange = useCallback((value: number[]) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const newTime = (value[0] / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  }, [duration]);

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;
  const formattedCurrentTime = formatTime(currentTime);
  const formattedDuration = formatTime(duration);

  return {
    isPlaying,
    duration,
    progressPercentage,
    formattedCurrentTime,
    formattedDuration,
    volume,
    togglePlayPause,
    handleSliderChange,
    setVolume,
    toggleMute,
  };
}
