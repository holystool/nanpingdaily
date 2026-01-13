
'use client';

import { useState, useRef, useEffect } from 'react';

interface BackgroundManagerProps {
  setCurrentBackground: (bg: string) => void;
}

// 如果要改成本地图片，把那些长长的网址全删了，改成这样：
const backgroundImages = [
  '/images/bg01.jpg',
  '/images/bg02.jpg',
  '/images/bg03.jpg',
];



export default function BackgroundManager({ setCurrentBackground }: BackgroundManagerProps) {
  const [isChanging, setIsChanging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 每日随机背景
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('bg-date');
    const savedBg = localStorage.getItem('daily-background');
    
    if (savedDate !== today || !savedBg) {
      const randomBg = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
      localStorage.setItem('bg-date', today);
      localStorage.setItem('daily-background', randomBg);
      setCurrentBackground(randomBg);
    } else {
      setCurrentBackground(savedBg);
    }
  }, [setCurrentBackground]);

  const changeRandomBackground = () => {
    if (isChanging) return;
    
    setIsChanging(true);
    const randomBg = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    
    setTimeout(() => {
      setCurrentBackground(randomBg);
      localStorage.setItem('daily-background', randomBg);
      setIsChanging(false);
    }, 300);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setCurrentBackground(imageUrl);
        sessionStorage.setItem('custom-background', imageUrl);
      };
      reader.readAsDataURL(file);
    }
    // 清除文件选择，允许重复上传同一文件
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const openFileSelector = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex gap-3 items-center">
      {/* 随机更换背景 */}
      <button
        onClick={changeRandomBackground}
        disabled={isChanging}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
        title="随机背景"
      >
        <i className={`fas fa-random text-white transition-transform duration-300 ${isChanging ? 'animate-spin' : 'group-hover:rotate-180'}`} />
        <span className="text-white text-sm whitespace-nowrap hidden sm:inline">随机背景</span>
      </button>

      {/* 自定义背景上传 */}
      <button
        onClick={openFileSelector}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-105 group"
        title="自定义背景"
      >
        <i className="fas fa-upload text-white group-hover:scale-110 transition-transform duration-300" />
        <span className="text-white text-sm whitespace-nowrap hidden sm:inline">自定义背景</span>
      </button>

      {/* 隐藏的文件输入 */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
}
