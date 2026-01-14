import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AwardType } from "../libs/awards";

interface AwardState {
  blacklist: number[];
  addBlacklist: (index: number) => void;
  resetBlackList: () => void;
  won: {
    name: AwardType["name"];
    index: number[];
  }[];
  addWon: (name: AwardType["name"], index: number) => void;
  resetAll: () => void;
  remove: (index: number) => void;
}

const useAwardStore = create<AwardState>()(
  persist(
    (set) => ({
      blacklist: [],
      addBlacklist(index) {
        set((state) => ({
          blacklist: [...state.blacklist, index],
        }));
      },
      resetBlackList: () => set({ blacklist: [] }),
      won: [],
      addWon(name, index) {
        set((state) => {
          const existAward = state.won.find((a) => a.name === name);
          if (existAward) {
            return {
              won: state.won.map((award) =>
                award.name === name ? { ...award, index: [...award.index, index] } : award
              ),
            };
          }
          return {
            won: [
              ...state.won,
              {
                name,
                index: [index],
              },
            ],
          };
        });
      },
      resetAll() {
        set({
          blacklist: [],
          won: [],
        });
      },
      remove(index) {
        set((state) => ({
          won: state.won.map((a) => ({
            ...a,
            index: a.index.filter((i) => i !== index),
          })),
          blacklist: state.blacklist.filter((i) => i !== index),
        }));
      },
    }),

    { name: "htdh-tatnien-storage" }
  )
);
export default useAwardStore;
