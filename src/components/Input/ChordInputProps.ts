import { SetStateAction } from "react";

export interface ChordInputProps {
  notes: string[];
  intervals: string[];
  addChord: (inp: string, type: "note" | "interval") => any;
  removeChord: any;
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
  newLine: () => any;
}
