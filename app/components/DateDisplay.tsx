'use client';

import { useState, useEffect } from 'react';
import { Lunar, Solar } from 'lunar-javascript'; 

interface BuddhistEvent {
  name: string;
  daysLeft: number;
}

const FESTIVAL_LIST = [
  { name: '释迦牟尼佛成道日', month: 12, day: 8 },
  { name: '文殊菩萨成道日', month: 12, day: 22 },
  { name: '监斋菩萨圣诞日', month: 12, day: 23 },
  { name: '华严菩萨圣诞日', month: 12, day: 29 },
  { name: '弥勒菩萨圣诞日', month: 1, day: 1 },
  { name: '释迦牟尼佛出家日', month: 2, day: 8 },
  { name: '释迦牟尼佛涅盘日', month: 2, day: 15 },
  { name: '观世音菩萨圣诞日', month: 2, day: 19 },
  { name: '普贤菩萨圣诞日', month: 2, day: 21 },
  { name: '释迦牟尼佛圣诞日', month: 4, day: 8 },
  { name: '观世音菩萨成道日', month: 6, day: 19 },
  { name: '大势至菩萨圣诞', month: 7, day: 13 },
  { name: '地藏王菩萨圣诞日', month: 7, day: 30 },
  { name: '药师佛圣诞日', month: 9, day: 30 },
  { name: '阿弥陀佛圣诞日', month: 11, day: 17 }
];

export default function DateDisplay() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [buddhistEvent, setBuddhistEvent] = useState<BuddhistEvent | null>(null);

  useEffect(() => {
    const updateDateInfo = () => {
      const now = new Date();
      setCurrentDate(now);
      const todaySolar = Solar.fromDate(now);
      const todayLunar = todaySolar.getLunar();
      
      let nearest = null;
      let minDiff = Infinity;

      FESTIVAL_LIST.forEach(fest => {
        try {
          const calculateForYear = (year: number) => {
            const monthDays = Lunar.fromYmd(year, fest.month, 1).getMonthDays();
            const lunarObj = Lunar.fromYmd(year, fest.month, Math.min(fest.day, monthDays));
            const solarObj = lunarObj.getSolar();
            return new Date(solarObj.getYear(), solarObj.getMonth() - 1, solarObj.getDay());
          };

          let festivalDate = calculateForYear(now.getFullYear());
          const todayCheck = new Date(now.getFullYear(), now.getMonth(), now.getDate());

          if (festivalDate < todayCheck) {
            festivalDate = calculateForYear(now.getFullYear() + 1);
          }

          const diffTime = festivalDate.getTime() - todayCheck.getTime();
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

          if (diffDays < minDiff) {
            minDiff = diffDays;
            nearest = { name: fest.name, daysLeft: diffDays };
          }
        } catch (e) {
          console.warn(`计算节日失败: ${fest.name}`, e);
        }
      });

      setBuddhistEvent(nearest);
    };

    updateDateInfo();
    const timer = setInterval(updateDateInfo, 60000); 
    return () => clearInterval(timer);
  }, []);

  const getWeekDay = (date: Date): string => {
    return ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][date.getDay()];
  };

  const getLunarString = (date: Date) => {
    const lunar = Solar.fromDate(date).getLunar();
    return `${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`;
  };

  return (
    <div className="text-center text-white">
      <div className="text-lg font-medium text-white/90 mb-2 tracking-wide">
        {getLunarString(currentDate)}
      </div>
      <div className="text-xs text-white/80 mb-8 leading-relaxed">
        <span>{getWeekDay(currentDate)}</span>
        {buddhistEvent && (
          <>
            <span className="mx-1">·</span>
            <span>距{buddhistEvent.name}还有 {buddhistEvent.daysLeft} 日</span>
          </>
        )}
      </div>
      <div 
        className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-white mb-8"
        style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}
      >
        {currentDate.getDate()}
      </div>
      <div className="text-sm tracking-[0.2em] text-white/70">
        {currentDate.getFullYear()}年{currentDate.getMonth() + 1}月
      </div>
    </div>
  );
}