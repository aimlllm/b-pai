// Original bilingual practice items. Verified against cited official sources on 2026-10-25.
// Practice content only; not released CSLB examination questions.
const ADVANCED_LAW_QUESTIONS = [
  {
    "id": 2001,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "business",
    "difficulty": "intermediate",
    "kind": "scenario",
    "question": "某人无执照，独自承接总价$900的小工程，但当地规定该工程必须申请建筑许可。是否可仅凭低于$1,000适用小额工程豁免？",
    "questionEn": "An unlicensed person works alone on a $900 project that requires a building permit. Does the price alone qualify it for the minor-work exemption?",
    "options": [
      "可以，低于$1,000即可 / Yes, price alone is sufficient",
      "不可以，需许可的工程不符合此豁免 / No, a required permit defeats this exemption",
      "可以，只要业主签免责声明 / Yes, with an owner waiver",
      "可以，只把人工费写在合同里 / Yes, exclude materials from the contract"
    ],
    "answer": 1,
    "explanation": "价格、无需许可及不使用雇员等条件必须同时满足。$900并不能排除许可条件；业主声明或省略材料也不能创造豁免。",
    "sources": [
      {
        "title": "CSLB — Before Applying for a License",
        "url": "https://www.cslb.ca.gov/Contractors/Applicants/Contractors_License/Exam_Application/Before_Applying_For_License.aspx",
        "note": "小额工程豁免要求同时满足无需许可、不雇人及项目总额不足$1,000；不得拆单。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2002,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "business",
    "difficulty": "advanced",
    "kind": "scenario",
    "question": "同一整体装修工程总额$1,600，无执照施工者建议分成两张$800合同，自己施工且无需许可。这样能满足小额工程豁免吗？",
    "questionEn": "A single $1,600 remodel is split into two $800 contracts. No permit or employee is needed. Does splitting qualify it for the minor-work exemption?",
    "options": [
      "能，每张合同单独计算 / Yes, assess each contract separately",
      "能，只要相隔一天签约 / Yes, sign on different days",
      "不能，应合并计算同一项目且不得规避性拆单 / No, aggregate the project and do not split to evade the limit",
      "只要客户分别付款即可 / Separate payments make it exempt"
    ],
    "answer": 2,
    "explanation": "同一项目的一份或多份合同合计计算。$800+$800=$1,600；付款次数、签约日期和发票数量都不把一个整体工程变成两个豁免项目。",
    "sources": [
      {
        "title": "CSLB — Before Applying for a License",
        "url": "https://www.cslb.ca.gov/Contractors/Applicants/Contractors_License/Exam_Application/Before_Applying_For_License.aspx",
        "note": "小额工程豁免要求同时满足无需许可、不雇人及项目总额不足$1,000；不得拆单。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2003,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "business",
    "difficulty": "advanced",
    "kind": "scenario",
    "question": "仅持B类、无其他专业分类的承包商，要以总包身份承接一项只有电气工作的合同，并打算全部自行施工。以下哪项分析最佳？",
    "questionEn": "A B-only contractor wants a prime contract consisting solely of electrical work, entirely self-performed. Which analysis is best?",
    "options": [
      "B类覆盖所有建筑相关工作，无需条件 / B covers every building trade automatically",
      "只要电气报价超过$1,000就可做 / A higher price authorizes it",
      "只需业主同意即可 / Owner consent is sufficient",
      "不能仅凭B牌如此自行施工；须满足相应专业分类或合法分包等法定条件 / B alone does not authorize this; applicable specialty or subcontracting conditions must be met"
    ],
    "answer": 3,
    "explanation": "B类对非框架/木工的单一专业合同有限制。其至少两个不相关工种的通常规则及专业分类/分包条件须一起读，不能把B牌当作任意单工种自行施工授权。",
    "sources": [
      {
        "title": "CSLB — B General Building classification",
        "url": "https://www.cslb.ca.gov/About_Us/Library/Licensing_Classifications/Licensing_Classifications_Detail.aspx?Class=B",
        "note": "B类承包商范围及框架/木工例外；单项专业工种合同另有持证或分包条件。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2004,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "business",
    "difficulty": "intermediate",
    "kind": "scenario",
    "question": "承包商在社交平台发一则只有电话号码的承接装修广告，称正式签约时才提供执照号。最佳修正是什么？",
    "questionEn": "A contractor posts a remodeling advertisement with only a phone number and plans to provide the license number at signing. What is the best correction?",
    "options": [
      "广告发布时就加入有效执照号 / Include the valid license number in the advertisement",
      "只在最终发票上补上 / Add it only to the final invoice",
      "让平台保存号码即可 / Let the platform retain the number privately",
      "删除电话号码即可免除要求 / Remove the phone number to avoid the requirement"
    ],
    "answer": 0,
    "explanation": "线上推广也是广告。签约后才披露不满足广告本身的号码要求；平台私下持有号码也不能代替向受众展示。",
    "sources": [
      {
        "title": "CSLB — Finding the Right Contractor",
        "url": "https://www.cslb.ca.gov/Consumers/Hire_A_Contractor/Finding_The_Right_Contractor.aspx",
        "note": "广告、名片、投标及合同上的执照号码要求。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2005,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "business",
    "difficulty": "intermediate",
    "kind": "scenario",
    "question": "首次申请人无教育抵免或其他经验年限例外，合格journey-level经验为10年窗口以外2年、窗口以内3年。能否仅据这5年满足通常经验要求？",
    "questionEn": "A first-time applicant has no education credit or exception to the experience window: two qualifying journey-level years outside the last ten years and three inside it. Do those five years alone meet the usual requirement?",
    "options": [
      "能，终身累计超过4年 / Yes, lifetime total exceeds four",
      "不能，最近10年内只有3年 / No, only three years fall within the required window",
      "能，只要最后一年连续 / Yes, if the latest year is continuous",
      "不能，必须10年经验 / No, ten years of experience are required"
    ],
    "answer": 1,
    "explanation": "通常门槛是最近10年内至少4年符合要求的经验，而不是终身累计4年，也不是工作满10年。本题排除教育及其他抵免，窗外2年不能补足窗内不足。",
    "sources": [
      {
        "title": "CSLB — Before Applying, General Qualifications",
        "url": "https://www.cslb.ca.gov/Contractors/Applicants/Contractors_License/Exam_Application/Before_Applying_For_License.aspx",
        "note": "通常要求过去10年内至少4年符合资格的经验；教育学徒抵免另计。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2006,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "finance",
    "difficulty": "intermediate",
    "kind": "calculation",
    "question": "项目全部成本$80,000，报价按成本加价20%计算。报价及毛利率分别是多少？",
    "questionEn": "Total job cost is $80,000. Price is set at a 20% markup on cost. What are price and gross margin?",
    "options": [
      "$96,000；20% / $96,000; 20%",
      "$100,000；20% / $100,000; 20%",
      "$96,000；约16.67% / $96,000; about 16.67%",
      "$100,000；25% / $100,000; 25%"
    ],
    "answer": 2,
    "explanation": "报价=80,000×1.20=96,000；毛利=16,000；毛利率=16,000÷96,000≈16.67%。把20%加价率直接当毛利率是干扰项。所有成本均已包含，未另加税费。",
    "sources": [
      {
        "title": "CSLB — Law and Business Study Guide (03-2026)",
        "url": "https://www.cslb.ca.gov/Resources/StudyGuides/LawStudyGuide.pdf",
        "note": "官方考纲涵盖预算、现金管理、财务报告、成本控制；本题数值及计算为原创练习。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2007,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "finance",
    "difficulty": "advanced",
    "kind": "calculation",
    "question": "项目全部成本$80,000，目标毛利率为销售收入的20%。应报多少价？",
    "questionEn": "Total job cost is $80,000. Target gross profit is 20% of revenue. What price is required?",
    "options": [
      "$100,000 / $100,000",
      "$96,000 / $96,000",
      "$84,000 / $84,000",
      "$120,000 / $120,000"
    ],
    "answer": 0,
    "explanation": "设报价P，(P−80,000)÷P=0.20，所以P=80,000÷0.80=100,000。乘1.20得到96,000是20%成本加价，只产生16.67%毛利率。",
    "sources": [
      {
        "title": "CSLB — Law and Business Study Guide (03-2026)",
        "url": "https://www.cslb.ca.gov/Resources/StudyGuides/LawStudyGuide.pdf",
        "note": "官方考纲涵盖预算、现金管理、财务报告、成本控制；本题数值及计算为原创练习。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2008,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "finance",
    "difficulty": "advanced",
    "kind": "calculation",
    "question": "某月固定费用$24,000，每美元营业收入扣除变动成本后留下30美分，除此无其他成本。月度收支平衡收入是多少？",
    "questionEn": "Monthly fixed cost is $24,000. Each revenue dollar contributes $0.30 after variable costs, with no other costs. What revenue breaks even?",
    "options": [
      "$31,200 / $31,200",
      "$72,000 / $72,000",
      "$104,000 / $104,000",
      "$80,000 / $80,000"
    ],
    "answer": 3,
    "explanation": "收入×30%=固定费用24,000，故收入=24,000÷0.30=80,000。贡献毛益用于覆盖固定费用；24,000×30%不是所需收入。",
    "sources": [
      {
        "title": "CSLB — Law and Business Study Guide (03-2026)",
        "url": "https://www.cslb.ca.gov/Resources/StudyGuides/LawStudyGuide.pdf",
        "note": "官方考纲涵盖预算、现金管理、财务报告、成本控制；本题数值及计算为原创练习。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2009,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "finance",
    "difficulty": "intermediate",
    "kind": "calculation",
    "question": "月初现金$15,000，本月实际收款$25,000，工资及供应商等现金支出$48,000；另有尚未到账应收款$20,000。为使本月现金不为负，至少需追加多少资金？",
    "questionEn": "Beginning cash is $15,000, actual receipts $25,000 and cash outflows $48,000. Another $20,000 is still uncollected receivables. What minimum additional funding prevents negative cash?",
    "options": [
      "$0 / $0",
      "$8,000 / $8,000",
      "$20,000 / $20,000",
      "$28,000 / $28,000"
    ],
    "answer": 1,
    "explanation": "可用现金=15,000+25,000=40,000；缺口=48,000−40,000=8,000。未到账应收款可能形成利润，却不能在题设期间支付现金账单。",
    "sources": [
      {
        "title": "CSLB — Law and Business Study Guide (03-2026)",
        "url": "https://www.cslb.ca.gov/Resources/StudyGuides/LawStudyGuide.pdf",
        "note": "官方考纲涵盖预算、现金管理、财务报告、成本控制；本题数值及计算为原创练习。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2010,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "finance",
    "difficulty": "intermediate",
    "kind": "calculation",
    "question": "公司流动资产$90,000，其中现金$20,000、应收$50,000、存货$20,000；流动负债$60,000。流动比率是多少？",
    "questionEn": "Current assets total $90,000: cash $20,000, receivables $50,000 and inventory $20,000. Current liabilities are $60,000. What is the current ratio?",
    "options": [
      "0.33:1 / 0.33:1",
      "1.17:1 / 1.17:1",
      "1.50:1 / 1.50:1",
      "3.00:1 / 3.00:1"
    ],
    "answer": 2,
    "explanation": "流动比率=流动资产÷流动负债=90,000÷60,000=1.5。只计现金得0.33，剔除存货得约1.17则是另一种流动性指标；本题问流动比率。",
    "sources": [
      {
        "title": "CSLB — Law and Business Study Guide (03-2026)",
        "url": "https://www.cslb.ca.gov/Resources/StudyGuides/LawStudyGuide.pdf",
        "note": "官方考纲涵盖预算、现金管理、财务报告、成本控制；本题数值及计算为原创练习。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2011,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "employment",
    "difficulty": "intermediate",
    "kind": "calculation",
    "question": "适用加州一般加班规则的非豁免员工某日实际工作10小时，regular rate为$30/小时。本题无周加班重复、特殊工作周或其他溢价。当天工资多少？",
    "questionEn": "A nonexempt employee under California general overtime rules works ten hours at a $30 regular rate. Ignore overlapping weekly overtime and special arrangements. What is the day’s pay?",
    "options": [
      "$330 / $330",
      "$300 / $300",
      "$360 / $360",
      "$450 / $450"
    ],
    "answer": 0,
    "explanation": "8×30+2×(30×1.5)=240+90=330。只按40小时周门槛忽略日加班会少付；把全天10小时都按1.5倍计算也不对。",
    "sources": [
      {
        "title": "DIR/DLSE — Overtime",
        "url": "https://www.dir.ca.gov/dlse/faq_overtime.htm",
        "note": "一般非豁免员工的日、周、第七日加班规则；题设排除特殊协议和豁免。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2012,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "employment",
    "difficulty": "advanced",
    "kind": "calculation",
    "question": "非豁免员工某日实际工作13小时，regular rate为$25/小时，适用通常日加班且无其他重叠规则。该日工资多少？",
    "questionEn": "A nonexempt employee works thirteen hours at a $25 regular rate under ordinary daily overtime rules, with no overlapping rules. What is the day’s pay?",
    "options": [
      "$325 / $325",
      "$375 / $375",
      "$387.50 / $387.50",
      "$400 / $400"
    ],
    "answer": 3,
    "explanation": "前8小时8×25=200；第9至12小时4×37.50=150；第13小时1×50=50，总计400。超过12小时部分为双倍，不能全部超时都按1.5倍。",
    "sources": [
      {
        "title": "DIR/DLSE — Overtime",
        "url": "https://www.dir.ca.gov/dlse/faq_overtime.htm",
        "note": "一般非豁免员工的日、周、第七日加班规则；题设排除特殊协议和豁免。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2013,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "employment",
    "difficulty": "advanced",
    "kind": "calculation",
    "question": "同一已定义工作周连续工作第7天，非豁免员工该天工作9小时，regular rate为$20/小时。按通常第7天规则，仅计算该日应付工资是多少？",
    "questionEn": "On the seventh consecutive day worked within the same defined workweek, a nonexempt employee works nine hours at a $20 regular rate. Under the ordinary seventh-day rule, what is that day’s pay?",
    "options": [
      "$180 / $180",
      "$280 / $280",
      "$270 / $270",
      "$360 / $360"
    ],
    "answer": 1,
    "explanation": "第7天前8小时按1.5倍：8×30=240；超过8小时的1小时按双倍：40；共280。第7天必须位于同一工作周，不能仅凭跨周连续7个日历日套用。",
    "sources": [
      {
        "title": "DIR/DLSE — Overtime",
        "url": "https://www.dir.ca.gov/dlse/faq_overtime.htm",
        "note": "一般非豁免员工的日、周、第七日加班规则；题设排除特殊协议和豁免。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2014,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "employment",
    "difficulty": "intermediate",
    "kind": "scenario",
    "question": "非豁免员工本周周一至周五各实际工作8小时，周六另有8小时带薪病假但未工作；无其他加班。仅因工资单计有48小时报酬，是否自动产生8小时加班？",
    "questionEn": "A nonexempt employee works eight hours each Monday through Friday and receives eight paid sick hours for Saturday without working. Does 48 paid hours automatically create eight overtime hours?",
    "options": [
      "是，所有带薪小时都算实际工作 / Yes, all paid hours count as work",
      "是，星期六一律加班 / Yes, Saturday is always overtime",
      "否，本题实际工作40小时且每天未超过8小时 / No, only 40 hours were worked and no day exceeded eight",
      "否，病假使本周所有加班权利取消 / No, sick leave cancels all overtime rights"
    ],
    "answer": 2,
    "explanation": "一般加班计算采用实际工作小时。本题40小时实际工作+8小时未工作病假，不自动形成周加班；星期六并非天然加班日，病假也不会抹去其他真实加班。",
    "sources": [
      {
        "title": "DIR/DLSE — Overtime",
        "url": "https://www.dir.ca.gov/dlse/faq_overtime.htm",
        "note": "一般非豁免员工的日、周、第七日加班规则；题设排除特殊协议和豁免。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2015,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "employment",
    "difficulty": "advanced",
    "kind": "scenario",
    "question": "总包让每天受其安排的现场工人签“独立承包商”协议并收1099，认为由此无需工资扣缴和加班。最准确判断是什么？",
    "questionEn": "A general contractor has a supervised site worker sign an independent-contractor agreement and receive Form 1099, assuming that eliminates payroll and overtime duties. What is the most accurate conclusion?",
    "options": [
      "1099足以确定承包关系 / Form 1099 conclusively determines status",
      "有签字就排除所有劳动法 / A signature excludes all labor laws",
      "工人愿意就一定合法 / Worker consent always makes it legal",
      "标签不决定身份；须按适用法律测试审查，建筑业例外也有条件 / Labels do not determine status; apply the governing legal test, including conditions for construction exceptions"
    ],
    "answer": 3,
    "explanation": "身份须根据真实工作关系及适用标准判断，1099或书面同意不能自动改变。不能不加区分地断言所有建筑工人适用同一测试；本题考的是标签不足以决定身份。",
    "sources": [
      {
        "title": "DIR/DLSE — Independent Contractors FAQ",
        "url": "https://www.dir.ca.gov/dlse/faq_independentcontractor.htm",
        "note": "1099及合同标签不决定身份；须适用ABC、Borello或法定其他标准。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2016,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "employment",
    "difficulty": "intermediate",
    "kind": "scenario",
    "question": "非豁免员工计划实际工作8小时，无适用豁免、集体协议或合法特殊安排。主管安排从开工起连续干6小时后才提供第一顿30分钟离岗餐休。最合适修正是什么？",
    "questionEn": "A nonexempt employee is scheduled to work eight hours with no applicable exemption or special arrangement. The first off-duty 30-minute meal is scheduled after six continuous hours. What is the best correction?",
    "options": [
      "一般应在第5小时工作结束前开始首个至少30分钟餐休 / Generally start the first 30-minute meal no later than the end of hour five",
      "只要付工资就可任意推迟 / Pay alone permits any delay",
      "把餐休缩成10分钟即可 / Shorten the meal to ten minutes",
      "当日不足10小时就无需餐休 / No meal is required below ten hours"
    ],
    "answer": 0,
    "explanation": "8小时班不符合总工作时长不超过6小时的首餐互相同意豁免条件。一般首餐应不迟于第五小时结束开始；带薪10分钟休息不能代替30分钟餐休。",
    "sources": [
      {
        "title": "DIR/DLSE — Meal Periods",
        "url": "https://www.dir.ca.gov/dlse/FAQ_MealPeriods.htm",
        "note": "一般首餐须在第五小时结束前提供；题设排除有效特殊安排。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2017,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "employment",
    "difficulty": "intermediate",
    "kind": "scenario",
    "question": "普通非豁免8小时工作日，无适用特殊现场连续作业安排。经理允许两次10分钟休息，却要求员工打卡停薪。应如何修正？",
    "questionEn": "For an ordinary nonexempt eight-hour workday with no applicable special continuous-operation arrangement, a manager provides two ten-minute rest breaks but requires clocking out without pay. What should change?",
    "options": [
      "把两次都并入午餐即可 / Combine both into lunch",
      "这两次法定休息应计为带薪工作时间 / Count the required rest breaks as paid work time",
      "只给第一次发工资 / Pay only the first break",
      "只要员工签字即可都不付薪 / A signature makes both unpaid"
    ],
    "answer": 1,
    "explanation": "通常每4小时或主要部分对应净10分钟休息，且计为工作时间。休息与餐休是不同义务；不能借打卡或一般签字把法定休息变成无薪。",
    "sources": [
      {
        "title": "DIR/DLSE — Rest Periods",
        "url": "https://www.dir.ca.gov/dlse/faq_restperiods.htm",
        "note": "一般每4小时或其主要部分提供10分钟带薪休息；建筑现场存在有限特殊安排。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2018,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "insurance",
    "difficulty": "advanced",
    "kind": "scenario",
    "question": "截至2026-10-25，某仅持B类执照的独资经营者确实没有员工，且没有任何无员工也强制投保的分类。关于CSLB工伤保险要求，哪项最准确？",
    "questionEn": "As of October 25, 2026, a B-only sole proprietor truly has no employees and holds none of the classifications requiring coverage without employees. Which statement best describes CSLB workers’ compensation requirements?",
    "options": [
      "2026年所有无员工B牌都已强制投保 / All employee-free B contractors already must carry it in 2026",
      "B牌永远不需工伤保险 / B contractors never need it",
      "目前可按规定提交无员工豁免；普遍要求已推迟到2028年，届时仍应查现行法 / A valid no-employee exemption is currently available; the universal requirement was delayed to 2028, subject to current law then",
      "买一般责任险就自动满足工伤要求 / General liability automatically satisfies workers’ compensation"
    ],
    "answer": 2,
    "explanation": "须先核对真实雇佣情况及所持分类。SB1455把普遍要求延后，不豁免当前已强制投保的特定分类；一般责任险也不是工伤险的替代品。",
    "sources": [
      {
        "title": "CSLB — Workers’ Compensation Requirements",
        "url": "https://www.cslb.ca.gov/Contractors/Maintain_License/Workers_Compensation.aspx",
        "note": "无员工豁免及即使无员工也须投保的特定分类。"
      },
      {
        "title": "CSLB — March 2025 Board Packet, SB 1455",
        "url": "https://www.cslb.ca.gov/Resources/BoardPackets/2025/March14_Packet.ada.pdf",
        "note": "SB1455将全面工伤保险要求推迟至2028年1月1日；当前分类要求仍有效。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2019,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "insurance",
    "difficulty": "intermediate",
    "kind": "scenario",
    "question": "一名此前有有效无员工工伤豁免的B牌承包商，本周开始雇用首名非豁免现场员工。最佳行动是什么？",
    "questionEn": "A B contractor with a valid no-employee workers’ compensation exemption begins employing a first site employee this week. What is the best action?",
    "options": [
      "从雇用员工起落实依法要求的工伤保险并更新CSLB记录 / Put required coverage in place when employing the worker and update CSLB records",
      "继续沿用豁免到下一次续牌 / Keep the exemption until renewal",
      "等员工受伤再购买 / Buy coverage only after an injury",
      "让员工签责任豁免即可 / Obtain an employee liability waiver"
    ],
    "answer": 0,
    "explanation": "无员工豁免以没有员工为前提，事实变化后不能继续依赖旧声明。未来2028年的全面要求不改变目前雇主已有的投保义务；员工签字不能替代保险。",
    "sources": [
      {
        "title": "CSLB — Workers’ Compensation Requirements",
        "url": "https://www.cslb.ca.gov/Contractors/Maintain_License/Workers_Compensation.aspx",
        "note": "无员工豁免及即使无员工也须投保的特定分类。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2020,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "insurance",
    "difficulty": "advanced",
    "kind": "scenario",
    "question": "私人项目供应商5月1日首次供货，5月31日才有效送达初步通知；其他条件均满足。迟发通知对其一般留置权保护范围有何影响？",
    "questionEn": "A supplier first delivers to a private project on May 1 but validly serves its preliminary notice on May 31; all other requirements are met. What is the general effect of late notice on lien coverage?",
    "options": [
      "所有5月1日以后的供货自动全保 / All deliveries since May 1 are fully protected",
      "此后永远不能主张留置权 / All future lien rights are permanently lost",
      "只保护通知后供货，完全不向前追溯 / Only later deliveries, with no lookback",
      "通常保护5月11日起及之后供货；更早供货超出20天回溯范围 / Generally May 11 and later deliveries; earlier deliveries fall outside the 20-day lookback"
    ],
    "answer": 3,
    "explanation": "5月31日向前20天为5月11日。迟发不等于永久失去全部权利，但也不会使月初所有供货恢复保护；记录与执行留置权仍有其他要求。",
    "sources": [
      {
        "title": "CSLB — If a Mechanics Lien Is Filed",
        "url": "https://www.cslb.ca.gov/Consumers/Legal_Issues_For_Consumers/Mechanics_Lien/If_A_Mechanics_Lien_Is_Filed_Against_You.aspx",
        "note": "迟发初步通知一般只向前保护20天及其后的供货/工作。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2021,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "insurance",
    "difficulty": "advanced",
    "kind": "scenario",
    "question": "分包商为换取本期进度款收到一张尚未兑付的支票，被要求立即签留置权豁免。对本期款项最匹配的法定表格是什么？",
    "questionEn": "A subcontractor receives an uncleared check for a progress payment and is asked to sign a lien waiver immediately. Which statutory form best matches this payment?",
    "options": [
      "无条件尾款豁免 / Unconditional final-payment release",
      "有条件进度款豁免 / Conditional progress-payment release",
      "无条件进度款豁免 / Unconditional progress-payment release",
      "有条件尾款豁免 / Conditional final-payment release"
    ],
    "answer": 1,
    "explanation": "尚未实际收到支付时，以收款为生效条件的进度款表格最匹配。progress与final不能混用；未兑付支票不应被等同于已到账现金而签无条件表格。",
    "sources": [
      {
        "title": "CSLB — Conditional and Unconditional Waiver and Release Forms",
        "url": "https://www.cslb.ca.gov/Consumers/Legal_Issues_For_Consumers/Mechanics_Lien/Conditional_And_Unconditional_Waiver_Release_Form.aspx",
        "note": "尚未收款应选条件性豁免；区分进度款与尾款。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2022,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "contracts",
    "difficulty": "intermediate",
    "kind": "calculation",
    "question": "普通加州家装合同总价$8,500，无适用订金法定例外。开工前最多可收多少订金？",
    "questionEn": "An ordinary California home improvement contract totals $8,500 with no applicable statutory down-payment exception. What is the maximum down payment?",
    "options": [
      "$1,000 / $1,000",
      "$1,850 / $1,850",
      "$850 / $850",
      "$0 / $0"
    ],
    "answer": 2,
    "explanation": "min(8,500×10%,1,000)=min(850,1,000)=850。不是把两个数相加，也不是可以任意在10%和$1,000中挑较大者。",
    "sources": [
      {
        "title": "CSLB — Learn About Home Improvement Contracts",
        "url": "https://www.cslb.ca.gov/Consumers/Hire_A_Contractor/Home_Improvement_Contracts/What_Is_A_Contract.aspx",
        "note": "超过$500的家装书面合同、书面变更及min($1,000,合同价10%)订金限制。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2023,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "contracts",
    "difficulty": "intermediate",
    "kind": "calculation",
    "question": "普通家装合同总价$24,000，承包商称要先订购材料，因此要求25%订金；无适用法定例外。最大允许订金是多少？",
    "questionEn": "For a $24,000 ordinary home improvement contract, the contractor asks for a 25% down payment to order materials. No statutory exception applies. What is the maximum?",
    "options": [
      "$1,000 / $1,000",
      "$2,400 / $2,400",
      "$6,000 / $6,000",
      "$3,400 / $3,400"
    ],
    "answer": 0,
    "explanation": "min(24,000×10%,1,000)=1,000。一般的“要订材料”理由不使题设订金上限自动失效；应把订金与符合规定、按履约支付的后续款项区分。",
    "sources": [
      {
        "title": "CSLB — Learn About Home Improvement Contracts",
        "url": "https://www.cslb.ca.gov/Consumers/Hire_A_Contractor/Home_Improvement_Contracts/What_Is_A_Contract.aspx",
        "note": "超过$500的家装书面合同、书面变更及min($1,000,合同价10%)订金限制。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2024,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "contracts",
    "difficulty": "intermediate",
    "kind": "scenario",
    "question": "68岁业主在自己家里签普通家装合同，交易适用法定取消权且没有紧急维修等例外。承包商只给3工作日取消通知。应如何处理？",
    "questionEn": "A 68-year-old homeowner signs an ordinary home improvement contract at home. Statutory cancellation rights apply and no emergency-repair exception exists. The contractor provides only a three-business-day notice. What is required?",
    "options": [
      "3天对所有人均足够 / Three days is sufficient for everyone",
      "改为3个日历日 / Change it to three calendar days",
      "只需口头告知可取消 / Oral notice alone is sufficient",
      "提供适用于65岁及以上买方的5工作日取消通知 / Provide the five-business-day cancellation notice applicable to buyers 65 or older"
    ],
    "answer": 3,
    "explanation": "题设明确为适用交易且买方68岁，因此应适用5工作日。不能把一般3工作日机械套给所有买方，也不能把工作日改为日历日。",
    "sources": [
      {
        "title": "CSLB — Home Improvement Contract Warnings and Exceptions",
        "url": "https://www.cslb.ca.gov/Consumers/Hire_A_Contractor/Home_Improvement_Contracts/Warnings_And_Exceptions.aspx",
        "note": "适用交易中一般3工作日；65岁及以上5工作日；有法定例外。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2025,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "contracts",
    "difficulty": "advanced",
    "kind": "scenario",
    "question": "持照承包商承接$650家装工程，业主认为2025年小额免执照门槛升至$1,000，所以无需书面家装合同。最准确判断是什么？",
    "questionEn": "A licensed contractor takes a $650 home improvement job. The owner assumes the $1,000 minor-work licensing threshold eliminates the written-contract requirement. What is correct?",
    "options": [
      "正确，两个门槛始终相同 / Correct, both thresholds are identical",
      "错误；超过$500的家装书面合同要求与小额免执照条件不同 / Incorrect; the written-contract requirement above $500 is separate from licensing exemptions",
      "只有人工超过$1,000才需书面合同 / Writing is required only when labor exceeds $1,000",
      "只要发短信说价格即可无需合同 / A price-only text eliminates the contract requirement"
    ],
    "answer": 1,
    "explanation": "免执照范围与家装合同形式是不同规则。对本题持照承包商的$650家装，不能拿$1,000免证门槛排除超过$500的书面合同要求。",
    "sources": [
      {
        "title": "CSLB — Learn About Home Improvement Contracts",
        "url": "https://www.cslb.ca.gov/Consumers/Hire_A_Contractor/Home_Improvement_Contracts/What_Is_A_Contract.aspx",
        "note": "超过$500的家装书面合同、书面变更及min($1,000,合同价10%)订金限制。"
      },
      {
        "title": "CSLB — Before Applying for a License",
        "url": "https://www.cslb.ca.gov/Contractors/Applicants/Contractors_License/Exam_Application/Before_Applying_For_License.aspx",
        "note": "小额工程豁免要求同时满足无需许可、不雇人及项目总额不足$1,000；不得拆单。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2026,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "contracts",
    "difficulty": "intermediate",
    "kind": "scenario",
    "question": "原家装合同不含加装窗户，施工中业主口头同意多付$2,800。承包商最佳下一步是什么？",
    "questionEn": "An existing home improvement contract excludes a new window. During construction the owner orally agrees to an additional $2,800. What should the contractor do next?",
    "options": [
      "立即施工，完工再补价 / Proceed and document the price afterward",
      "仅由工人口头见证即可 / A worker’s oral witness is sufficient",
      "施工前将变更范围、价款及相关影响书面列明并由双方签署 / Document and sign the changed scope, price and relevant effects before the change work",
      "把新增费用藏进尾款即可 / Hide the addition in the final payment"
    ],
    "answer": 2,
    "explanation": "家装合同变更须书面记录并由双方在相关变更工作开始前签署。口头同意不能代替合格变更单；范围和价款清楚才能减少争议。",
    "sources": [
      {
        "title": "CSLB — Learn About Home Improvement Contracts",
        "url": "https://www.cslb.ca.gov/Consumers/Hire_A_Contractor/Home_Improvement_Contracts/What_Is_A_Contract.aspx",
        "note": "超过$500的家装书面合同、书面变更及min($1,000,合同价10%)订金限制。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2027,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "contracts",
    "difficulty": "advanced",
    "kind": "scenario",
    "question": "普通家装项目约定本期为非订金进度款$12,000，但截至付款节点所提供工作及材料合计价值仅$8,000，无适用例外。最佳处理是什么？",
    "questionEn": "An ordinary home improvement project schedules a non-down-payment progress draw of $12,000 when only $8,000 of work and materials has been provided, with no applicable exception. What is the best response?",
    "options": [
      "将本期款项与实际提供的工作材料价值相匹配并调整付款安排 / Match the draw to provided work and materials and adjust the schedule",
      "合同写了就可无条件先收$12,000 / The schedule alone authorizes collecting all $12,000",
      "让业主贷款即可免除限制 / Owner financing eliminates the limit",
      "把超出部分叫管理费即可 / Rename the excess a management fee"
    ],
    "answer": 0,
    "explanation": "不能用进度款名义提前收取尚未履行的工作和未提供材料价款。题设排除例外且明确不是订金；付款名称和业主融资不改变实际履行基础。",
    "sources": [
      {
        "title": "CSLB — Homeowner Checklists",
        "url": "https://www.cslb.ca.gov/Consumers/Hire_A_Contractor/Home_Improvement_Contracts/Homeowner_Checklists.aspx",
        "note": "进度款按已完成工作支付；订金与进度款要区分。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2028,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "contracts",
    "difficulty": "advanced",
    "kind": "scenario",
    "question": "2026年普通家装工程业主要求知道即将使用的分包商资料。总包称“有我负责，无需透露”。依SB517新要求，最佳做法是什么？",
    "questionEn": "For a 2026 home improvement project, the consumer requests information about subcontractors to be used. The prime refuses because it is responsible for the job. Under SB 517, what is the best response?",
    "options": [
      "只给分包商报价 / Provide only the subcontract price",
      "只说明“有保险”即可 / Merely say they are insured",
      "披露后总包即不再负责 / Disclosure transfers all responsibility away from the prime",
      "按要求提供分包商姓名/名称、联系方式、执照号及分类；总包仍承担相应责任 / Supply requested names, contacts, license numbers and classifications; the prime retains its responsibility"
    ],
    "answer": 3,
    "explanation": "2026年1月1日起SB517加入相应披露要求。消费者请求触发资料提供，不是披露即免责；报价或“有保险”等概括说法不能替代具体身份信息。",
    "sources": [
      {
        "title": "CSLB — 2026 License Law and Reference Book",
        "url": "https://www.cslb.ca.gov/Resources/GuidesAndPublications/2026/2026_CSLB_Law_Book.pdf",
        "note": "2026年SB517家装合同分包商信息按消费者要求披露；总包责任不转移。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2029,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "public",
    "difficulty": "intermediate",
    "kind": "scenario",
    "question": "一项已确定适用加州公共工程现行工资的项目，承包商用全州统一最低工资替代相应工种和地点的DIR工资标准。最准确判断是什么？",
    "questionEn": "On a project confirmed subject to California public-works prevailing wages, a contractor pays the statewide minimum wage instead of the applicable DIR determination. Which conclusion is correct?",
    "options": [
      "可以，最低工资是所有项目唯一标准 / Minimum wage is the only standard for all projects",
      "应使用适用工种及地区等条件对应的DIR现行工资标准 / Use the applicable DIR prevailing-wage determination for the work and location",
      "只看承包商办公室所在城市 / Use only the office city",
      "只要员工同意即可 / Employee consent is sufficient"
    ],
    "answer": 1,
    "explanation": "项目已确认受现行工资约束，应核对适用认定而非用普通最低工资替代。工种、工程地点及认定适用条件影响标准；员工同意不能任意降低法定义务。",
    "sources": [
      {
        "title": "DIR — Public Works",
        "url": "https://www.dir.ca.gov/public-works/publicworks.html",
        "note": "适用公共工程按DIR认定的prevailing wage支付。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2030,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "public",
    "difficulty": "advanced",
    "kind": "scenario",
    "question": "仅持有效CSLB执照的公司拟投标一项适用DIR公共工程注册的州公共工程，题设无小项目、联邦或其他注册例外。它认为CSLB执照已包含DIR注册。应如何处理？",
    "questionEn": "A company with a valid CSLB license plans to bid a state public work subject to DIR contractor registration, with no applicable exemption. It assumes the CSLB license includes DIR registration. What should it do?",
    "options": [
      "无需其他手续 / Nothing else is needed",
      "只等完工后注册 / Register only after completion",
      "另行确保投标及履约所需DIR注册有效 / Separately ensure required DIR registration is active for bidding and performance",
      "只让一个员工注册即可 / Register one employee instead"
    ],
    "answer": 2,
    "explanation": "CSLB执照与DIR公共工程承包商注册是不同制度。满足其中之一不能代替另一项；本题已排除特殊注册例外，不应拖到完工。",
    "sources": [
      {
        "title": "DIR — Public Works Frequently Asked Questions",
        "url": "https://www.dir.ca.gov/public-works/publicworkssb854faq.html",
        "note": "承包商注册与CSLB执照是不同要求；题设排除注册例外。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2031,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "safety",
    "difficulty": "intermediate",
    "kind": "scenario",
    "question": "雇主上午9点得知员工发生依法属于serious injury的工作事故，且无紧急情势延长例外。关于向Cal/OSHA报告，最佳行动是什么？",
    "questionEn": "An employer learns at 9 a.m. of a work-connected injury meeting the legal serious-injury definition, with no exigent-circumstances extension. What is the best reporting action?",
    "options": [
      "尽快报告，一般不晚于得知或应得知后8小时 / Report as soon as practicable, generally no later than eight hours after knowledge or diligent inquiry would reveal it",
      "统一等到第二天上班 / Wait until the next workday",
      "仅报工伤保险公司即可 / Notify only the insurer",
      "只在员工死亡时才需报告 / Report only if the worker dies"
    ],
    "answer": 0,
    "explanation": "§342要求尽快且通常不晚于8小时；不是获得完整调查结果后才起算，也不是一律可以等满8小时。通知保险公司不能替代向Cal/OSHA报告。",
    "sources": [
      {
        "title": "Cal/OSHA — Title 8 §342",
        "url": "https://www.dir.ca.gov/title8/342.html",
        "note": "严重伤病/死亡应尽快报告，一般不晚于知悉或应知悉后8小时。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2032,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "safety",
    "difficulty": "advanced",
    "kind": "scenario",
    "question": "员工要进入恰好5英尺深的土质沟槽，非完整稳定岩石。现场经理说法规只管“超过5英尺”，所以不需防坍塌保护。应如何判断？",
    "questionEn": "Workers will enter a soil trench exactly five feet deep, not entirely in stable rock. A manager says cave-in protection is required only above five feet. What is correct?",
    "options": [
      "正确，5英尺整不在范围内 / Correct, exactly five feet is excluded",
      "正确，只要当天无雨即可 / Correct, if there is no rain",
      "只要员工签字即可进入 / A signed waiver permits entry",
      "需要符合规定的保护；不足5英尺且经胜任人员判断无坍塌风险才可能适用该项例外 / Adequate protection is required; the shallow exception is for less than five feet with a competent-person finding of no cave-in indication"
    ],
    "answer": 3,
    "explanation": "§1541.1的浅沟例外是“less than 5 feet”，并且必须无潜在坍塌迹象。恰好5英尺不符合这一例外；不足5英尺也并非自动安全。",
    "sources": [
      {
        "title": "Cal/OSHA — Title 8 §1541.1",
        "url": "https://www.dir.ca.gov/title8/1541_1.html",
        "note": "防坍塌保护例外仅完整稳定岩石，或不足5英尺且胜任人员判无坍塌风险。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2033,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "safety",
    "difficulty": "intermediate",
    "kind": "scenario",
    "question": "土沟昨日已由胜任人员检查；夜里暴雨，今早工人准备重新下沟。最佳行动是什么？",
    "questionEn": "A competent person inspected an excavation yesterday. Heavy rain occurred overnight and workers are about to re-enter. What is the best action?",
    "options": [
      "昨天检查结果可连续沿用一周 / Yesterday’s inspection is valid for a week",
      "由胜任人员在员工暴露前复查沟槽、周边及保护系统 / Have a competent person reinspect the excavation, surroundings and protective systems before exposure",
      "只让第一名工人试着进入 / Send one worker in to test conditions",
      "排掉积水便无需检查 / Drain the water and skip inspection"
    ],
    "answer": 1,
    "explanation": "降雨可能增加坍塌及系统失效风险。§1541要求可预期员工暴露时进行规定检查，包括暴雨或其他增加风险事件后的检查，不能只依赖昨日结果。",
    "sources": [
      {
        "title": "Cal/OSHA — Title 8 §1541",
        "url": "https://www.dir.ca.gov/title8/1541.html",
        "note": "员工可预期暴露时的班前、班中必要检查及暴雨等增加风险后的复查。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2034,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "safety",
    "difficulty": "advanced",
    "kind": "scenario",
    "question": "混凝土施工留下可吸入结晶硅粉尘。湿扫和HEPA吸尘均可行，主管仍让工人干扫扬尘。按§1532.3最佳做法是什么？",
    "questionEn": "Concrete work leaves respirable crystalline silica dust. Wet sweeping and HEPA vacuuming are feasible, but the supervisor directs dust-generating dry sweeping. What is the best approach under §1532.3?",
    "options": [
      "干扫更快，因此自动允许 / Dry sweeping is automatically allowed because it is faster",
      "戴普通纸口罩后就可忽略清扫控制 / A paper mask eliminates housekeeping controls",
      "改用可行的湿扫或HEPA吸尘等减少粉尘暴露方法 / Use feasible wet sweeping, HEPA vacuuming or other exposure-minimizing methods",
      "只需下班后干扫 / Dry-sweep only after the shift"
    ],
    "answer": 2,
    "explanation": "在干扫可能增加硅尘暴露且湿扫、HEPA等方法可行时，不能以方便为由干扫。时间选择或普通口罩不能替代所要求的工程/清扫控制；不可行例外须有事实依据。",
    "sources": [
      {
        "title": "Cal/OSHA — Title 8 §1532.3",
        "url": "https://www.dir.ca.gov/title8/1532_3.html",
        "note": "可行时采用湿扫、HEPA吸尘等，限制可能增加硅尘暴露的干扫。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  },
  {
    "id": 2035,
    "exam": "LAW",
    "category": "law",
    "categoryName": "法律与商业",
    "section": "safety",
    "difficulty": "intermediate",
    "kind": "scenario",
    "question": "夜班要用危险化学品，SDS只锁在白班经理的办公室，工人须等次日才能查看。依危害沟通要求，最佳修正是什么？",
    "questionEn": "Night-shift workers use a hazardous chemical, but its SDS is locked in the day manager’s office until morning. What correction best meets hazard-communication requirements?",
    "options": [
      "确保每个工作班次可及时获得SDS，并落实标签和培训 / Ensure ready SDS access each shift, with required labeling and training",
      "只在采购部门留存即可 / Keep it only in purchasing",
      "把容器涂成红色即可替代SDS / Paint the container red instead",
      "发生中毒后再索取SDS / Obtain the SDS after an exposure injury"
    ],
    "answer": 0,
    "explanation": "SDS必须在每个班次员工工作时可及时获得。保存一份但无法取用不够；标签、SDS及培训各有作用，不能相互任意替代。",
    "sources": [
      {
        "title": "Cal/OSHA — Title 8 §5194",
        "url": "https://www.dir.ca.gov/title8/5194.html",
        "note": "危险化学品培训、标签及每个班次可获得的SDS。"
      }
    ],
    "verifiedOn": "2026-10-25",
    "original": true
  }
];
