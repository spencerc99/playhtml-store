import { PropsWithChildren, createContext, useMemo } from "react";

export enum SoundType {
  LampOn = "LampOn",
  LampOff = "LampOff",
}

interface SoundContextType {
  playSound: (sound: SoundType) => void;
}

export const SoundContext = createContext<SoundContextType>({
  playSound: () => {},
});

const SoundTypeToFile: Record<SoundType, HTMLAudioElement> = {
  [SoundType.LampOn]: new Audio("/sounds/lamp-on.m4a"),
  [SoundType.LampOff]: new Audio("/sounds/lamp-off.m4a"),
};

export function SoundProvider({ children }: PropsWithChildren<object>) {
  function playSound(sound: SoundType) {
    const soundFile = SoundTypeToFile[sound];
    soundFile.play();
  }

  return (
    <SoundContext.Provider value={{ playSound }}>
      {children}
    </SoundContext.Provider>
  );
}
