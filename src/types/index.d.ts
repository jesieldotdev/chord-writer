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

interface Music{
  _id: string,
  name: string,
  sheets: VerseProps[],
}

interface PostDataProps{
  name: string
  sheets: VerseProps[]
}