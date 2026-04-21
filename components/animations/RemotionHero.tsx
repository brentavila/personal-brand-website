"use client";

import { Player } from "@remotion/player";
import { HeroCompositionComponent } from "./HeroComposition";

export function RemotionHero() {
  return (
    <Player
      component={HeroCompositionComponent}
      durationInFrames={150}
      fps={30}
      compositionWidth={1100}
      compositionHeight={500}
      style={{ width: "100%", height: "100%" }}
      loop
      autoPlay
      controls={false}
    />
  );
}
