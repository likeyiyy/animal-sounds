"use client";

import { useState, useEffect, useCallback } from "react";
import { animals, getAnimalByLetter, type Animal } from "./animals";
import AnimalCard from "./components/AnimalCard";
import Keyboard from "./components/Keyboard";

export default function Home() {
  const [currentAnimal, setCurrentAnimal] = useState<Animal>(animals[0]);

  // 键盘事件处理
  const handleKeyPress = useCallback(
    (key: string) => {
      const animal = getAnimalByLetter(key);
      if (animal) {
        setCurrentAnimal(animal);
      }
    },
    []
  );

  // 物理键盘支持
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 只响应 A-Z 字母
      if (/^[a-zA-Z]$/.test(e.key)) {
        handleKeyPress(e.key.toUpperCase());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyPress]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* 头部 */}
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold text-amber-800 dark:text-amber-400">
          🎵 动物声音认知 🎵
        </h1>
        <p className="mt-2 text-lg text-amber-600 dark:text-amber-500">
          按下 A-Z 任意字母，认识动物和它们的声音！
        </p>
      </header>

      {/* 主内容区 */}
      <main className="mx-auto max-w-6xl px-4 pb-8">
        {/* 动物展示卡片 */}
        <div className="mb-8">
          <AnimalCard animal={currentAnimal} />
        </div>

        {/* 键盘 */}
        <Keyboard animals={animals} onKeyPress={handleKeyPress} currentLetter={currentAnimal.letter} />
      </main>

      {/* 页脚 */}
      <footer className="py-4 text-center text-sm text-amber-600/70 dark:text-amber-500/70">
        <p>音效来自 Pixabay</p>
      </footer>
    </div>
  );
}
