// 引入我们刚刚安装的库
import { Lunar } from 'lunar-javascript';

/**
 * 获取指定日期的农历文字描述（例如：农历正月初一）
 */
export function getLunarDate(date: Date): string {
  const lunar = Lunar.fromDate(date);
  return `农历${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`;
}

/**
 * 获取农历的数字信息，方便后面计算节日
 */
export function getLunarDateInfo(date: Date) {
  const lunar = Lunar.fromDate(date);
  return {
    month: lunar.getMonth(), // 月份，如 1
    day: lunar.getDay(),     // 日子，如 1
    monthName: lunar.getMonthInChinese(),
    dayName: lunar.getDayInChinese()
  };
}