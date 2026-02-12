"use client";

import { type Animal } from "../animals";

interface KeyboardProps {
  animals: Animal[];
  onKeyPress: (key: string) => void;
  currentLetter: string;
}

export default function Keyboard({ animals, onKeyPress, currentLetter }: KeyboardProps) {
  // 将 A-Z 分成两行
  const firstRow = animals.slice(0, 13); // A-M
  const secondRow = animals.slice(13); // N-Z

  const KeyButton = ({ animal }: { animal: Animal }) => {
    const isActive = animal.letter === currentLetter;

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
    <div className="space-y-4">
      {/* 第一行 A-M */}
      <div className="flex flex-wrap justify-center gap-2">
        {firstRow.map((animal) => (
          <KeyButton key={animal.letter} animal={animal} />
        ))}
      </div>

      {/* 第二行 N-Z */}
      <div className="flex flex-wrap justify-center gap-2">
        {secondRow.map((animal) => (
          <KeyButton key={animal.letter} animal={animal} />
        ))}
      </div>

      {/* 提示 */}
      <p className="text-center text-sm text-amber-600/70 dark:text-amber-500/70">
        💡 提示：也可以直接按键盘上的字母键！
      </p>
    </div>
  );
}
