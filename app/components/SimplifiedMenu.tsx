'use client';

import { useState, useEffect, useRef } from 'react';

export default function SimplifiedMenu({ setCurrentBackground }: { setCurrentBackground: (bg: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ambience, setAmbience] = useState(false);
  const [hourlyChime, setHourlyChime] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null); // 用于定位菜单容器
  const envAudio = useRef<HTMLAudioElement | null>(null);
  const chimeAudio = useRef<HTMLAudioElement | null>(null);

  // --- 新增：点击外部收回菜单的逻辑 ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 如果菜单是打开的，且点击的对象不在菜单容器内，则关闭
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // 监听全局点击事件
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    // 1. 初始化音频
    const env = new Audio('/hj.mp3');
    env.loop = true;
    envAudio.current = env;
    chimeAudio.current = new Audio('/zs.mp3');

    // 2. 加载设置
    const savedAmbience = localStorage.getItem('setting-ambience') === 'true';
    const savedChime = localStorage.getItem('setting-chime') === 'true';
    const savedAutoRefresh = localStorage.getItem('setting-auto-refresh') === 'true';
    const savedTime = localStorage.getItem('ambience-current-time');

    setAmbience(savedAmbience);
    setHourlyChime(savedChime);
    setAutoRefresh(savedAutoRefresh);

    if (savedTime && env) {
      env.currentTime = parseFloat(savedTime);
    }

    // 3. 记录进度
    const timeTracker = setInterval(() => {
      if (envAudio.current && !envAudio.current.paused) {
        localStorage.setItem('ambience-current-time', envAudio.current.currentTime.toString());
      }
    }, 1000);

    // 4. 自动播放/手势激活逻辑
    const attemptPlay = () => {
      if (savedAmbience) {
        env.play().catch(() => {
          const playOnGesture = () => {
            env.play();
            document.removeEventListener('click', playOnGesture);
          };
          document.addEventListener('click', playOnGesture);
        });
      }
    };
    attemptPlay();

    return () => clearInterval(timeTracker);
  }, []);

  // 环境音开关
  useEffect(() => {
    if (ambience) {
      envAudio.current?.play().catch(() => {});
    } else {
      envAudio.current?.pause();
      localStorage.setItem('ambience-current-time', '0');
    }
    localStorage.setItem('setting-ambience', String(ambience));
  }, [ambience]);

  // 整点逻辑
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      if (now.getMinutes() === 0 && now.getSeconds() === 0) {
        if (autoRefresh) {
          if (hourlyChime) {
            chimeAudio.current?.play();
            setTimeout(() => {
              localStorage.removeItem('daily-background');
              window.location.reload();
            }, 3500);
          } else {
            localStorage.removeItem('daily-background');
            window.location.reload();
          }
        } else if (hourlyChime) {
          chimeAudio.current?.play();
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [hourlyChime, autoRefresh]);

  const handleChimeToggle = (checked: boolean) => {
    setHourlyChime(checked);
    localStorage.setItem('setting-chime', String(checked));
    if (checked) chimeAudio.current?.play();
  };

  const handleRefreshToggle = (checked: boolean) => {
    setAutoRefresh(checked);
    localStorage.setItem('setting-auto-refresh', String(checked));
    if (checked) {
      localStorage.removeItem('daily-background');
      window.location.reload();
    }
  };

  return (
    // 使用 menuRef 包裹整个菜单区域（包括按钮和面板）
    <div ref={menuRef} className="fixed top-4 left-2 md:top-8 md:left-8 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex items-center justify-center transition-all opacity-40 hover:opacity-100"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-white text-xl`}></i>
      </button>

      {isOpen && (
        <div className="absolute top-10 left-2 w-48 md:w-56 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl animate-in fade-in zoom-in duration-200">
          <div className="space-y-5">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-white/80 tracking-widest">声临其境</span>
              <input type="checkbox" checked={ambience} onChange={e => setAmbience(e.target.checked)} className="w-4 h-4 accent-white/50" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-white/80 tracking-widest">整点钟声</span>
              <input type="checkbox" checked={hourlyChime} onChange={e => handleChimeToggle(e.target.checked)} className="w-4 h-4 accent-white/50" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-white/80 tracking-widest">整点刷新</span>
              <input type="checkbox" checked={autoRefresh} onChange={e => handleRefreshToggle(e.target.checked)} className="w-4 h-4 accent-white/50" />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}