
// 金句数据库
export interface Quote {
  quote_content: string;
  quote_source: string;
}

// 默认金句数据 - 您可以在这里添加更多金句
export const quotesData: Quote[] = [
  {
    quote_content: "“佛法在世间，不离世间觉”，学修旨在完善自我，成就福慧圆满，以承载更好未来",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "佛法是宇宙人生恒常真理，本无 “正法、像法、末法” 之分，“末法” 是因众生福德善根变化，调伏能力受冲击",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "学佛需明确 “初发心”“愿求心”“择别力”，方能在行为中透显智慧，以慈悲破除障碍",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "心如 “覆器”（封闭拒绝）则善法不入，需做 “正器”，开放眼耳，让智慧滋养身心",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "闻法如 “漏器”（听后即忘、不思维运用）则法义不存，需如周利盘陀伽尊者，以 “笨鸟勤飞” 的坚持反复串习善法",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "“佛法说简单，简单到一字一言，关键在能否持续”，调伏心性需 “咬牙切齿” 的决心，将坚持化为习惯以堵牢 “漏底”",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "人因无始劫业力，心藏善恶种子，易被财、色、名、食、睡染污，如 “垢器” 积秽",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "修行需以智慧 “时时勤拂拭”，通过 “功过格” 观照自身，去除染垢，显发本具的自性光明",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "自性光明本自圆满，需修习清除垢秽方能显发；学佛应将慈悲与智慧融入生活，自利利他",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "学佛不应 “学佛一年佛在心中，学佛两年佛在身边，学佛三年佛在天边”，需保持初心，将正知正见契入实践",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "学修是 “连点成线” 的积累过程，需磨心性、破陋习，以次第修证获得独立择别问题的智慧",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "法是自然存在的恒常真理，具无漏性；人是有为法，具漏性。学佛需以法为主，避免 “以人代法” 的偶像崇拜",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "神秀 “时时勤拂拭” 与六祖 “本来无一物” 是修行的两种呈现，有为法与无为法不二，无为法建立在有为法之上",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "义是究竟觉悟，语是言语文字的修饰。解读经典需 “见山是山，见山不是山”，不执文字而达本义",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "《金刚经》“法尚应舍，何况非法”，法如筏喻，对治烦恼后需去法执",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "智是如来智，具无分别、无漏染性；识是世间情识，具分别、有漏染性。学佛是 “转识成智”，破妄证真",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "世间情识是 “舒服的枷锁”，需以如来智破除迷茫、执着，明了世间智的不究竟",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "了义是解脱道，是大圆镜智的圆满；不了义是方便权巧，需 “见假修真”，不执假为真",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "“大地众生，皆有如来智慧德相，但以妄想执著，不能证得”，佛是觉悟的众生，众生是未觉悟的佛",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "各宗派最终归向了义觉道，因众生根性不同需方便法辅助，关键是不 “以假乱真”",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "三法印是佛法的印记，包括 “诸行无常，诸法无我，涅槃寂静”，可校正法与非法",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "“诸行无常” 指世界一切事物皆变化生灭，遵循 “成、住、坏、空” 规律，外在现象虚妄，业力牵引变化",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "佛法的根本性（一真实相）恒常不变，需在无常中寻恒常，以恒常带动无常，修正业力",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "“诸法无我” 即破我执、法执，“我” 非独立实体，乃因缘和合，破执需后置 “我”，以知识规范认知",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "《金刚经》“法尚应舍，何况非法”，法如筏喻，对治烦恼后需舍去法执",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "“涅槃寂静” 是断除生死轮回的圆满境界，非死亡，是寂灭无为、不生不灭的本来状态",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "释迦牟尼佛受琉璃王灭族业报，目犍连救度无果，印证 “共业不可变”",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "修行是从生灭法到无生灭法的过程，需以心性力校正行为力，念念自觉，积沙成塔",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "佛法学习旨在改变内在结构，将自性智慧应用于生活，是最好的实践",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "诵经可 “都摄六根使身心安稳”，念珠助于 “摄授六根专注”，修持需重内核功德而非形式",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "研经不可忽略单体知识点，避免因轻视 “只言片语” 形成障道",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "“莫以佛说掩人说”：人说不可冒充佛说，佛说为觉悟方便法，人说因迷执而生",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "“莫以佛教饰人教”：佛教是佛的教理，不可借佛教伪装个人说教，需以规矩择别善恶",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "“勿以善小而不为，勿以恶小而为之”，需通过反观自心，积少成多穿透行为习惯",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "“莫以庄严侍粉黛”：庄严是内心觉悟的外在寂静呈现，非外在装饰或视觉冲击",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "“莫以尘劳作圣道”：学佛是精神重建，需知苦、断集、修道、证灭，远离以尘劳为圣道的误区",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "佛法 “出世不离世间觉”，但不可将善巧方便误作佛道，需依教理教义规范行为",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "寺院文化需符合佛教规范，避免借佛教元素行商业化或功利化之事",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "学佛需 “理论与实践结合”，将次第义理转化为行为，通过义工服务等实践修证",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "在佛法学习中，课外阅读以佛法次第定位为核心，融合多领域知识，强化佛法智慧实践力",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "修行需时时串习功课，持续阅读有助于积累知识、培养思维习惯，避免知识碎片化",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "学佛旨在断烦恼、破无明、开智慧，阅读时应将知识消化吸收，回归佛法证悟原点",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "把读书看作以佛法经典为中心的圆柱体结构，积累思想元素，以空间思维沉淀思想，与人交流自他受益",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "读书要取舍矛盾点，甄别内容是否与所学佛法冲突，先读有专项指导性书籍",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "学习或阅读时不应 “挑刺”，佛法平等，无论顺向逆向观点都应汲取启迪",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "汲取知识要符合佛法 “根本义”，以《三法印、四依法》甄别，避免被华丽辞藻误导",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "佛法修学需 “闻思修”“戒定慧”，言行与教理契合为 “一法”，积累 “一法” 成 “万法”，破烦恼需行 “一法” 入 “万法”",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "每个人都有本性智慧，如明珠被贪嗔痴蒙蔽，拂去尘垢方可显光，万法归于心法，心行合一才是行道根本",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "课程遵循 “读、解、化、契、悟” 五字诀，依 “四依法” 实操前四字，积累修习以证道，此过程不易",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "初学法者有主观认知和社会习惯，需法师引导修正，使修学更圆满",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "知识积累是行道前提，依正向引导读解佛法，以自性明见破除无明",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "运用所学方法，依据自身情况找到对治法破除难题，会附带消除其他业障烦恼",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "“契” 包括 “师” 和 “法”，信佛法为法药，选契合法门专注修学，依符合标准的师指导，不偏离正道",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "“悟” 以闻为始，构建学修结构，依佛法熏习证道，以八正道为方向校正根识",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "法师引导应精准适度，采用从小构件完善整体结构的方式优化教学架构",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "下学期可能以文殊主修建立资粮结构，还可能设定少量日课助力学习",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "佛教注重因缘感果，无论顺逆缘都是增上缘，能成就善果，关键是培养正确见解并实践",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "佛法难闻、人身难得，能得人身又闻佛法是极大善业，听闻法师代佛宣法、认知人生道路是难得机缘",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "佛法核心在于心和行，心行起于正信，正信生正知正见，用以纠正思维偏差，依此修习正行脱离烦恼",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "信根本即相信自心真如、本体可成佛；信三宝即信佛为圆满果德、法为除垢方法、僧为正行指引者",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "信仰力需通过持续学习实践巩固，将法药转化为日常行为思维习惯，以佛法智慧解析应对生活，而非依赖世间情识",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "警醒以人代法，以 “四依法” 为依据、“三法印” 为标准拣择正法，区分对师父殿堂的欢喜与对正法的闻习",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "太虚大师言 “仰止唯佛陀，完成在人格，人成即佛成”，信仰依归佛陀，完善人格即成佛根机",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "佛法在世间不离世间觉，人生即修行道场，依 “渐教次第” 在世间修行，悟道后出离",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "佛法 “世间化” 非 “世俗化”，前者破除无明贪爱、觉悟真谛，后者追求世俗利益，需警醒避免世俗化",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "万法从心起，心行需合一，心为方法指引，身为实证行愿，二者互通互用、缺一不可",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "正信无捷径，立心言行需依正法，以三法印、四依法、八正道为根本遵守，脱离根本则非佛说",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "学佛是人生最难得的福报",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "佛教的教学宗旨是破除思惑，启发正智，形成自觉、觉他、觉行圆满的宇宙人生观",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "佛陀说法 49 年，其内容被结集为三藏十二部，天台教将其分判为五时八教，说法次第从小向大，渐阶至圆融涅槃",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "佛法学习需依靠佛经和祖师大德言论积累知识结构，长期耕植串习，将外在知识转化为内在智慧",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "佛法学习分为基础层和次第层，明悟班三年学修以筑建基础层为目标，引导学员破除我见、夯实基础",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "基础层为掌握佛法基本名相教理，为未来解读经典、理解法义奠定基础",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "学佛如筑大厦，基础不固则难抵外扰，前行资粮积累需 “耐得寂寞，守得平淡”，以 “功不唐捐” 自勉",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "对待法师课堂内容，应先理解教义并对照自身运用情况，避免以 “个人喜好” 评判，而要 “如理作意”",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "认知与行持是佛法修习的核心要素，是文字般若转向实相般若的转角，也是通往究竟圆满觉悟的智慧原点",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "在佛法语境中，认知是对佛法正知、正见的深入理解和体悟，是文字般若向实相般若转化的资粮",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "佛法的智识在文字又离文字相，文字和语言是智慧的外层包裹，需剥离外相直抵智慧真性",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "《金刚经》言 “我所说法，如筏喻者，法尚应舍，何况非法”，佛法如渡河之筏，渡后若执 “法” 反成障碍",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "行持是将认知运用到实际行动的过程，需在面对财、色、名等诱惑时坚守内心宁静，不被外物所扰",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "认知与行持相辅相成，随修行深入彼此增上，行持能将内心光明与智慧转化为改变生命的原力",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "当下学佛人面临信息爆炸的干扰，需以从知识转化到行为实践的智识结构为核心，以八正道为指南抵御干扰",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "认知契合八正道的正念、正见、正思维，构成学习佛法的思想体系，为修行提供不偏离佛法范畴的学习框架",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "信仰的价值在于帮助正向认识苦与乐，激发内在动力，引导走向解脱之道，需通过消除烦恼、净化内心获得常乐",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "学佛应先知 “苦”，佛陀首说 “四谛法”，“苦谛” 为真，“集谛” 是苦因，“灭谛” 需 “道谛” 修行证得",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "“苦” 有三苦（苦苦、坏苦、行苦）与八苦（生、老、病、死、爱别离、求不得、怨憎会、五蕴炽盛）",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "涅槃寂静是究竟的乐，身体之苦需植福营善改变业因，精神之苦可通过心力调整转化",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "轮回之苦是大苦，需有出离心和勇气走出三界，追求常乐、究竟喜乐时保持居安思危",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "解决心性尘埃需以 “明心” 为前置，明心见性方能回归本真，此过程需长期修行，以戒定慧为基础树立正见",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "佛法修行不仅为个人解脱，更要利益众生，自利与利他不可分割，自利是能力，利他是慈悲",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "行持是认知的实践与体现，与认知构成修行的逻辑结构，需以佛法智识为支撑，从 “善护口业、善护行业、善护其心” 等体现",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "八正道是修行重要指南，“行持” 契合正语、正业、正命，修行者需依业力、善根、因缘选择符合 “三法印” 与 “四依法” 的法门",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "圆觉是行持的终极目标，需通过转识成智、舍妄成真，超越分别心，洞察实相，以正定与正精进证悟",
    quote_source: "戒清大和尚"
  },
  {
    quote_content: "“凡所有相，皆是虚妄”，万法唯心造，需将认知转化为行为规则，脚踏实地、精进不懈以达圆觉",
    quote_source: "戒清大和尚"
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
