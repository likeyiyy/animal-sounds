"use client";

import { type Animal } from "../animals";

interface KeyboardProps {
  animals: Animal[];
  onKeyPress: (key: string) => void;
  currentLetter: string;
}

export default function Keyboard({ animals, onKeyPress, currentLetter }: KeyboardProps) {
  // QWERTY 键盘布局
  const keyboardRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"]
  ];

  const KeyButton = ({ letter }: { letter: string }) => {
    const animal = animals.find(a => a.letter === letter);
    const isActive = animal && animal.letter === currentLetter;

    if (!animal) return null;

    return (
      <button
        onClick={() => onKeyPress(animal.letter)}
        className={`
          relative flex h-14 min-w-[3rem] flex-col items-center justify-center
          rounded-xl font-bold shadow-lg transition-all duration-200
          hover:scale-110 hover:-translate-y-1 active:scale-95
          ${isActive
            ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white scale-105 shadow-xl"
            : "bg-white text-amber-700 hover:bg-amber-50 dark:bg-gray-700 dark:text-amber-300 dark:hover:bg-gray-600"
          }
        `}
      >
        {/* 字母 */}
        <span className="text-lg">{animal.letter}</span>
        {/* Emoji */}
        <span className="text-sm">{animal.emoji}</span>
      </button>
    );
  };

  return (
    <div className="space-y-2">
      {keyboardRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap justify-center gap-2">
          {row.map((letter) => (
            <KeyButton key={letter} letter={letter} />
          ))}
        </div>
      ))}

      {/* 提示 */}
      <p className="text-center text-sm text-amber-600/70 dark:text-amber-500/70">
        提示：也可以直接按键盘上的字母键！
      </p>
    </div>
  );
}
