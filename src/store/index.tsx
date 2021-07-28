import { recoilPersist } from "recoil-persist";

export const { persistAtom } = recoilPersist({
  key: "@game-state",
});