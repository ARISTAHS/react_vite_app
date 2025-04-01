import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist();

export const userState = atom({
  key : "userState",
  default : null,
  effects_UNSTABLE: [persistAtom], // 상태를 localStorage에 저장
});