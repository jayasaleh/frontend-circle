import { SuhuCounterStore } from "@/types/suhu";
import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useSuhuCounterStore = create<SuhuCounterStore>()(
  persist(
    (set) => ({
      counter: 20,
      increment: () => {
        set((state) => ({ counter: state.counter + 1 }));
      },
      decrement: () => {
        set((state) => ({ counter: state.counter - 1 }));
      },
      incrementByAmound: (amount: number) => {
        set((state) => ({ counter: state.counter + amount }));
      },
      decrementByAmound: (amount: number) => {
        set((state) => ({ counter: state.counter - amount }));
      },
      reset: () => {
        set(() => ({ counter: 20 }));
      },
    }),
    { name: "suhu-counter-store" }
  )
);
