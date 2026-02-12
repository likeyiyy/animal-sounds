"use client";

import { useState, useRef, useEffect } from "react";
import { type Animal } from "../animals";

// 文本转 Base64 文件名
function textToFilename(text: string): string {
  const base64 = btoa(unescape(encodeURIComponent(text)));
  return base64.replace(/\//g, '_').replace(/\+/g, '-').replace(/=+$/, '');
}

interface AnimalCardProps {
  animal: Animal;
  autoPlay?: boolean; // 是否自动播放
  onManualPlay?: () => void; // 手动点击按钮的回调
}

export default function AnimalCard({ animal, autoPlay = false, onManualPlay }: AnimalCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 三种声音：中文、英文、叫声
  const sounds = [
    { type: "中文", text: animal.name },
    { type: "English", text: animal.nameEn },
    {
      type: "叫声",
      text: ({
        "蚂蚁": "吱吱", "熊": "吼吼", "猫": "喵喵", "狗": "汪汪",
        "大象": "呜呜", "青蛙": "呱呱", "长颈鹿": "嗯嗯", "河马": "哼哼",
        "鬣蜥": "嘶嘶", "水母": "咕噜", "袋鼠": "咚咚", "狮子": "嗷呜",
        "猴子": "吱吱", "夜莺": "啾啾", "猫头鹰": "咕咕", "熊猫": "哼哼",
        "鹌鹑": "哔哔", "兔子": "咕咕", "蛇": "嘶嘶", "老虎": "嗷呜",
        "独角兽": "咴咴", "秃鹫": "嘎嘎", "鲸鱼": "嗡嗡", "X射线鱼": "咕嘟",
        "牦牛": "哞哞", "斑马": "嘶鸣",
      }[animal.name] || animal.name)
    },
  ];

  // 播放声音
  const playSound = async (manual = false) => {
    if (isPlaying) return;

    // 手动点击时通知父组件禁用自动播放
    if (manual && onManualPlay) {
      onManualPlay();
    }

    try {
      setIsPlaying(true);
      setCurrentIndex(-1);

      for (let i = 0; i < sounds.length; i++) {
        setCurrentIndex(i);

        const sound = sounds[i];
        const filename = textToFilename(sound.text);
        const url = `/audio/${filename}.mp3`;

        await new Promise<void>((resolve) => {
          const audio = new Audio(url);
          audio.onended = () => resolve();
          audio.onerror = () => resolve();
          audio.play().catch(() => resolve());
          audioRef.current = audio;
        });

        if (i < sounds.length - 1) {
          await new Promise(r => setTimeout(r, 400));
        }
      }
    } catch (error) {
      console.error("Error playing sound:", error);
    } finally {
      setIsPlaying(false);
    }
  };

  // 自动播放（当动物切换时）
  useEffect(() => {
    if (autoPlay) {
      // 短暂延迟确保组件已完全挂载
      const timer = setTimeout(() => {
        playSound();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [animal]);

  return (
    <>
      <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-800">
        {/* 顶部装饰条 */}
        <div className="h-4 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400"></div>

        {/* 内容区 */}
        <div className="p-8">
          {/* 大字母显示 */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-100 text-5xl font-bold text-amber-600 dark:bg-amber-900 dark:text-amber-400">
              {animal.letter}
            </div>
            <button
              onClick={() => playSound(true)}
              disabled={isPlaying}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
              aria-label="播放声音"
            >
              {isPlaying ? (
                <span className="flex gap-1">
                  <span className="h-4 w-1 animate-pulse bg-white"></span>
                  <span className="h-6 w-1 animate-pulse bg-white" style={{ animationDelay: "0.1s" }}></span>
                  <span className="h-3 w-1 animate-pulse bg-white" style={{ animationDelay: "0.2s" }}></span>
                </span>
              ) : (
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              )}
            </button>
          </div>

          {/* 动物 Emoji */}
          <div className="mb-6 flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-700 dark:to-gray-600">
            <div className="text-9xl animate-bounce">{animal.emoji}</div>
          </div>

          {/* 动物名称 */}
          <div className="mb-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
              {animal.name}
            </h2>
            <p className="mt-2 text-2xl text-amber-600 dark:text-amber-400">
              {animal.nameEn}
            </p>
          </div>

          {/* 播放进度指示器 */}
          <div className="flex justify-center gap-2">
            {sounds.map((sound, index) => (
              <div
                key={sound.type}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  index <= currentIndex && currentIndex >= 0 ? "bg-amber-400" : "bg-gray-200 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 底部装饰条 */}
        <div className="h-2 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400"></div>
      </div>
    </>
  );
}
