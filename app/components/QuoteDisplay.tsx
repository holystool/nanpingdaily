
'use client';

import { useState, useEffect } from 'react';
import { quotesData, getRandomQuote, type Quote } from '@/lib/quotes-data';

interface QuoteDisplayProps {
  currentQuote: Quote;
  setCurrentQuote: (quote: Quote) => void;
}

export default function QuoteDisplay({ currentQuote, setCurrentQuote }: QuoteDisplayProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // 页面加载时随机选择一个金句
    const randomQuote = getRandomQuote();
    setCurrentQuote(randomQuote);
  }, [setCurrentQuote]);

  const refreshQuote = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // 淡出动画
    const quoteElement = document.querySelector('.quote-content');
    if (quoteElement) {
      quoteElement.classList.add('opacity-0', 'transform', 'translate-y-4');
    }
    
    setTimeout(() => {
      // 选择新的随机金句
      let newQuote;
      do {
        newQuote = getRandomQuote();
      } while (newQuote.quote_content === currentQuote.quote_content && quotesData.length > 1);
      
      setCurrentQuote(newQuote);
      
      // 淡入动画
      setTimeout(() => {
        if (quoteElement) {
          quoteElement.classList.remove('opacity-0', 'translate-y-4');
        }
        setIsAnimating(false);
      }, 100);
    }, 300);
  };

  return (
    <div className="text-center px-4">
      <div 
        className="quote-content transition-all duration-300 ease-in-out"
      >
        {/* 金句内容 */}
        <blockquote 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-8 max-w-4xl mx-auto"
          style={{
            textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.3)',
            lineHeight: '1.6'
          }}
        >
          {currentQuote.quote_content}
        </blockquote>
        
        {/* 金句出处 */}
        <div className="text-right max-w-4xl mx-auto">
          <cite 
            className="text-lg sm:text-xl text-white/90 font-normal not-italic"
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.4)'
            }}
          >
            —— {currentQuote.quote_source}
          </cite>
        </div>
      </div>
      
      {/* 刷新按钮 */}
      <button
        onClick={refreshQuote}
        disabled={isAnimating}
        className="mt-12 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed mx-auto group"
        title="换一句"
      >
        <i 
          className={`fas fa-sync-alt text-white text-lg transition-transform duration-300 ${isAnimating ? 'animate-spin' : 'group-hover:rotate-180'}`}
        />
      </button>
    </div>
  );
}
