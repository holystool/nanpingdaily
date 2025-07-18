
'use client';

import { useState, useEffect, useRef } from 'react';
import DateDisplay from './components/DateDisplay';
import QuoteDisplay from './components/QuoteDisplay';
import AudioControls from './components/AudioControls';
import BackgroundManager from './components/BackgroundManager';

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState({ quote_content: '', quote_source: '' });
  const [currentBackground, setCurrentBackground] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 页面加载动画
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden font-noto-serif-sc">
      {/* 背景图片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: currentBackground ? `url(${currentBackground})` : `url(https://readdy.ai/api/search-image?query=serene%20zen%20garden%20with%20morning%20mist%2C%20traditional%20chinese%20temple%20in%20background%2C%20peaceful%20bamboo%20forest%2C%20soft%20golden%20light%20filtering%20through%20trees%2C%20minimalist%20composition%20with%20natural%20stones%20and%20flowing%20water&width=1920&height=1080&seq=zen-bg-1&orientation=landscape)`,
          filter: 'blur(1px)'
        }}
      />
      
      {/* 黑色遮罩 */}
      <div className="absolute inset-0 bg-black/25" />
      
      {/* 主要内容 */}
      <div className={`relative z-10 min-h-screen flex flex-col transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* 头部时间显示 */}
        <div className="flex-shrink-0 pt-12 pb-8">
          <DateDisplay />
        </div>
        
        {/* 中央内容区域 */}
        <div className="flex-1 flex flex-col justify-center px-8 max-w-4xl mx-auto w-full">
          {/* 金句展示 */}
          <QuoteDisplay 
            currentQuote={currentQuote}
            setCurrentQuote={setCurrentQuote}
          />
        </div>
        
        {/* 底部控制区 */}
        <div className="flex-shrink-0 pb-8">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              {/* 音频控制 */}
              <AudioControls />
              
              {/* 背景管理 */}
              <BackgroundManager 
                setCurrentBackground={setCurrentBackground}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
