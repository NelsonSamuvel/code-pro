import { create } from "zustand";

export type TipType = {
  id?: number;
  title: string;
  content: string;
  category_id?: number;
};

type EditTipType = {
  tip: TipType;
  setTip: (data: TipType) => void;
};

export const useEditTip = create<EditTipType>((set) => ({
  tip: { id: undefined, title: "", content: "", category_id: undefined },
  setTip: (newTip) => {
    console.log(newTip);
    set({ tip: newTip });
  },
}));
