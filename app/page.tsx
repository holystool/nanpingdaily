<<<<<<< HEAD

=======
>>>>>>> e23c360 (优化：实现极简菜单、整点报时及背景音续播)
'use client';

import { useState, useEffect, useRef } from 'react';
import DateDisplay from './components/DateDisplay';
import QuoteDisplay from './components/QuoteDisplay';
<<<<<<< HEAD
import AudioControls from './components/AudioControls';
=======
import SimplifiedMenu from './components/SimplifiedMenu';
>>>>>>> e23c360 (优化：实现极简菜单、整点报时及背景音续播)
import BackgroundManager from './components/BackgroundManager';

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState({ quote_content: '', quote_source: '' });
  const [currentBackground, setCurrentBackground] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
<<<<<<< HEAD

  useEffect(() => {
    // 页面加载动画
=======
  
  // 用于连接菜单和背景控制的引用
  const bgTriggerRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // 页面加载入场动画
>>>>>>> e23c360 (优化：实现极简菜单、整点报时及背景音续播)
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
<<<<<<< HEAD
    <div className="min-h-screen relative overflow-hidden font-noto-serif-sc">
      {/* 背景图片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: currentBackground ? `url(${currentBackground})` : `url(https://readdy.ai/api/search-image?query=serene%20zen%20garden%20with%20morning%20mist%2C%20traditional%20chinese%20temple%20in%20background%2C%20peaceful%20bamboo%20forest%2C%20soft%20golden%20light%20filtering%20through%20trees%2C%20minimalist%20composition%20with%20natural%20stones%20and%20flowing%20water&width=1920&height=1080&seq=zen-bg-1&orientation=landscape)`,
=======
    <div className="min-h-screen relative overflow-hidden font-noto-serif-sc bg-[#1a1a1a]">
      {/* 1. 背景逻辑组件：放置在 return 中以激活其内部的 useEffect */}
      <BackgroundManager 
        setCurrentBackground={setCurrentBackground} 
        triggerRef={bgTriggerRef} 
      />

      {/* 2. 背景显示层：使用 url('') 确保在线链接解析正常 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: currentBackground ? `url('${currentBackground}')` : 'none',
>>>>>>> e23c360 (优化：实现极简菜单、整点报时及背景音续播)
          filter: 'blur(1px)'
        }}
      />
      
<<<<<<< HEAD
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
=======
      {/* 3. 压暗遮罩：让文字更清晰，禅意更浓 */}
      <div className="absolute inset-0 bg-black/35" />
      
      {/* 4. 主要内容布局容器 */}
      <div className={`relative z-10 h-screen flex flex-col transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        
        {/* 顶部日期：pt-20 留出空间给左上角的菜单按钮 */}
        <div className="flex-shrink-0 pt-20 md:pt-24 pb-8">
          <DateDisplay />
        </div>
        
        {/* 中央格言：使用 justify-start 并配合 pt-12 使其位置上移，达到画面平衡 */}
        <div className="flex-1 flex flex-col justify-start pt-12 md:pt-20 px-8 max-w-5xl mx-auto w-full text-center">
>>>>>>> e23c360 (优化：实现极简菜单、整点报时及背景音续播)
          <QuoteDisplay 
            currentQuote={currentQuote}
            setCurrentQuote={setCurrentQuote}
          />
        </div>
<<<<<<< HEAD
        
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
=======

        {/* 底部占位：确保格言不会掉到底部 */}
        <div className="flex-shrink-0 h-24" />
        
        {/* 5. 极简菜单组件 (已包含声音续播、整点响铃、整点刷新逻辑) */}
        <SimplifiedMenu setCurrentBackground={setCurrentBackground} />
      </div>
    </div>
  );
}
>>>>>>> e23c360 (优化：实现极简菜单、整点报时及背景音续播)
