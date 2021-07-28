import { atom } from "recoil";
import { persistAtom } from ".";

export const delayAtom = atom<number>({
  key: "delay",
  default: 1000,
  effects_UNSTABLE: [persistAtom],
});
