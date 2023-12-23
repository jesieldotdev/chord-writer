import { useState } from "react";

const HomeViewController = () => {
  const notes = ["C", "D", "E", "F", "G", "A", "B"] as string[];

  const intervals = [
    "m",
    "M",
    "#",
    "b",
    "b3",
    "3",
    "4",
    "b5",
    "5",
    "b7",
    "7",
    "9",
    "11",
    "#11",
    "13",
  ];

  const [sheet, setSheet] = useState<string[]>([]);
  const [actualNote, setAtualNote] = useState<string>();

  function addChord(chord:string) {
    setAtualNote(chord)
    setSheet((prev) => [...prev, chord]);
  }
  function removeChord(chord:string) {
    setSheet((prev) => {
      const novoArray = [...prev.slice(0, -1)];
      return novoArray;
    });
  }
  return {
    notes,
    intervals,
    sheet,
    setSheet,
    addChord,
    removeChord

  };
};

export default HomeViewController
