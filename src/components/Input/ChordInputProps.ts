import { SetStateAction } from "react";
import { SheetProps } from "../../types";

export interface ChordInputProps {
  notes: {id: number, name: string}[];
  intervals: {id: number, name: string}[];
  addChord: (inp: string, type: "note" | "interval") => any;
  removeChord: any;
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
  newLine: () => any;
  chords: SheetProps[];
  // intervals: string
  showKeyboard: boolean
  className?: string
}
