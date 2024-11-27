import { SetStateAction } from "react";

export interface ChordInputProps {
  notes: {id: number, name: string}[];
  intervals: {id: number, name: string}[];
  addChord: (inp: string, type: "note" | "interval") => any;
  removeChord: any;
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
  newLine: () => any;
  
}
