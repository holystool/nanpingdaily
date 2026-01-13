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

  return (
    <div className="text-center px-4">
      <div className="quote-content transition-all duration-300 ease-in-out">
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
    </div>
  );
}