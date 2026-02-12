# 🎵 动物声音认知

一个通过 A-Z 字母学习认识动物和动物声音的儿童启蒙教育应用。

## 功能特点

- **A-Z 字母学习**：每个字母对应一种动物
- **三重声音学习**：
  - 🔵 中文名称发音（如：狗）
  - 🟣 英文名称发音（如：Dog）
  - 🟢 动物叫声（如：汪汪）
- **卡通 Emoji 形象**：可爱的动物表情符号
- **键盘交互**：支持物理键盘和虚拟键盘
- **响应式设计**：适配各种屏幕尺寸
- **本地音频**：使用 Edge-TTS 生成的中文语音，加载快速

## 技术栈

- **Next.js 16** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式
- **Edge-TTS** - 微软 Edge 中文语音合成

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 运行开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 部署完成！

## 项目结构

```
animal-sounds/
├── app/
│   ├── animals.ts          # 动物数据配置
│   ├── components/
│   │   ├── AnimalCard.tsx  # 动物展示卡片
│   │   └── Keyboard.tsx    # 虚拟键盘
│   ├── layout.tsx
│   └── page.tsx            # 主页面
├── public/
│   └── audio/             # 预生成的语音文件
└── next.config.ts          # Next.js 配置
```

## 动物列表

| 字母 | 动物 | 字母 | 动物 |
|------|------|------|------|
| A | 蚂蚁 Ant | N | 夜莺 Nightingale |
| B | 熊 Bear | O | 猫头鹰 Owl |
| C | 猫 Cat | P | 熊猫 Panda |
| D | 狗 Dog | Q | 鹌鹑 Quail |
| E | 大象 Elephant | R | 兔子 Rabbit |
| F | 青蛙 Frog | S | 蛇 Snake |
| G | 长颈鹿 Giraffe | T | 老虎 Tiger |
| H | 河马 Hippo | U | 独角兽 Unicorn |
| I | 鬣蜥 Iguana | V | 秃鹫 Vulture |
| J | 水母 Jellyfish | W | 鲸鱼 Whale |
| K | 袋鼠 Kangaroo | X | X射线鱼 X-ray Fish |
| L | 狮子 Lion | Y | 牦牛 Yak |
| M | 猴子 Monkey | Z | 斑马 Zebra |
