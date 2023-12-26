export interface SheetProps {
  note: string;
  intervals: string[];
  // id: string;
}

export interface VerseProps {
  id: string;
  name: string;
  chords: SheetProps[];
}

export interface NewTitle{
  id: string
  newName: string
}
