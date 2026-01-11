
// 金句数据库
export interface Quote {
  quote_content: string;
  quote_source: string;
}

// 默认金句数据 - 您可以在这里添加更多金句
export const quotesData: Quote[] = [
{
"quote_content": "认知与行持，不仅是文字般若转向实相般若的转角，更是我们通往究竟圆满觉悟的智慧原点",
"quote_source": "戒清大和尚"
},
{
"quote_content": "认知是对佛法正知、正见的深入体悟，是文字般若向实相般若转化的资粮",
"quote_source": "戒清大和尚"
},
{
"quote_content": "佛法如渡河之筏，渡后若再背负，反成障碍。法、非法、非非法，层层超越，旨在破除执着",
"quote_source": "戒清大和尚"
},
{
"quote_content": "行持是将认知运用于每个当下的择别与行为，将佛法智慧融入生活每一个角落",
"quote_source": "戒清大和尚"
},
{
"quote_content": "面对财、色、名、食、睡等诱惑时，坚守内心的清明；面对贪、嗔、痴、慢、疑等烦恼时，保持内心的宁静",
"quote_source": "戒清大和尚"
},
{
"quote_content": "认知是行持的起点，行持是认知的实践，二者在修行中彼此增上，相互成就",
"quote_source": "戒清大和尚"
},
{
"quote_content": "学佛先知苦，方能向涅槃。四圣谛为基，明苦、断集、证灭、修道",
"quote_source": "戒清大和尚"
},
{
"quote_content": "信仰不仅帮助我们正向认识苦乐，更能激发内在动力，引导我们走向解脱之道",
"quote_source": "戒清大和尚"
},
{
"quote_content": "修行以“明心”为前置，明心方能见性，除去心性尘埃，方显智慧光明",
"quote_source": "戒清大和尚"
},
{
"quote_content": "自利是能力，利他是慈悲。佛法的修行，是为了个人的解脱，更是为了利益众生",
"quote_source": "戒清大和尚"
},
{
"quote_content": "行持是文字般若转向实相般若的转角，是将理论知识转化为生命实践的关键跨越",
"quote_source": "戒清大和尚"
},
{
"quote_content": "八正道是完整的修行次第，从正见到正定，步步皆是指向解脱的必经之路",
"quote_source": "戒清大和尚"
},
{
"quote_content": "圆觉是通过长期行持导向的终极目标，是转识成智、舍妄成真的究竟实相",
"quote_source": "戒清大和尚"
},
{
"quote_content": "在信息纷扰的时代，以八正道为舟筏，在认知与行持的相互增上中，构建内心的坚固堡垒",
"quote_source": "戒清大和尚"
},
{
"quote_content": "愿佛法智慧如一盏明灯，照亮修行之路，最终证得究竟圆满的佛果",
"quote_source": "戒清大和尚"
}
];

// 获取随机金句
export const getRandomQuote = (): Quote => {
  return quotesData[Math.floor(Math.random() * quotesData.length)];
};

// 获取指定数量的随机金句
export const getRandomQuotes = (count: number): Quote[] => {
  const shuffled = [...quotesData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
