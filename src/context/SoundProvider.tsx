import { PropsWithChildren, createContext } from "react";

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

const SoundTypeToFile: Record<
  SoundType,
  HTMLAudioElement | HTMLAudioElement[]
> = {
  [SoundType.LampOn]: [
    new Audio("/sounds/lamp-on.m4a"),
    new Audio("/sounds/lamp-on-2.m4a"),
  ],
  [SoundType.LampOff]: new Audio("/sounds/lamp-off.m4a"),
};

export function SoundProvider({ children }: PropsWithChildren<object>) {
  function playSound(sound: SoundType) {
    const soundFiles = SoundTypeToFile[sound];
    if (soundFiles instanceof Array) {
      soundFiles[Math.floor(Math.random() * soundFiles.length)].play();
    } else {
      soundFiles.play();
    }
  }

  return (
    <SoundContext.Provider value={{ playSound }}>
      {children}
    </SoundContext.Provider>
  );
}
