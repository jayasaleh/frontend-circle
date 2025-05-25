interface SuhuCounterStore {
  counter: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementByAmound: (amount: number) => void;
  decrementByAmound: (amount: number) => void;
}
export type { SuhuCounterStore };
