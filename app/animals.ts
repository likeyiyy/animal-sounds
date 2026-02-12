// A-Z 动物数据配置
export interface Animal {
  letter: string;
  name: string;
  nameEn: string;
  emoji: string;
  searchKeywords: string; // 用于图片/音效搜索
}

export const animals: Animal[] = [
  { letter: "A", name: "蚂蚁", nameEn: "Ant", emoji: "🐜", searchKeywords: "ant" },
  { letter: "B", name: "熊", nameEn: "Bear", emoji: "🐻", searchKeywords: "bear" },
  { letter: "C", name: "猫", nameEn: "Cat", emoji: "🐱", searchKeywords: "cat" },
  { letter: "D", name: "狗", nameEn: "Dog", emoji: "🐕", searchKeywords: "dog" },
  { letter: "E", name: "大象", nameEn: "Elephant", emoji: "🐘", searchKeywords: "elephant" },
  { letter: "F", name: "青蛙", nameEn: "Frog", emoji: "🐸", searchKeywords: "frog" },
  { letter: "G", name: "长颈鹿", nameEn: "Giraffe", emoji: "🦒", searchKeywords: "giraffe" },
  { letter: "H", name: "河马", nameEn: "Hippo", emoji: "🦛", searchKeywords: "hippo" },
  { letter: "I", name: "鬣蜥", nameEn: "Iguana", emoji: "🦎", searchKeywords: "iguana" },
  { letter: "J", name: "水母", nameEn: "Jellyfish", emoji: "🪼", searchKeywords: "jellyfish" },
  { letter: "K", name: "袋鼠", nameEn: "Kangaroo", emoji: "🦘", searchKeywords: "kangaroo" },
  { letter: "L", name: "狮子", nameEn: "Lion", emoji: "🦁", searchKeywords: "lion" },
  { letter: "M", name: "猴子", nameEn: "Monkey", emoji: "🐵", searchKeywords: "monkey" },
  { letter: "N", name: "夜莺", nameEn: "Nightingale", emoji: "🐦", searchKeywords: "nightingale bird" },
  { letter: "O", "name": "猫头鹰", nameEn: "Owl", emoji: "🦉", searchKeywords: "owl" },
  { letter: "P", name: "熊猫", nameEn: "Panda", emoji: "🐼", searchKeywords: "panda" },
  { letter: "Q", name: "鹌鹑", nameEn: "Quail", emoji: "🐔", searchKeywords: "quail bird" },
  { letter: "R", name: "兔子", nameEn: "Rabbit", emoji: "🐰", searchKeywords: "rabbit" },
  { letter: "S", name: "蛇", nameEn: "Snake", emoji: "🐍", searchKeywords: "snake" },
  { letter: "T", name: "老虎", nameEn: "Tiger", emoji: "🐯", searchKeywords: "tiger" },
  { letter: "U", name: "独角兽", nameEn: "Unicorn", emoji: "🦄", searchKeywords: "unicorn" },
  { letter: "V", name: "秃鹫", nameEn: "Vulture", emoji: "🦅", searchKeywords: "vulture bird" },
  { letter: "W", name: "鲸鱼", nameEn: "Whale", emoji: "🐋", searchKeywords: "whale" },
  { letter: "X", name: "X射线鱼", nameEn: "X-ray Fish", emoji: "🐟", searchKeywords: "tropical fish" },
  { letter: "Y", name: "牦牛", nameEn: "Yak", emoji: "🐄", searchKeywords: "yak" },
  { letter: "Z", name: "斑马", nameEn: "Zebra", emoji: "🦓", searchKeywords: "zebra" },
];

// 根据字母获取动物
export const getAnimalByLetter = (letter: string): Animal | undefined => {
  return animals.find((a) => a.letter.toUpperCase() === letter.toUpperCase());
};

// 根据索引获取动物
export const getAnimalByIndex = (index: number): Animal | undefined => {
  return animals[index];
};
