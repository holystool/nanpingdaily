
'use client';

import { useState, useEffect } from 'react';

interface BuddhistEvent {
  name: string;
  date: string;
  lunarDate: string;
  daysLeft: number;
}

export default function DateDisplay() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [buddhistEvent, setBuddhistEvent] = useState<BuddhistEvent | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    const updateDateInfo = () => {
      const now = new Date();

      // 2024年佛教节日数据
      const buddhistEvents = [
        { name: '释迦牟尼佛成道日', date: '2024-01-07', lunarDate: '腊月初八' },
        { name: '文殊菩萨成道日', date: '2024-01-21', lunarDate: '腊月廿二' },
        { name: '监斋菩萨圣诞日', date: '2024-01-22', lunarDate: '腊月廿三' },
        { name: '华严菩萨圣诞日', date: '2024-01-28', lunarDate: '腊月廿九' },
        { name: '弥勒菩萨圣诞日', date: '2024-01-29', lunarDate: '正月初一' },
        { name: '定光佛圣诞', date: '2024-02-03', lunarDate: '正月初六' },
        { name: '净宗九祖蕅益大师圆寂日', date: '2024-02-18', lunarDate: '正月廿一' },
        { name: '释迦牟尼佛出家日', date: '2024-03-07', lunarDate: '二月初八' },
        { name: '释迦牟尼佛涅盘日', date: '2024-03-14', lunarDate: '二月十五' },
        { name: '观世音菩萨圣诞日', date: '2024-03-18', lunarDate: '二月十九' },
        { name: '普贤菩萨圣诞日', date: '2024-03-20', lunarDate: '二月廿一' },
        { name: '净宗六祖永明法师圆寂日', date: '2024-03-25', lunarDate: '二月廿六' },
        { name: '准提菩萨圣诞日', date: '2024-04-13', lunarDate: '三月十六' },
        { name: '释迦牟尼佛圣诞日', date: '2024-05-05', lunarDate: '四月初八' },
        { name: '佛吉祥日', date: '2024-05-12', lunarDate: '四月十五' },
        { name: '药王菩萨圣诞日', date: '2024-05-25', lunarDate: '四月廿八' },
        { name: '善慧菩萨圣诞日', date: '2024-06-03', lunarDate: '五月初八' },
        { name: '伽蓝菩萨圣诞日', date: '2024-06-08', lunarDate: '五月十三' },
        { name: '韦驮尊天菩萨圣诞日', date: '2024-06-27', lunarDate: '六月初三' },
        { name: '维摩诘菩萨圣诞日', date: '2024-07-04', lunarDate: '六月初十' },
        { name: '观世音菩萨成道日', date: '2024-07-13', lunarDate: '六月十九' },
        { name: '净宗八祖莲池法师圆寂日', date: '2024-08-24', lunarDate: '七月初二' },
        { name: '净宗十祖截流法师圆寂日', date: '2024-08-31', lunarDate: '七月初九' },
        { name: '大势至菩萨圣诞', date: '2024-09-04', lunarDate: '七月十三' },
        { name: '佛欢喜日', date: '2024-09-06', lunarDate: '七月十五' },
        { name: '净宗三祖承远法师圆寂日', date: '2024-09-10', lunarDate: '七月十九' },
        { name: '龙树菩萨圣诞日', date: '2024-09-15', lunarDate: '七月廿四' },
        { name: '地藏王菩萨圣诞日', date: '2024-09-21', lunarDate: '七月三十' },
        { name: '净宗初祖慧远法师圆寂日', date: '2024-09-27', lunarDate: '八月初六' },
        { name: '月光遍照菩萨圣诞日', date: '2024-10-06', lunarDate: '八月十五' },
        { name: '燃灯古佛圣诞日', date: '2024-10-13', lunarDate: '八月廿二' },
        { name: '摩利支天菩萨圣诞日', date: '2024-10-29', lunarDate: '九月初九' },
        { name: '观世音菩萨出家日', date: '2024-11-08', lunarDate: '九月十九' },
        { name: '药师佛圣诞日', date: '2024-11-19', lunarDate: '九月三十' },
        { name: '净宗五祖少康法师圆寂日', date: '2024-11-22', lunarDate: '十月初三' },
        { name: '达摩祖师圣诞日', date: '2024-11-24', lunarDate: '十月初五' },
        { name: '文殊菩萨出家日', date: '2024-12-09', lunarDate: '十月二十' },
        { name: '悟道大和尚诞辰', date: '2024-12-11', lunarDate: '十月廿二' },
        { name: '净宗十三祖印光法师圆寂日', date: '2024-12-23', lunarDate: '冬月初四' }
      ];

      // 计算最近的佛教节日
      const today = new Date();
      let nearestEvent: BuddhistEvent | null = null;
      let minDays = Infinity;

      buddhistEvents.forEach(event => {
        const eventDate = new Date(event.date);
        const currentYear = today.getFullYear();
        
        // 计算今年和明年的节日日期
        const thisYearEventDate = new Date(currentYear, eventDate.getMonth(), eventDate.getDate());
        const nextYearEventDate = new Date(currentYear + 1, eventDate.getMonth(), eventDate.getDate());
        
        let targetDate = thisYearEventDate;
        if (thisYearEventDate <= today) {
          targetDate = nextYearEventDate;
        }
        
        const diffTime = targetDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays < minDays && diffDays > 0) {
          minDays = diffDays;
          nearestEvent = { 
            name: event.name, 
            date: event.date, 
            lunarDate: event.lunarDate,
            daysLeft: diffDays 
          };
        }
      });

      setBuddhistEvent(nearestEvent);
    };

    // 初始化执行一次
    updateDateInfo();

    // 设置定时器每分钟更新一次
    const dateTimer = setInterval(updateDateInfo, 60000);

    return () => {
      clearInterval(timer);
      clearInterval(dateTimer);
    };
  }, []);

  const getWeekDay = (date: Date): string => {
    const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return weekDays[date.getDay()];
  };

  return (
    <div className="text-center text-white">
      {/* 月日显示 */}
      <div className="text-lg font-medium text-white/90 mb-2 tracking-wide">
        {currentDate.toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' }).replace('/', '月') + '日'}
      </div>
      
      {/* 星期和佛教节日倒计时 */}
      <div className="text-xs text-white/80 mb-8 leading-relaxed">
        <span>{getWeekDay(currentDate)}</span>
        {buddhistEvent && (
          <>
            <span className="mx-1">·</span>
            <span>距{buddhistEvent.name}还有 {buddhistEvent.daysLeft} 日</span>
          </>
        )}
      </div>
      
      {/* 中央日期数字 */}
      <div 
        className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-white mb-8"
        style={{
          textShadow: '0 4px 8px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)',
          filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))'
        }}
        suppressHydrationWarning={true}
      >
        {currentDate.getDate()}
      </div>
    </div>
  );
}
