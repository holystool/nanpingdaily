'use client';

import { useState, useEffect, useRef } from 'react';

export default function SimplifiedMenu({ setCurrentBackground }: { setCurrentBackground: (bg: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ambience, setAmbience] = useState(false);
  const [hourlyChime, setHourlyChime] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const envAudio = useRef<HTMLAudioElement | null>(null);
  const chimeAudio = useRef<HTMLAudioElement | null>(null);

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

    // 3. 尝试恢复播放进度
    if (savedTime && env) {
      env.currentTime = parseFloat(savedTime);
    }

    // 4. 实时记录播放进度（每秒记录一次）
    const timeTracker = setInterval(() => {
      if (envAudio.current && !envAudio.current.paused) {
        localStorage.setItem('ambience-current-time', envAudio.current.currentTime.toString());
      }
    }, 1000);

    // 5. 自动播放尝试 (针对 F5 刷新)
    const attemptPlay = () => {
      if (savedAmbience) {
        env.play().catch(() => {
          console.log("浏览器拦截了自动播放，等待用户点击页面后重试...");
          // 如果被拦截，监听全文点击，点一下就播
          const playOnGesture = () => {
            env.play();
            document.removeEventListener('click', playOnGesture);
          };
          document.addEventListener('click', playOnGesture);
        });
      }
    };
    attemptPlay();

    return () => {
      clearInterval(timeTracker);
      clearInterval(hourlyTimer);
    };
  }, []);

  // 环境音开关手动控制
  useEffect(() => {
    if (ambience) {
      envAudio.current?.play().catch(() => {});
    } else {
      envAudio.current?.pause();
      localStorage.setItem('ambience-current-time', '0'); // 关闭时重置进度
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
    <div className="fixed top-4 left-2 md:top-8 md:left-8 z-50">
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