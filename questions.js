const QUESTIONS = [
  // ========== 法律与商业 (Law & Business) ==========
  {
    id: 1,
    category: "law",
    categoryName: "法律与商业",
    question: "以下哪项应包含在书面报价单上？",
    questionEn: "Which of the following should be on a written quote sheet?",
    options: [
      "保修信息 (Warranty information)",
      "工作时间表 (Schedule of the work)",
      "分包商身份证明 (Subcontractor identifications)",
      "承包商执照号码 (Contractor license number)"
    ],
    answer: 3,
    explanation: "根据加州法律，书面报价单上必须包含承包商执照号码，这是法定要求。"
  },
  {
    id: 2,
    category: "law",
    categoryName: "法律与商业",
    question: "哪种合同类型通常具有明确的工作范围和施工图纸？",
    questionEn: "What type of contract typically has a well-defined scope of work and set of plans?",
    options: [
      "单价合同 (Unit Price)",
      "总价合同 (Lump Sum)",
      "成本加成合同 (Cost Plus)",
      "工时材料合同 (Time & Materials)"
    ],
    answer: 1,
    explanation: "总价合同 (Lump Sum) 要求工作范围和图纸明确定义，承包商按固定价格完成所有工作。"
  },
  {
    id: 3,
    category: "law",
    categoryName: "法律与商业",
    question: "投标保证金 (Bid Bond) 通常涉及多少方？",
    questionEn: "How many parties typically are there in a bid bond?",
    options: [
      "1方：承包商",
      "2方：承包商和业主",
      "3方：承包商、业主和担保人",
      "4方：建筑师、承包商、业主和担保人"
    ],
    answer: 2,
    explanation: "投标保证金涉及三方：承包商（Principal）、业主（Obligee）和担保公司（Surety）。"
  },
  {
    id: 4,
    category: "law",
    categoryName: "法律与商业",
    question: "如果建筑项目中的分包商未获得付款，可以使用哪种留置权来强制执行？",
    questionEn: "If a subcontractor on a construction project is not paid, what type of lien can be used to enforce payment?",
    options: [
      "UCC 留置权",
      "机械留置权 (Mechanic's lien)",
      "抵押留置权 (Mortgage lien)",
      "税务留置权 (Tax lien)"
    ],
    answer: 1,
    explanation: "机械留置权 (Mechanic's Lien) 是建筑行业中保护分包商和材料供应商获得付款的主要法律工具。"
  },
  {
    id: 5,
    category: "law",
    categoryName: "法律与商业",
    question: "保留金 (Retainage) 在建筑付款中的用途是什么？",
    questionEn: "How is retainage used in construction billings and payments?",
    options: [
      "确保业主合规的预付款",
      "设计阶段支付给建筑师的预付金",
      "合同价格中扣留的部分，直到工程基本完成后才释放",
      "业主为材料支付的预付款"
    ],
    answer: 2,
    explanation: "保留金是从每次付款中扣留的一部分（通常5-10%），在工程实质性完工后才释放，用于保障工程质量。"
  },
  {
    id: 6,
    category: "law",
    categoryName: "法律与商业",
    question: "如果建筑合同金额为400万美元，履约保证金的罚金金额是多少？",
    questionEn: "If a construction contract provides for the building of a $4,000,000 facility, what will be the penal sum under a performance bond?",
    options: [
      "合同价格的5%-10%",
      "合同价格的20%",
      "$4,000,000",
      "项目结束时欠分包商和供应商的金额"
    ],
    answer: 2,
    explanation: "履约保证金的罚金金额通常等于合同全额，即$4,000,000。"
  },
  {
    id: 7,
    category: "law",
    categoryName: "法律与商业",
    question: "根据 FLSA（公平劳动标准法），雇主必须保留用于计算员工工资的记录（如考勤卡、工作时间表）多长时间？",
    questionEn: "How long must an employer keep pay records under the FLSA?",
    options: [
      "1年",
      "2年",
      "4年",
      "6年"
    ],
    answer: 1,
    explanation: "根据 FLSA 规定，雇主必须保留工资计算相关记录至少2年。"
  },
  {
    id: 8,
    category: "law",
    categoryName: "法律与商业",
    question: "关键路径法 (CPM) 计算的是项目中所有计划活动的________时间。",
    questionEn: "The critical path method calculates the ________ amount of time for all planned activities.",
    options: [
      "最长 (longest)",
      "最短 (shortest)",
      "最早 (earliest)",
      "最少 (least)"
    ],
    answer: 0,
    explanation: "关键路径法 (CPM) 计算的是所有计划活动的最长路径时间，这决定了项目的最短完成时间。"
  },
  {
    id: 9,
    category: "law",
    categoryName: "法律与商业",
    question: "要形成合同，除了要约、承诺和具有法律约束力的意图外，还需要什么？",
    questionEn: "To form a contract, besides offer, acceptance, and intention to be legally bound, what else is required?",
    options: [
      "对价 (Consideration)",
      "赔偿 (Indemnification)",
      "信用 (Credit)",
      "损害赔偿 (Damages)"
    ],
    answer: 0,
    explanation: "合同四要素：要约(Offer)、承诺(Acceptance)、法律约束意图(Intention)、对价(Consideration)。对价是指双方之间交换的价值。"
  },
  {
    id: 10,
    category: "law",
    categoryName: "法律与商业",
    question: "独资企业 (Sole Proprietorship) 的主要缺点是什么？",
    questionEn: "What is the main disadvantage of running a business as a sole proprietorship?",
    options: [
      "穿透式征税 (Pass-through taxation)",
      "政府监管 (Government regulation)",
      "个人责任 (Personal liability)",
      "自我管理 (Self-management)"
    ],
    answer: 2,
    explanation: "独资企业的最大缺点是个人责任无限——企业债务和法律诉讼可能涉及个人资产。"
  },
  {
    id: 11,
    category: "law",
    categoryName: "法律与商业",
    question: "要求员工使用必要的安全设备属于哪种风险管理策略？",
    questionEn: "Having your employees use the necessary safety equipment is part of a:",
    options: [
      "风险降低策略 (Risk Reduction)",
      "风险转移策略 (Risk Transfer)",
      "风险规避策略 (Risk Avoidance)",
      "风险接受策略 (Risk Acceptance)"
    ],
    answer: 0,
    explanation: "使用安全设备是风险降低(Risk Reduction)策略的一部分，它不能完全消除风险，但可以降低受伤的可能性和严重程度。"
  },
  {
    id: 12,
    category: "law",
    categoryName: "法律与商业",
    question: "你正在竞标一个需要6%保险保证金的项目，材料和人工费用为$93,500.00，保证金费用是多少？",
    questionEn: "You are bidding a job requiring a 6% insurance bond. Material and labor cost is $93,500.00. How much for the bond?",
    options: [
      "$561.00",
      "$5,600.00",
      "$5,610.00",
      "$56,100.00"
    ],
    answer: 2,
    explanation: "$93,500 × 6% = $5,610.00。这是基于项目总成本的保险保证金费用。"
  },
  {
    id: 13,
    category: "law",
    categoryName: "法律与商业",
    question: "公共合同中现行工资法 (Prevailing Wage Law) 的目的是什么？",
    questionEn: "What is the purpose of a prevailing wage law on public contracts?",
    options: [
      "平衡本地和非本地工人之间的竞争",
      "确保政府支付最低价格",
      "帮助工人获得更高工资",
      "允许公司节省费用"
    ],
    answer: 0,
    explanation: "现行工资法旨在确保公共项目中本地和非本地工人之间的公平竞争。"
  },
  {
    id: 14,
    category: "law",
    categoryName: "法律与商业",
    question: "总承包商通常实施什么类型的计划来确保施工质量符合合同标准？",
    questionEn: "What type of plan does a general contractor implement to ensure craftsmanship meets contract standards?",
    options: [
      "质量控制计划 (Quality Control Plan)",
      "价值明细表 (Schedule of Values)",
      "关键路径 (Critical Path)",
      "现场平面图 (Site Plan)"
    ],
    answer: 0,
    explanation: "质量控制计划 (QCP) 是总承包商确保施工质量符合合同标准的系统性方法。"
  },

  // ========== 木工与施工 (Carpentry & Construction) ==========
  {
    id: 15,
    category: "carpentry",
    categoryName: "木工与施工",
    question: "什么是概念估算 (Conceptual Estimate)？",
    questionEn: "What is a conceptual estimate?",
    options: [
      "基于业主设计想法的初步估算",
      "由建筑/工程公司制定的实际预算",
      "业主的初始成本估算",
      "基于蓝图的估算"
    ],
    answer: 0,
    explanation: "概念估算是在项目初期，基于业主的设计想法做出的初步成本预测，通常不太精确。"
  },
  {
    id: 16,
    category: "carpentry",
    categoryName: "木工与施工",
    question: "在施工蓝图中，你在哪里可以找到所需的窗户尺寸？",
    questionEn: "In a set of blueprints, where would you find the required window sizes?",
    options: [
      "立面图 (Elevation plan)",
      "窗户平面图 (Window plan)",
      "窗户明细表 (Window schedule)",
      "建筑平面图 (Architectural plan)"
    ],
    answer: 2,
    explanation: "窗户明细表 (Window Schedule) 列出了项目中所有窗户的尺寸、类型和规格详情。"
  },
  {
    id: 17,
    category: "carpentry",
    categoryName: "木工与施工",
    question: "3-4-5 方法在施工放线中如何应用？",
    questionEn: "How is the 3-4-5 method applied in layout situations?",
    options: [
      "找到垂直线 (To find perpendicular lines)",
      "使两条线成90度直角 (To square two lines at 90°)",
      "找到平行线 (To find parallel lines)",
      "获取垂直测量值 (To get vertical measurements)"
    ],
    answer: 1,
    explanation: "3-4-5 方法基于勾股定理，用于在施工现场确保两条线形成精确的90度直角。"
  },
  {
    id: 18,
    category: "carpentry",
    categoryName: "木工与施工",
    question: "硬木 (Hardwood) 来自什么类型的树木？",
    questionEn: "What types of trees does hardwood lumber come from?",
    options: [
      "落叶树 (Deciduous/leaf-bearing)",
      "北方生长的树木",
      "针叶树 (Coniferous/cone-bearing)",
      "常绿树 (Evergreens)"
    ],
    answer: 0,
    explanation: "硬木来自落叶树（Deciduous），如橡木、枫木。软木来自针叶树（Coniferous），如松木、杉木。"
  },
  {
    id: 19,
    category: "carpentry",
    categoryName: "木工与施工",
    question: "1\" x 8\" #2 松木的实际尺寸是多少？",
    questionEn: "What is the actual size of a piece of 1\" x 8\" #2 pine?",
    options: [
      "1\" x 7 1/2\"",
      "3/4\" x 7 1/2\"",
      "3/4\" x 7 1/4\"",
      "1\" x 7 3/8\""
    ],
    answer: 2,
    explanation: "木材的标称尺寸 (nominal size) 和实际尺寸 (actual size) 不同。1\"x8\" 的实际尺寸是 3/4\" x 7 1/4\"。"
  },
  {
    id: 20,
    category: "carpentry",
    categoryName: "木工与施工",
    question: "使用台锯 (Table Saw) 时的安全距离是多少？",
    questionEn: "What is the margin of safety when operating a table saw?",
    options: [
      "1英尺 (1')",
      "2英寸 (2\")",
      "4英寸 (4\")",
      "6英寸 (6\")"
    ],
    answer: 2,
    explanation: "操作台锯时，手指应始终保持距锯片至少4英寸的安全距离。"
  },
  {
    id: 21,
    category: "carpentry",
    categoryName: "木工与施工",
    question: "使用凿子 (Chisel) 时，以下哪种做法对防止受伤很重要？",
    questionEn: "Which of the following practices is important to prevent injury while using a chisel?",
    options: [
      "始终向远离自己的方向凿",
      "始终使用锋利的凿子",
      "用夹具固定木料",
      "以上所有"
    ],
    answer: 3,
    explanation: "使用凿子时的安全措施包括：向远离身体方向凿、使用锋利的凿子（钝凿更危险）、固定工件。三者都很重要。"
  },
  {
    id: 22,
    category: "carpentry",
    categoryName: "木工与施工",
    question: "使用步进法放线椽子 (Rafter) 时使用什么类型的角尺？",
    questionEn: "What type of square is used for layout of rafters using the step method?",
    options: [
      "速度角尺 (Speed square)",
      "试验角尺 (Try square)",
      "组合角尺 (Combination square)",
      "框架角尺 (Framing square)"
    ],
    answer: 3,
    explanation: "框架角尺 (Framing Square) 是使用步进法进行椽子放线的标准工具，其上有椽子计算表。"
  },
  {
    id: 23,
    category: "carpentry",
    categoryName: "木工与施工",
    question: "Saber saw 的另一个名称是什么？",
    questionEn: "What is another name for saber saw?",
    options: [
      "便携式电动线锯 (Portable electric jig saw)",
      "建筑锯 (Builders saw)",
      "石膏板切割器 (Drywall cutter)",
      "往复锯 (Reciprocating saw)"
    ],
    answer: 0,
    explanation: "Saber saw（马刀锯）也称为 Portable electric jig saw（便携式电动线锯），用于曲线切割。"
  },

  // ========== 管道工程 (Plumbing) ==========
  {
    id: 24,
    category: "plumbing",
    categoryName: "管道工程",
    question: "申请管道许可证通常需要以下哪些资料？",
    questionEn: "For the issuance of a plumbing permit, which of the following is normally required?",
    options: [
      "设计图纸 (Design plans)",
      "完整规格说明 (Complete specifications)",
      "建筑用途描述 (Description of the use of the building)",
      "以上所有 (All of the above)"
    ],
    answer: 3,
    explanation: "申请管道许可证需要提交设计图纸、完整规格说明和建筑用途描述。"
  },
  {
    id: 25,
    category: "plumbing",
    categoryName: "管道工程",
    question: "水平安装的塑料 DWV 管道支撑之间的最大允许距离是多少？",
    questionEn: "What is the maximum distance allowed between pipe supports for plastic DWV piping installed horizontally?",
    options: [
      "12英寸",
      "24英寸",
      "30英寸",
      "48英寸"
    ],
    answer: 3,
    explanation: "水平安装的塑料 DWV（排水-废水-通气）管道的支撑间距最大为48英寸（4英尺）。"
  },
  {
    id: 26,
    category: "plumbing",
    categoryName: "管道工程",
    question: "以下哪种水龙头把手不允许用于无障碍设施的水龙头？",
    questionEn: "Which type of faucet handles are not allowed for accessible fixtures?",
    options: [
      "刀片手柄 (Blade handles)",
      "十字把手 (Crossbar handles)",
      "单手柄 (Single handles)",
      "翼形手柄 (Wing handles)"
    ],
    answer: 1,
    explanation: "十字把手 (Crossbar handles) 不适用于无障碍设施，因为它需要握力和旋转动作，对行动不便者不友好。"
  },
  {
    id: 27,
    category: "plumbing",
    categoryName: "管道工程",
    question: "3英寸排水管的清通间隙 (Rodding Clearance) 是多少？",
    questionEn: "What is the rodding clearance for a 3\" drain?",
    options: [
      "12英寸",
      "18英寸",
      "30英寸",
      "40英寸"
    ],
    answer: 1,
    explanation: "3英寸排水管需要至少18英寸的清通间隙，以便进行管道疏通和维护。"
  },
  {
    id: 28,
    category: "plumbing",
    categoryName: "管道工程",
    question: "为什么管道存水弯 (Trap) 需要通气？",
    questionEn: "Why are plumbing traps required to be vented?",
    options: [
      "防止存水弯被虹吸排干 (To avoid traps being drained of their liquid seals)",
      "将下水道气体排到室外 (To convey sewer gas to outside air)",
      "使排水更顺畅 (To enable drains to drain better)",
      "以上所有 (All of the above)"
    ],
    answer: 3,
    explanation: "存水弯通气有三个目的：防止水封被虹吸破坏、将有害气体排出室外、帮助排水系统顺畅运行。"
  },
  {
    id: 29,
    category: "plumbing",
    categoryName: "管道工程",
    question: "住宅给水系统的最大允许水压是多少？",
    questionEn: "The maximum allowable water pressure in residential water distribution systems is?",
    options: [
      "40 psi",
      "60 psi",
      "80 psi",
      "100 psi"
    ],
    answer: 2,
    explanation: "住宅给水系统的最大允许水压为80 psi。超过此值需安装减压阀。"
  },
  {
    id: 30,
    category: "plumbing",
    categoryName: "管道工程",
    question: "哪种类型的接头可用于连接不同材质的管道？",
    questionEn: "Which type of joints can be used to join dissimilar piping materials?",
    options: [
      "机械接头 (Mechanical)",
      "焊锡接头 (Soldered)",
      "焊接接头 (Welded)",
      "铜焊接头 (Brazed)"
    ],
    answer: 0,
    explanation: "机械接头是连接不同材质管道的唯一合适方式，因为焊接方法需要相同或兼容的材料。"
  },
  {
    id: 31,
    category: "plumbing",
    categoryName: "管道工程",
    question: "热水器上应安装什么类型的水阀？",
    questionEn: "What type of water valve should be installed on a water heater?",
    options: [
      "止回阀 (Check Valve)",
      "截止放空阀 (Stop and Waste Valve)",
      "全通径阀 (Full Port Valve)",
      "针型阀 (Needle Valve)"
    ],
    answer: 2,
    explanation: "热水器上应安装全通径阀 (Full Port Valve)，以确保充分的水流通过，便于维护和紧急关闭。"
  },

  // ========== 电气工程 (Electrical) ==========
  {
    id: 32,
    category: "electrical",
    categoryName: "电气工程",
    question: "由接地交流电气服务供电的建筑物配线系统，其接地电极导体应连接到________。",
    questionEn: "A premises wiring system supplied by a grounded ac service shall have a grounding electrode conductor connected to ________.",
    options: [
      "接地服务导体 (grounded service conductor)",
      "服务断路器外壳 (service disconnect enclosure)",
      "设备接地导体 (equipment grounding conductor)",
      "电表插座外壳 (meter socket enclosure)"
    ],
    answer: 0,
    explanation: "根据 NEC，接地电极导体应连接到接地服务导体（通常是中性线）。"
  },
  {
    id: 33,
    category: "electrical",
    categoryName: "电气工程",
    question: "绝缘层标有 THHN 的导线，其温度等级是多少？",
    questionEn: "A conductor with THHN marked on the insulation has a temperature rating of ________.",
    options: [
      "90华氏度 (90°F)",
      "90摄氏度 (90°C)",
      "75华氏度 (75°F)",
      "75摄氏度 (75°C)"
    ],
    answer: 1,
    explanation: "THHN 导线的温度等级为 90°C (194°F)。T=热塑性, H=耐热, H=高耐热, N=尼龙外套。"
  },
  {
    id: 34,
    category: "electrical",
    categoryName: "电气工程",
    question: "住宅电气服务中，入户线 (Service-drop conductors) 距地面的最小净空是多少？",
    questionEn: "Service-drop conductors at a residence shall have a MINIMUM clearance from final grade of ________.",
    options: [
      "8英尺",
      "10英尺",
      "12英尺",
      "15英尺"
    ],
    answer: 1,
    explanation: "根据 NEC，住宅入户线距地面最小净空为10英尺。"
  },
  {
    id: 35,
    category: "electrical",
    categoryName: "电气工程",
    question: "以下哪个断路器额定值不是 NEC 规定的标准额定值？",
    questionEn: "Which one of the following circuit breakers is NOT a standard ampere rating per the NEC?",
    options: [
      "75安培",
      "90安培",
      "35安培",
      "110安培"
    ],
    answer: 0,
    explanation: "NEC 标准断路器额定值不包括75安培。标准额定值序列为：15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125..."
  },
  {
    id: 36,
    category: "electrical",
    categoryName: "电气工程",
    question: "在室外使用时，铝质接地电极导体不得在距地面________以内终端。",
    questionEn: "Where used outdoors, aluminum grounding electrode conductors shall not be terminated within ________ of the earth.",
    options: [
      "18英寸",
      "24英寸",
      "30英寸",
      "36英寸"
    ],
    answer: 0,
    explanation: "铝质接地电极导体在室外使用时，终端必须距地面至少18英寸，以防腐蚀。"
  },
  {
    id: 37,
    category: "electrical",
    categoryName: "电气工程",
    question: "当电动机控制器同时作为断路装置时，它应断开电动机的所有________导体。",
    questionEn: "Where the motor controller also serves as a disconnecting means, it shall open all ________ conductors.",
    options: [
      "接地的 (grounded)",
      "中性的 (neutral)",
      "接地保护的 (grounding)",
      "非接地的 (ungrounded)"
    ],
    answer: 3,
    explanation: "电动机控制器作为断路装置时，必须能够断开所有非接地（火线）导体。"
  },
  {
    id: 38,
    category: "electrical",
    categoryName: "电气工程",
    question: "4,500瓦、240伏单相储水式热水器可使用的最大标准过流保护装置是多少安培？",
    questionEn: "Maximum standard size overcurrent protective device for a 4,500 watt, 240-volt, single-phase water heater?",
    options: [
      "20安培",
      "25安培",
      "30安培",
      "35安培"
    ],
    answer: 2,
    explanation: "4,500W ÷ 240V = 18.75A，按125%计算为23.4A，下一个标准断路器尺寸为30A。"
  },
  {
    id: 39,
    category: "electrical",
    categoryName: "电气工程",
    question: "爱迪生基座保险丝 (Edison base fuses) 在什么情况下被禁止使用？",
    questionEn: "Edison base fuses are prohibited ________.",
    options: [
      "所有建筑的新建工程中",
      "现有商业建筑中",
      "现有住宅安装中",
      "潮湿场所中"
    ],
    answer: 0,
    explanation: "爱迪生基座保险丝在所有新建工程中被禁止使用，因为它们可以互换不同额定值，存在安全隐患。"
  },

  // ========== 暖通空调 (HVAC) ==========
  {
    id: 40,
    category: "hvac",
    categoryName: "暖通空调",
    question: "以下哪个属于感性负载 (Inductive Load)？",
    questionEn: "Which of the following would be considered an inductive load?",
    options: [
      "变压器 (Transformer)",
      "启动电容器 (Start capacitor)",
      "固态继电器 (Solid state relay)",
      "电加热元件 (Electric heat strip)"
    ],
    answer: 0,
    explanation: "变压器是典型的感性负载，其工作原理基于电磁感应。电容器是容性负载，加热元件是阻性负载。"
  },
  {
    id: 41,
    category: "hvac",
    categoryName: "暖通空调",
    question: "热量可以通过哪些方式传递？",
    questionEn: "Heat can travel by:",
    options: [
      "潜热、显热和辐射 (latent, sensible and radiation)",
      "对流、压缩和辐射 (convection, compression and radiation)",
      "仅辐射 (radiation only)",
      "传导、对流和辐射 (conduction, convection and radiation)"
    ],
    answer: 3,
    explanation: "热量传递的三种基本方式：传导(Conduction)、对流(Convection)、辐射(Radiation)。"
  },
  {
    id: 42,
    category: "hvac",
    categoryName: "暖通空调",
    question: "过滤器-干燥器两端出现温差说明什么？",
    questionEn: "What does a temperature differential across a filter-drier indicate?",
    options: [
      "正常运行 (Normal operation)",
      "制冷剂过量 (Refrigerant overcharge)",
      "过滤器-干燥器堵塞 (Restricted filter-drier)",
      "制冷剂不足 (Refrigerant undercharge)"
    ],
    answer: 2,
    explanation: "过滤器-干燥器两端出现明显温差说明存在堵塞，限制了制冷剂流动，需要更换。"
  },
  {
    id: 43,
    category: "hvac",
    categoryName: "暖通空调",
    question: "增加水冷冷凝器的水流量会产生什么效果？",
    questionEn: "An increase in water flow, when using a water cooled condenser, would ________.",
    options: [
      "增加压缩机能耗",
      "增加水的结垢系数",
      "降低运行排气压力",
      "增加压缩机功率消耗"
    ],
    answer: 2,
    explanation: "增加水流量可以更有效地散热，从而降低冷凝器中的排气压力。"
  },

  // ========== 焊接 (Welding) ==========
  {
    id: 44,
    category: "welding",
    categoryName: "焊接",
    question: "如果焊接工艺不产生覆盖整个焊缝的焊渣 (Slag)，必须使用什么类型的焊条？",
    questionEn: "What type of electrodes must be used with a process that produces no flux residue (slag)?",
    options: [
      "实芯焊条 (Solid)",
      "金属芯焊条 (Metal cored)",
      "药芯焊条 (Flux cored)",
      "A 和 B (Both a and b)"
    ],
    answer: 3,
    explanation: "实芯焊条和金属芯焊条不产生焊渣覆盖层，而药芯焊条会产生焊渣。"
  },
  {
    id: 45,
    category: "welding",
    categoryName: "焊接",
    question: "当关注材料的疲劳 (Fatigue) 性能时，必须考虑什么？",
    questionEn: "The endurance limit of a material must be considered when concerned about which property?",
    options: [
      "疲劳 (Fatigue)",
      "抗拉强度 (Tensile strength)",
      "屈服强度 (Yield strength)",
      "硬度 (Hardness)"
    ],
    answer: 0,
    explanation: "耐久极限 (Endurance Limit) 直接关系到材料的疲劳性能——即材料在反复加载下不发生疲劳破坏的最大应力。"
  },
  {
    id: 46,
    category: "welding",
    categoryName: "焊接",
    question: "如果焊缝未能与另一条焊缝或母材结合，这被称为：",
    questionEn: "If the weld does not combine with another weld or the base metal it is referred to as:",
    options: [
      "未完全熔透 (Incomplete penetration)",
      "未完全结合 (Incomplete bonding)",
      "未完全包含 (Incomplete inclusion)",
      "未完全熔合 (Incomplete fusion)"
    ],
    answer: 3,
    explanation: "未完全熔合 (Incomplete Fusion) 是指焊缝金属未能与母材或相邻焊缝金属充分结合的缺陷。"
  },

  // ========== 安全 (Safety) ==========
  {
    id: 47,
    category: "safety",
    categoryName: "安全",
    question: "固化后的乳胶漆属于什么类型的废物？",
    questionEn: "Unused latex paint in solidified form is ________.",
    options: [
      "危险废物 (Hazardous waste)",
      "非危险废物 (Non-hazardous waste)",
      "可燃物 (Flammable)",
      "腐蚀性废物 (Corrosive)"
    ],
    answer: 1,
    explanation: "固化后的乳胶漆属于非危险废物。液态乳胶漆也通常不被归类为危险废物，但油性漆可能是。"
  },
  {
    id: 48,
    category: "safety",
    categoryName: "安全",
    question: "哪项 OSHA 标准要求雇主向工人提供工作场所有毒物质和化学品的信息？",
    questionEn: "What OSHA standard requires employers to make information available about toxic substances and chemicals?",
    options: [
      "危害通讯标准 (Hazard Communication Standard)",
      "危险能源控制标准 (Control of Hazardous Energy Standard)",
      "平权行动标准 (Affirmative Action Standard)",
      "一般安全与健康规定 (General Safety and Health Provisions)"
    ],
    answer: 0,
    explanation: "危害通讯标准 (HazCom / GHS) 要求雇主告知员工工作场所化学品的危害并提供安全数据表 (SDS)。"
  },
  {
    id: 49,
    category: "codes",
    categoryName: "建筑规范",
    question: "对于独立式三户住宅建设项目，应适用国际建筑规范 (IBC) 还是国际住宅规范 (IRC)？",
    questionEn: "Would the IBC or IRC apply to a detached residential 3-family dwelling construction project?",
    options: [
      "IBC (国际建筑规范)",
      "IRC (国际住宅规范)",
      "承包商可以选择，因为它们相同",
      "两者都不适用"
    ],
    answer: 0,
    explanation: "IRC 仅适用于一户和二户住宅。三户及以上住宅应适用 IBC。"
  },
  {
    id: 50,
    category: "codes",
    categoryName: "建筑规范",
    question: "根据加州建筑规范，居住房间的最低层高是多少？",
    questionEn: "According to the California Building Code, what is the minimum ceiling height for habitable rooms?",
    options: [
      "7英尺6英寸 (7'6\")",
      "7英尺 (7')",
      "8英尺 (8')",
      "6英尺8英寸 (6'8\")"
    ],
    answer: 0,
    explanation: "根据 California Residential Code，居住房间的最低层高为7英尺6英寸。"
  },
  {
    id: 51,
    category: "safety",
    categoryName: "安全",
    question: "哪项 Cal/OSHA 法规规定了坠落防护要求？",
    questionEn: "Which Cal/OSHA regulation addresses fall protection requirements?",
    options: [
      "Section 1510",
      "Section 1670",
      "Section 3210",
      "Section 5000"
    ],
    answer: 1,
    explanation: "Cal/OSHA Section 1670 专门规定了建筑施工中的坠落防护要求。"
  },
  {
    id: 52,
    category: "safety",
    categoryName: "安全",
    question: "气动钉枪的气压不应超过多少 PSI？",
    questionEn: "The air pressure for an air powered nail gun should not exceed what PSI?",
    options: [
      "40 psi",
      "120-150 psi",
      "160 psi",
      "由制造商设定最大 psi"
    ],
    answer: 3,
    explanation: "气动钉枪的最大工作压力应遵循制造商的规定，不同型号和品牌的设备有不同的最大压力要求。"
  },

  // ========== 额外补充题 ==========
  {
    id: 53,
    category: "plumbing",
    categoryName: "管道工程",
    question: "医用气体系统中，带绿色标记的铜管表示什么等级？",
    questionEn: "Copper with a green stamp is used in a Med Gas system. What grade of copper does the color denote?",
    options: [
      "M 级",
      "L 级",
      "K 级",
      "B 和 C 都是"
    ],
    answer: 2,
    explanation: "绿色标记代表 K 级铜管，这是最厚壁的铜管等级，用于医用气体系统等高要求应用。"
  },
  {
    id: 54,
    category: "plumbing",
    categoryName: "管道工程",
    question: "4英寸水平排水管需要在哪里安装清扫口 (Cleanout)？",
    questionEn: "A horizontal drain pipe with a diameter of four inches is required to have ________.",
    options: [
      "在管道上方垂直安装清扫口",
      "在管道起点安装清扫口",
      "在管道末端安装清扫口",
      "安装带齐平盖的清扫口"
    ],
    answer: 2,
    explanation: "4英寸水平排水管需要在管道末端安装清扫口，以便于疏通和维护。"
  },
  {
    id: 55,
    category: "electrical",
    categoryName: "电气工程",
    question: "根据 NEC，安装在吊顶中的嵌入式面板灯具应如何安装？",
    questionEn: "Recessed lay-in type luminaires installed in suspended ceilings shall:",
    options: [
      "独立于天花板龙骨支撑",
      "不得连接到天花板框架构件",
      "连接到建筑支撑框架构件",
      "用螺栓、螺钉、铆钉或夹具连接到天花板框架构件"
    ],
    answer: 3,
    explanation: "根据 NEC，嵌入式面板灯具应使用螺栓、螺钉、铆钉或夹具牢固连接到吊顶框架构件上。"
  },
  {
    id: 56,
    category: "electrical",
    categoryName: "电气工程",
    question: "在 Class II, Division 1 危险场所，管道与接线盒的连接方式应为：",
    questionEn: "In Class II, Division 1 locations, an approved method of connection of conduit to boxes is ________.",
    options: [
      "压缩接头 (Compression fittings)",
      "螺纹凸台 (Threaded bosses)",
      "焊接 (Welding)",
      "以上所有"
    ],
    answer: 1,
    explanation: "在粉尘爆炸危险的 Class II, Division 1 场所，螺纹凸台是批准的管道连接方式。"
  },
  {
    id: 57,
    category: "welding",
    categoryName: "焊接",
    question: "电弧时间 (Arc Time) 是指什么？",
    questionEn: "Arc time is:",
    options: [
      "焊工的上班总时间",
      "电弧焊接操作中电弧开启的时间",
      "非电弧时间",
      "电弧和非电弧的总时间"
    ],
    answer: 1,
    explanation: "电弧时间特指焊接过程中电弧实际点燃和工作的时间，不包括准备、休息等其他时间。"
  },
  {
    id: 58,
    category: "law",
    categoryName: "法律与商业",
    question: "加州承包商执照的最低持照要求是什么？",
    questionEn: "What is the minimum experience requirement for a California contractor's license?",
    options: [
      "2年相关经验",
      "3年相关经验",
      "4年相关经验",
      "5年相关经验"
    ],
    answer: 2,
    explanation: "加州承包商执照要求申请人具有至少4年的相关行业工作经验（过去10年内）。"
  },
  {
    id: 59,
    category: "law",
    categoryName: "法律与商业",
    question: "加州法律规定，承包商执照号码必须出现在所有________上。",
    questionEn: "California law requires the contractor's license number to appear on all ________.",
    options: [
      "广告和名片 (Advertising and business cards)",
      "合同和发票 (Contracts and invoices)",
      "车辆和工地标识 (Vehicles and job site signs)",
      "以上所有 (All of the above)"
    ],
    answer: 3,
    explanation: "加州法律要求承包商执照号码必须出现在所有广告、名片、合同、发票、车辆标识和工地标识上。"
  },
  {
    id: 60,
    category: "safety",
    categoryName: "安全",
    question: "根据 Cal/OSHA，沟槽深度超过多少英尺时需要防护系统？",
    questionEn: "According to Cal/OSHA, trenches deeper than how many feet require a protective system?",
    options: [
      "3英尺",
      "4英尺",
      "5英尺",
      "6英尺"
    ],
    answer: 2,
    explanation: "Cal/OSHA 规定，沟槽深度超过5英尺时必须安装防护系统（支撑、倾斜或屏蔽），以防止坍塌。"
  },
  {
    id: 61,
    category: "safety",
    categoryName: "安全",
    question: "梯子应以什么角度放置才最安全？",
    questionEn: "At what angle should a ladder be placed for maximum safety?",
    options: [
      "60度",
      "75度（4:1 比例）",
      "80度",
      "90度"
    ],
    answer: 1,
    explanation: "梯子应以75度角（4:1比例）放置，即梯子底部与墙的距离为梯子工作长度的1/4。"
  },
  {
    id: 62,
    category: "carpentry",
    categoryName: "木工与施工",
    question: "在混凝土施工中，'slump test' 用于测试什么？",
    questionEn: "In concrete work, what does a 'slump test' measure?",
    options: [
      "混凝土强度 (Concrete strength)",
      "混凝土工作性/坍落度 (Concrete workability/consistency)",
      "混凝土温度 (Concrete temperature)",
      "混凝土含气量 (Concrete air content)"
    ],
    answer: 1,
    explanation: "坍落度试验 (Slump Test) 用于测量新拌混凝土的工作性和稠度，坍落度越大，混凝土越稀。"
  },
  {
    id: 63,
    category: "carpentry",
    categoryName: "木工与施工",
    question: "标准混凝土的28天抗压强度通常为多少 psi？",
    questionEn: "What is the typical 28-day compressive strength of standard concrete?",
    options: [
      "1,500 psi",
      "2,500 psi",
      "3,000 psi",
      "4,000 psi"
    ],
    answer: 2,
    explanation: "标准结构混凝土的28天抗压强度通常为3,000 psi（约20.7 MPa），住宅基础常用此标准。"
  },
  {
    id: 64,
    category: "carpentry",
    categoryName: "木工与施工",
    question: "屋顶坡度 (Roof Pitch) '6/12' 表示什么意思？",
    questionEn: "What does a roof pitch of '6/12' mean?",
    options: [
      "屋顶总高度为6英尺",
      "每水平12英寸上升6英寸",
      "屋顶角度为6度",
      "屋顶面积为6x12平方英尺"
    ],
    answer: 1,
    explanation: "6/12 坡度表示每水平12英寸，屋顶上升6英寸。这是表示屋顶倾斜度的标准方式。"
  },
  {
    id: 65,
    category: "law",
    categoryName: "法律与商业",
    question: "在加州，家庭装修合同超过多少金额必须使用书面合同？",
    questionEn: "In California, home improvement contracts over what amount must be in writing?",
    options: [
      "$200",
      "$500",
      "$750",
      "$1,000"
    ],
    answer: 1,
    explanation: "加州法律规定，金额超过$500的家庭装修项目必须使用书面合同。"
  }
];
