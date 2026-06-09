"use client";

import { cn } from "~/lib/utils";
import { Button } from "./button";
import { Slider } from "./slider";
import {
  PauseIcon,
  SkipBackIcon,
  SkipForwardIcon,
  PlayIcon,
  SpeakerXIcon,
  SpeakerNoneIcon,
  SpeakerLowIcon,
  SpeakerHighIcon,
} from "@phosphor-icons/react";
import { useMusicPlayer } from "~/hooks/use-music-player";
import type { Song } from "~/hooks/use-music-player";

function getSpeakerIcon(volume: number) {
  if (volume === 0) return SpeakerXIcon;
  if (volume <= 10) return SpeakerNoneIcon;
  if (volume <= 55) return SpeakerLowIcon;
  return SpeakerHighIcon;
}

export default function MusicPlayer({ song, className }: { song: Song; className?: string }) {
  const {
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
  } = useMusicPlayer({ song });

  const SpeakerIcon = getSpeakerIcon(volume);

  return (
    <div className={cn("w-full flex flex-col", className)}>
      <div className="flex flex-col min-w-0">
        <p className="text-lg font-semibold truncate !mb-0">{song.name}</p>
        <p className="text-sm text-muted-foreground truncate">
          {song.artists.join(", ")}
        </p>
      </div>
      <div className="relative mt-3">
        <Slider
          value={[progressPercentage]}
          max={100}
          step={1}
          aria-label="Music progress slider"
          onValueChange={handleSliderChange}
          disabled={duration === 0}
          className="cursor-pointer"
        />
        <div className="w-full flex justify-between mt-1.5 text-xs text-muted-foreground">
          <span>{formattedCurrentTime}</span>
          <span>{formattedDuration}</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-[120px] hidden sm:block" />
        <div className="flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="size-8"
            aria-label="Skip backwards"
            disabled
          >
            <SkipBackIcon className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-8"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <PauseIcon className="size-5" />
            ) : (
              <PlayIcon className="size-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-8"
            aria-label="Skip forward"
            disabled
          >
            <SkipForwardIcon className="size-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2 w-[120px] justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="size-7"
            onClick={toggleMute}
            aria-label={volume === 0 ? "Unmute" : "Mute"}
          >
            <SpeakerIcon className="size-5" />
          </Button>
          <Slider
            value={[volume]}
            max={100}
            step={1}
            aria-label="Volume slider"
            onValueChange={(value) => setVolume(value[0])}
            className="w-20 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
