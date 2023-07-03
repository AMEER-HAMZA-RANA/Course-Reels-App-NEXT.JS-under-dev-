import React, { useState, useEffect } from 'react';
import { create } from 'zustand';

type FontNameStore = {
  fontName: string;
  setFontName: (fontName: string) => void;
};

const useFontNameStore = create<FontNameStore>((set) => ({
  fontName: 'Arial',
  setFontName: (fontName) => set({ fontName }),
}));


function FontName() {
  const { fontName, setFontName } = useFontNameStore();

  const handleFontNameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFontName(event.target.value);
  };

  useEffect(() => {
    const storedState =  typeof(window) !== 'undefined' && window.localStorage.getItem('fontName');
    if (storedState) {
      setFontName(storedState);
    }
  }, [setFontName]);

  useEffect(() => {
     typeof(window) !== 'undefined' && window.localStorage.setItem('fontName', fontName);
  }, [fontName]);

  return (
    <div>
      <p className="font-bold text-md">Font</p>
      <select
        id="font-name"
        value={fontName}
        onChange={handleFontNameChange}
        className="bg-black rounded px-3 py-1 font-thin mt-1 w-full"
      >
        <option value="Arial">Arial</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>
    </div>
  );
}

export default FontName;

// import { create } from 'zustand'

// type Store = {
//   count: number
//   inc: () => void
// }

// const useStore = create<Store>()((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }))


