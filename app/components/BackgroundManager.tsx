
'use client';

import { useState, useRef, useEffect } from 'react';

interface BackgroundManagerProps {
  setCurrentBackground: (bg: string) => void;
}

const backgroundImages = [
  'https://readdy.ai/api/search-image?query=peaceful%20zen%20temple%20courtyard%20with%20stone%20lanterns%20at%20dawn%2C%20traditional%20chinese%20architecture%2C%20misty%20mountains%20in%20background%2C%20soft%20golden%20morning%20light%2C%20minimalist%20composition%20with%20ancient%20pine%20trees%20and%20meditation%20stones&width=1920&height=1080&seq=zen-bg-2&orientation=landscape',
  'https://readdy.ai/api/search-image?query=serene%20bamboo%20forest%20with%20sunlight%20filtering%20through%20leaves%2C%20traditional%20zen%20garden%20path%2C%20peaceful%20meditation%20space%20with%20stone%20arrangements%2C%20soft%20natural%20lighting%2C%20minimalist%20asian%20aesthetic&width=1920&height=1080&seq=zen-bg-3&orientation=landscape',
  'https://readdy.ai/api/search-image?query=tranquil%20lotus%20pond%20at%20sunrise%20with%20morning%20mist%2C%20traditional%20chinese%20pavilion%20in%20distance%2C%20peaceful%20water%20reflection%2C%20soft%20pastel%20colors%2C%20zen%20meditation%20environment%20with%20natural%20harmony&width=1920&height=1080&seq=zen-bg-4&orientation=landscape',
  'https://readdy.ai/api/search-image?query=ancient%20chinese%20temple%20on%20mountain%20peak%20with%20clouds%20below%2C%20traditional%20architecture%20against%20dramatic%20sky%2C%20peaceful%20monastery%20setting%2C%20golden%20hour%20lighting%2C%20spiritual%20meditation%20atmosphere&width=1920&height=1080&seq=zen-bg-5&orientation=landscape',
  'https://images.unsplash.com/photo-1524262134826-05a36ba28ec4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1682685796766-0fddd3e480de?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1709579654090-3f3ca8f8416b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1573035114505-e2a570d94b1b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1674880642932-37b0f951ff9f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1709579654090-3f3ca8f8416b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1725583630737-1caa14afbfb3?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1589400554239-7c6cf8393a6e?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1732163627219-39eebb7544f1?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://readdy.ai/api/search-image?query=minimalist%20zen%20rock%20garden%20with%20raked%20sand%20patterns%2C%20traditional%20japanese%20stones%20arrangement%2C%20peaceful%20meditation%20space%2C%20soft%20natural%20lighting%2C%20clean%20lines%20and%20harmony&width=1920&height=1080&seq=zen-bg-6&orientation=landscape'
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
