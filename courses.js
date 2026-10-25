const COURSES = [
  {
    "id": "license-guide",
    "title": "第一章：执照申请与经验证明",
    "icon": "📋",
    "sections": [
      {
        "title": "1.1 先判断是否符合经验资格",
        "content": "<p>通常要求资格认证人在申请前10年内，累计4年B类相关journey-level或以上经验。包括能够独立施工的熟练工、直接监督施工的工头/主管；不要求全部以老板身份承包。助手或学徒时间不能直接按journey-level申报；兼职按实际相关工时折算。</p><p>学历和学徒训练可申请最多3年抵扣，但至少1年须为实际经验，具体课程与抵扣由CSLB评估。</p><p><a href=\"licensing.html#experience\">查看经验、学历与B/B2区别 →</a></p>"
      },
      {
        "title": "1.2 经验证明不是只找人签名",
        "content": "<p>使用Certification of Work Experience（13A-11），每个雇主或工作情境分别填写；申请人填Part 1，直接了解施工经历的合格证明人填Part 2并签字。证明人不只限雇主，但必须亲自了解所列时期的具体施工职责。工资/税表、合同、permit/inspection及实际工时等材料须可核验；owner-builder每个项目另附13A-64。</p><p><a href=\"licensing.html#evidence\">查看证明材料与职责描述样例 →</a></p>"
      },
      {
        "title": "1.3 申请、指纹和考试如何并行",
        "content": "<p>先准备实体、资格人、经验证明与申请费$450；申请accepted/posted后，按通知进行PSI预约和专用Live Scan。两条可并行；备考与材料准备可提前同步。发照前须满足考试、背景审查、石棉开卷、保证金、保险/适用豁免和费用等要求。通过考试本身不会自动发照。</p><p><a href=\"licensing.html#roadmap\">查看依赖路线和可并行任务 →</a></p>"
      },
      {
        "title": "1.4 硬期限与费用",
        "content": "<p>18个月考试窗口从CSLB接受/posted开始；退件补正、指纹packet和发证补料各有独立的90天起算事件。重考至少21天，改期通常须提前48小时。通知上具体日期优先。</p><p>初始执照费独资$200，其他实体$350；$25,000是承包商保证金额度，不等于每人必须交$25,000现金。保费、指纹服务费、保险及LLC附加要求另计，办理总时长取决于实际处理与补件。</p><p><a href=\"licensing.html#deadlines\">查看期限起点与官方依据 →</a></p>"
      }
    ]
  },

  // ============================================================
  // 第二部分：法律与商业
  // ============================================================
  {
    id: "law-business",
    title: "第二章：法律与商业 (Law & Business)",
    icon: "⚖️",
    sections: [
      {
        title: "2.1 考试概览",
        content: `
<p>法律与商业考试通常是申请条件；法定免考情形应单独审核，不能默认适用。</p>
<table>
  <tr><th>项目</th><th>详情</th></tr>
  <tr><td>题目数量</td><td>以当次考场说明为准</td></tr>
  <tr><td>考试时间</td><td>3.5 小时（210 分钟）</td></tr>
  <tr><td>通过分数</td><td>以考场公布要求为准</td></tr>
  <tr><td>考试形式</td><td>闭卷，在 PSI 考试中心电脑作答</td></tr>
</table>
<p>主要参考资料：<em>California Contractors License Law & Reference Book</em>（LexisNexis/Matthew Bender 出版）</p>
`
      },
      {
        title: "2.2 承包商执照法 / 商业组织",
        content: `
<h4>商业实体类型</h4>
<table>
  <tr><th>类型</th><th>英文</th><th>特点</th></tr>
  <tr><td>独资企业</td><td>Sole Proprietorship</td><td>设立简单，但<strong>个人承担无限责任</strong></td></tr>
  <tr><td>合伙企业</td><td>Partnership</td><td>两人或以上共同经营，合伙人共担责任</td></tr>
  <tr><td>有限责任公司</td><td>LLC</td><td>有限责任保护 + 灵活税务</td></tr>
  <tr><td>股份有限公司</td><td>Corporation</td><td>独立法人实体，最强有限责任保护</td></tr>
  <tr><td>合资企业</td><td>Joint Venture</td><td>为特定项目临时组建</td></tr>
</table>
<h4>关键角色</h4>
<ul>
  <li><strong>Qualifying Individual (QI) 资格认证人</strong>：满足执照经验和考试要求的人</li>
  <li><strong>RME (Responsible Managing Employee) 负责管理员工</strong>：作为全职员工的资格认证人</li>
  <li><strong>RMO (Responsible Managing Officer) 负责管理官员</strong>：作为公司官员的资格认证人</li>
</ul>
<h4>执照号码要求</h4>
<p>加州法律要求承包商执照号码必须出现在<strong>所有</strong>广告、名片、合同、发票、车辆标识和工地标识上。</p>
`
      },
      {
        title: "2.3 合同类型",
        content: `
<p>这是考试中<strong>最重要且最详细</strong>的部分。</p>
<h4>主要合同类型</h4>
<table>
  <tr><th>合同类型</th><th>英文</th><th>特点</th></tr>
  <tr><td>总价合同</td><td>Lump Sum</td><td>固定价格完成所有工作，需明确工作范围和图纸</td></tr>
  <tr><td>成本加成合同</td><td>Cost Plus</td><td>实际成本 + 约定利润百分比</td></tr>
  <tr><td>工时材料合同</td><td>Time & Materials</td><td>按实际工时和材料计费</td></tr>
  <tr><td>单价合同</td><td>Unit Price</td><td>按单位数量计价（如每立方码混凝土）</td></tr>
</table>
<h4>家庭装修合同要求</h4>
<ul>
  <li>金额超过 <strong>$500</strong> 的家庭装修项目必须使用书面合同</li>
  <li>合同必须包含：承包商姓名、地址、执照号码</li>
  <li>必须包含工作描述、材料说明、总价</li>
  <li>符合适用条件的住宅装修合同通常有<strong>3个工作日</strong>取消权；65岁及以上通常为<strong>5个工作日</strong>，营业场所协商、合条件service-and-repair等例外另核对。2026年起合同应含email取消渠道等AB1327信息。</li>
  <li>首付不得超过合同总价的 <strong>10%</strong> 或 <strong>$1,000</strong>（取较小值）</li>
</ul>
<h4>合同的四要素</h4>
<ol>
  <li><strong>要约 (Offer)</strong>：一方提出条件</li>
  <li><strong>承诺 (Acceptance)</strong>：另一方同意条件</li>
  <li><strong>对价 (Consideration)</strong>：双方交换的价值</li>
  <li><strong>法律约束意图 (Intention)</strong>：双方意图受法律约束</li>
</ol>
`
      },
      {
        title: "2.4 机械留置权法与保证金",
        content: `
<h4>机械留置权 (Mechanic's Lien)</h4>
<p>机械留置权是建筑行业中保护<strong>分包商、材料供应商和工人</strong>获得付款的主要法律工具。如果承包商未收到付款，可以对财产提出留置权。</p>
<h4>预先通知 (Preliminary Notice)</h4>
<p>需要发出预先通知的分包商/供应商宜在首次供工/供料后20天内通知；迟发通常仍可覆盖通知前20天及之后的供工供料，并非一律失去全部权利。主体与送达对象另按适用规则核对。</p>
<h4>保证金类型</h4>
<table>
  <tr><th>保证金类型</th><th>英文</th><th>说明</th></tr>
  <tr><td>投标保证金</td><td>Bid Bond</td><td>涉及3方（承包商、业主、担保人），保证中标后签约</td></tr>
  <tr><td>履约保证金</td><td>Performance Bond</td><td>按实际保证金文件确定担保金额和条件，不能把所有合同一律设为100%</td></tr>
  <tr><td>付款保证金</td><td>Payment Bond</td><td>保证分包商和供应商获得付款</td></tr>
  <tr><td>承包商保证金</td><td>Contractor's Bond</td><td>最低 $25,000，保护消费者</td></tr>
</table>
<h4>保留金 (Retainage)</h4>
<p>从进度款中暂扣的部分，用于保障履约；比例、可扣范围和释放期限须按项目类型、适用法律及合同判断，不能一律按5–10%或实质完工即释放。</p>
`
      },
      {
        title: "2.5 劳动法与雇佣",
        content: `
<p>此部分约占考试的 <strong>20%</strong>；合同执行21%也应重点复习。</p>
<h4>关键要点</h4>
<ul>
  <li><strong>工资记录保留</strong>：根据 FLSA，雇主必须保留基本工资记录至少<strong>3年</strong>；辅助记录（如考勤卡、工时表等工资计算依据）至少<strong>2年</strong></li>
  <li><strong>现行工资法 (Prevailing Wage)</strong>：公共项目必须按规定工资标准支付，旨在平衡本地和非本地工人的竞争</li>
  <li><strong>员工分类</strong>：正确区分员工 (Employee) 和独立承包商 (Independent Contractor)</li>
  <li><strong>加班规定</strong>：普通非豁免员工在无适用例外时，日超过8至12小时、周超过40小时或同一工作周第7日首8小时通常适用1.5倍；日超过12小时或第7日超过8小时通常适用2倍，不能重复累计同一小时。须核对适用wage order/例外。</li>
  <li><strong>工伤保险</strong>：雇用员工的承包商必须购买工伤赔偿保险 (Workers' Compensation)。无员工且符合条件的B类可提交豁免；有RME也属有员工。C-8/C-20/C-22/C-39/D-49等类别另有强制规定，不能只按独资身份判断</li>
</ul>
`
      },
      {
        title: "2.6 项目管理与估算",
        content: `
<h4>关键路径法 (Critical Path Method, CPM)</h4>
<p>CPM 计算的是项目中所有计划活动的<strong>最长路径时间</strong>，这决定了项目的最短完成时间。关键路径上的任何延误都会直接影响项目完成日期。</p>
<h4>估算类型</h4>
<table>
  <tr><th>类型</th><th>英文</th><th>精确度</th><th>说明</th></tr>
  <tr><td>概念估算</td><td>Conceptual Estimate</td><td>-30%~+50%</td><td>基于业主设计想法的初步估算</td></tr>
  <tr><td>预算估算</td><td>Budget Estimate</td><td>-15%~+30%</td><td>基于初步设计的估算</td></tr>
  <tr><td>详细估算</td><td>Detailed Estimate</td><td>-5%~+10%</td><td>基于完整图纸的精确估算</td></tr>
</table>
<h4>质量控制计划 (Quality Control Plan)</h4>
<p>总承包商实施质量控制计划 (QCP) 来确保施工质量符合合同标准。这包括检查点、测试程序和文档记录。</p>
<h4>风险管理策略</h4>
<ul>
  <li><strong>风险降低 (Risk Reduction)</strong>：如要求使用安全设备</li>
  <li><strong>风险转移 (Risk Transfer)</strong>：如购买保险或签订赔偿条款</li>
  <li><strong>风险规避 (Risk Avoidance)</strong>：不承接高风险项目</li>
  <li><strong>风险接受 (Risk Acceptance)</strong>：接受低概率风险</li>
</ul>
`
      }
    ]
  },

  // ============================================================
  // 第三部分：建筑规范
  // ============================================================
  {
    id: "building-codes",
    title: "第三章：加州建筑规范 (California Building Code)",
    icon: "🏛️",
    sections: [
      {
        title: "3.1 加州建筑标准法典 (Title 24) 概述",
        content: `
<p>加州建筑标准法典 (California Building Standards Code) 即加州法规 Title 24，是加州法律规定的建筑设计和施工<strong>最低标准</strong>。州法律要求地方政府执行这些法规。</p>
<div class="note-box">
  <strong>2025 规范周期更新：</strong>加州建筑标准法典每3年更新一次。<strong>2025 版 Title 24</strong> 已于 2026年1月1日起生效，取代 2022 版。当前CSLB 13E-B (03-2026)参考书已列2025系列。备考以该考纲列书为起点，工程施工还须核对当地适用规则。
</div>
<h4>Title 24 主要部分</h4>
<table>
  <tr><th>部分</th><th>内容</th><th>缩写</th></tr>
  <tr><td>Part 2</td><td>California Building Code 建筑规范</td><td>CBC</td></tr>
  <tr><td>Part 2.5</td><td>California Residential Code 住宅规范</td><td>CRC</td></tr>
  <tr><td>Part 3</td><td>California Electrical Code 电气规范</td><td>CEC</td></tr>
  <tr><td>Part 4</td><td>California Mechanical Code 机械规范</td><td>CMC</td></tr>
  <tr><td>Part 5</td><td>California Plumbing Code 管道规范</td><td>CPC</td></tr>
  <tr><td>Part 6</td><td>California Energy Code 能源规范</td><td>—</td></tr>
  <tr><td>Part 9</td><td>California Fire Code 消防规范</td><td>CFC</td></tr>
  <tr><td>Part 11</td><td>CALGreen 绿色建筑标准</td><td>—</td></tr>
</table>
<div class="note-box">
  <strong>CBC vs CRC：</strong>CBC 适用于所有建筑类型；CRC 仅适用于一户和两户独立住宅。三户及以上住宅应适用 IBC/CBC。
</div>
`
      },
      {
        title: "3.2 居住空间要求",
        content: `
<h4>最低层高</h4>
<ul>
  <li>先确认适用CBC/CRC、建筑用途与例外，再查对应层高条款；不能把不同规范一律概括为7英尺6英寸</li>
  <li>走廊、浴室、斜顶、梁底等可能有不同规则，不把单一数字作为所有空间的结论</li>
</ul>
<h4>自然采光</h4>
<p>居住房间的玻璃面积不得少于房间地板面积的 <strong>8%</strong>。</p>
<h4>紧急逃生口</h4>
<p>卧室必须设有紧急逃生开口 (Emergency Escape Opening)，设计人员必须考虑其位置和尺寸。</p>
<h4>建筑规划通用要求</h4>
<ul>
  <li>结构设计 (Structural Design)</li>
  <li>防火构造 (Fire-resistant Construction)</li>
  <li>采光与通风 (Light & Ventilation)</li>
  <li>卫生设施 (Sanitation)</li>
  <li>最小房间面积和层高</li>
  <li>安全玻璃 (Safety Glazing)</li>
  <li>逃生方式 (Means of Egress)</li>
  <li>自动消防喷淋系统</li>
  <li>烟雾和一氧化碳报警系统</li>
  <li>无障碍设施 (Accessibility)</li>
</ul>
`
      },
      {
        title: "3.3 防火等级与要求",
        content: `
<p><strong>防火等级 (Fire-resistance Rating)</strong> 是衡量防火材料或构造能承受标准耐火试验多长时间的指标。</p>
<h4>关键防火要求</h4>
<table>
  <tr><th>构件/情况</th><th>要求</th></tr>
  <tr><td>结构构件</td><td>防火等级不低于 Table 601 中规定的等级</td></tr>
  <tr><td>双户住宅单元分隔</td><td>墙体和楼板组件不低于<strong>1小时</strong>防火等级</td></tr>
  <tr><td>车库与住宅分隔（侧面）</td><td>车库侧至少 <strong>1/2英寸</strong>石膏板</td></tr>
  <tr><td>车库与上方居住空间分隔</td><td>至少 <strong>5/8英寸 X型</strong>石膏板或同等物</td></tr>
</table>
<h4>建筑类型分类</h4>
<p>建筑按防火等级分为多种类型 (Type I-V)，类型决定了结构构件的防火等级要求、最大允许高度和面积。</p>
<h4>野火安全区</h4>
<p>易发生野火的地区需要特殊防火措施：<strong>A级屋顶材料</strong>和不可燃外墙材料。</p>
`
      },
      {
        title: "3.4 抗震要求",
        content: `
<p>加州的地震活动使结构合规成为<strong>强制性要求</strong>。</p>
<h4>关键抗震要素</h4>
<ul>
  <li><strong>基础 (Foundation)</strong>：必须满足抗震要求</li>
  <li><strong>框架 (Framing)</strong>：需要横向支撑</li>
  <li><strong>屋顶连接 (Roof Connections)</strong>：必须与墙体可靠连接</li>
  <li><strong>剪力墙 (Shear Walls)</strong>：抵抗水平力的关键构件</li>
  <li><strong>锚固螺栓 (Anchor Bolts)</strong>：将木框架固定到基础上</li>
  <li><strong>抗震改造 (Seismic Retrofitting)</strong>：现有建筑的加固升级</li>
</ul>
<p>设计人员必须确保建筑能够承受地震，可能涉及加强墙体、级梁 (Grade Beams) 或剪力墙系统，特别是在山坡地块上。</p>
`
      }
    ]
  },

  // ============================================================
  // 第四部分：建筑施工知识
  // ============================================================
  {
    id: "construction",
    title: "第四章：建筑施工知识 (Construction Knowledge)",
    icon: "🔨",
    sections: [
      {
        title: "4.1 混凝土 (Concrete)",
        content: `
<h4>混凝土基础知识</h4>
<ul>
  <li><strong>标准混凝土28天抗压强度</strong>：通常为 <strong>3,000 psi</strong>（约20.7 MPa），住宅基础常用此标准</li>
  <li><strong>组成</strong>：水泥 + 水 + 骨料（砂石）+ 添加剂</li>
  <li><strong>水灰比 (Water/Cement Ratio)</strong> = 水重(磅) / 水泥重(磅)；水灰比越低，强度越高</li>
</ul>
<h4>坍落度试验 (Slump Test)</h4>
<p>用于测量新拌混凝土的<strong>工作性和稠度</strong>。坍落度越大，混凝土越稀。标准住宅基础混凝土的坍落度通常为4-5英寸。</p>
<h4>混凝土体积计算</h4>
<div class="formula-box">
  <strong>基本公式：</strong>宽(英尺) × 长(英尺) × 高(英尺) ÷ 27 = 立方码数
</div>
<p><strong>示例：</strong>浇筑一块 20' × 30' × 4"(0.333') 的混凝土板：</p>
<p>20 × 30 × 0.333 ÷ 27 = <strong>7.4 立方码</strong></p>
<h4>混凝土养护 (Curing)</h4>
<p>混凝土浇筑后需要保持湿润至少 <strong>7天</strong>，以达到最佳强度。28天达到设计强度。</p>
`
      },
      {
        title: "4.2 木工与框架 (Carpentry & Framing)",
        content: `
<h4>木材分类</h4>
<table>
  <tr><th>类型</th><th>英文</th><th>来源</th><th>示例</th></tr>
  <tr><td>硬木</td><td>Hardwood</td><td>落叶树 (Deciduous)</td><td>橡木、枫木、胡桃木</td></tr>
  <tr><td>软木</td><td>Softwood</td><td>针叶树 (Coniferous)</td><td>松木、杉木、冷杉</td></tr>
</table>
<h4>木材标称尺寸 vs 实际尺寸</h4>
<p>购买的木材标称尺寸 (Nominal Size) 大于实际尺寸 (Actual Size)：</p>
<table>
  <tr><th>标称尺寸</th><th>实际尺寸</th></tr>
  <tr><td>1" × 4"</td><td>3/4" × 3-1/2"</td></tr>
  <tr><td>1" × 6"</td><td>3/4" × 5-1/2"</td></tr>
  <tr><td>1" × 8"</td><td>3/4" × 7-1/4"</td></tr>
  <tr><td>2" × 4"</td><td>1-1/2" × 3-1/2"</td></tr>
  <tr><td>2" × 6"</td><td>1-1/2" × 5-1/2"</td></tr>
  <tr><td>2" × 8"</td><td>1-1/2" × 7-1/4"</td></tr>
  <tr><td>2" × 10"</td><td>1-1/2" × 9-1/4"</td></tr>
  <tr><td>2" × 12"</td><td>1-1/2" × 11-1/4"</td></tr>
</table>
<h4>标准框架间距</h4>
<p>墙体和椽子框架的标准间距为 <strong>16英寸</strong> 和 <strong>24英寸</strong> on-center (O.C.)。</p>
`
      },
      {
        title: "4.3 屋顶施工 (Roofing)",
        content: `
<h4>屋顶类型</h4>
<ul>
  <li><strong>山墙屋顶 (Gable Roof)</strong>：最常见，两个倾斜面在顶部脊线相交</li>
  <li><strong>四坡屋顶 (Hip Roof)</strong>：四面都有坡度，通常坡度相等</li>
  <li><strong>折线屋顶 (Gambrel Roof)</strong>：类似谷仓形状，两侧各有上缓下陡两个坡度</li>
  <li><strong>平屋顶 (Flat Roof)</strong>：有轻微坡度用于排水</li>
</ul>
<h4>屋顶坡度 (Roof Pitch)</h4>
<p>表示为 X/12 格式。例如 <strong>6/12</strong> 表示每水平12英寸上升6英寸。</p>
<div class="formula-box">
  <strong>椽子长度计算：</strong>使用勾股定理<br>
  椽子长度 = √(Run² + Rise²)<br>
  例如：6/12坡度，跨距24英尺 → Run=12', Rise=6'<br>
  椽子长度 = √(12² + 6²) = √(144+36) = √180 ≈ 13.4 英尺
</div>
<h4>椽子关键术语</h4>
<table>
  <tr><th>术语</th><th>英文</th><th>说明</th></tr>
  <tr><td>跨距</td><td>Span</td><td>建筑总宽度</td></tr>
  <tr><td>水平距离</td><td>Run</td><td>跨距的一半</td></tr>
  <tr><td>上升高度</td><td>Rise</td><td>从墙顶到脊线的垂直距离</td></tr>
  <tr><td>脊板</td><td>Ridge Board</td><td>对向椽子的钉接面</td></tr>
  <tr><td>鸟嘴切口</td><td>Bird's Mouth</td><td>椽子与墙顶板交汇处的切口</td></tr>
  <tr><td>椽子拉杆</td><td>Rafter Tie</td><td>抵抗墙体外推力</td></tr>
</table>
<h4>放线工具</h4>
<ul>
  <li><strong>框架角尺 (Framing Square)</strong>：使用步进法进行椽子放线的标准工具</li>
  <li><strong>速度角尺 (Speed Square)</strong>：用于快速标记角度</li>
  <li><strong>3-4-5 方法</strong>：基于勾股定理，确保两条线成精确的 <strong>90度直角</strong></li>
</ul>
`
      },
      {
        title: "4.4 施工数学 (Construction Math)",
        content: `
<p>施工数学是考试的重要组成部分。准确的估算和投标依赖于基本数学原理。</p>
<h4>必须掌握的7个数学概念</h4>
<div class="formula-box">
  <strong>1. 面积计算 (Area)</strong><br>
  矩形：A = 长 × 宽<br>
  三角形：A = 底 × 高 ÷ 2<br>
  圆形：A = π × r²<br>
  梯形：A = (上底 + 下底) × 高 ÷ 2
</div>
<div class="formula-box">
  <strong>2. 体积计算 (Volume)</strong><br>
  矩形体：V = 长 × 宽 × 高<br>
  圆柱体：V = π × r² × 高<br>
  转换：立方英尺 ÷ 27 = 立方码
</div>
<div class="formula-box">
  <strong>3. 勾股定理 (Pythagorean Theorem)</strong><br>
  a² + b² = c²<br>
  用于检查布局的直角性和椽子长度计算
</div>
<div class="formula-box">
  <strong>4. 坡度计算 (Slope)</strong><br>
  坡度 = 上升(Rise) / 水平距离(Run)<br>
  排水坡度通常为 1/4" per foot
</div>
<div class="formula-box">
  <strong>5. 比例尺转换 (Scale Conversion)</strong><br>
  图纸比例 1/4" = 1'-0" 表示图上1/4英寸 = 实际1英尺<br>
  图上测量值 × 比例系数 = 实际尺寸
</div>
<div class="formula-box">
  <strong>6. 百分比与比率</strong><br>
  保证金计算：项目成本 × 保证金比例 = 保证金费用<br>
  示例：$93,500 × 6% = $5,610
</div>
<div class="formula-box">
  <strong>7. 材料估算</strong><br>
  板英尺 (Board Feet)：厚(英寸) × 宽(英寸) × 长(英尺) ÷ 12<br>
  on-center 间距计算：总长度 ÷ 间距 + 1 = 数量
</div>
<div class="note-box">
  <strong>考试技巧：</strong>计算后进行快速心算验证。如果计算出一个小浴室需要500立方码混凝土，这个数字明显不合理，应该重新检查。
</div>
`
      },
      {
        title: "4.5 蓝图阅读 (Blueprint Reading)",
        content: `
<h4>施工图纸类型</h4>
<table>
  <tr><th>图纸类型</th><th>英文</th><th>内容</th></tr>
  <tr><td>平面图</td><td>Floor Plan</td><td>建筑的俯视图，显示房间布局</td></tr>
  <tr><td>立面图</td><td>Elevation</td><td>建筑外观的侧视图</td></tr>
  <tr><td>剖面图</td><td>Section</td><td>建筑被切开后的内部视图</td></tr>
  <tr><td>详图</td><td>Detail Drawing</td><td>特定构造的放大图</td></tr>
  <tr><td>现场图</td><td>Site Plan</td><td>显示建筑在地块上的位置</td></tr>
</table>
<h4>明细表 (Schedules)</h4>
<p>明细表以表格形式列出特定构件的详细信息：</p>
<ul>
  <li><strong>窗户明细表 (Window Schedule)</strong>：所有窗户的尺寸、类型和规格</li>
  <li><strong>门明细表 (Door Schedule)</strong>：所有门的尺寸、类型和五金件</li>
  <li><strong>房间装修明细表 (Room Finish Schedule)</strong>：每个房间的地板、墙面和天花板材料</li>
</ul>
<h4>图纸符号</h4>
<p>常见建筑图纸符号包括：电气插座、照明灯具、开关、管道设备、暖通设备等。</p>
`
      }
    ]
  },

  // ============================================================
  // 第五部分：电气工程
  // ============================================================
  {
    id: "electrical",
    title: "第五章：电气工程 (Electrical)",
    icon: "⚡",
    sections: [
      {
        title: "5.1 NEC 基本概念",
        content: `
<p>加州电气规范基于 National Electrical Code (NEC)，加上加州特有修订。考试参考 2025 California Electrical Code, Title 24（基于 NEC 2023，自2026年1月1日起生效）。</p>
<h4>NEC 结构</h4>
<ul>
  <li><strong>第1-4章</strong>：通用安装要求、布线方法和材料</li>
  <li><strong>第5-7章</strong>：特殊场所（如危险区域、医疗设施）</li>
  <li><strong>第8章</strong>：通讯系统</li>
  <li><strong>第9章</strong>：导体属性、管道和电压降表格</li>
</ul>
<h4>考试高频条款</h4>
<table>
  <tr><th>NEC 条款</th><th>主题</th></tr>
  <tr><td>Article 210</td><td>住宅单元布线 (Branch Circuits)</td></tr>
  <tr><td>Article 240</td><td>过流保护 (Overcurrent Protection)</td></tr>
  <tr><td>Article 250</td><td>接地与搭接 (Grounding & Bonding)</td></tr>
  <tr><td>Article 430</td><td>电动机计算 (Motor Calculations)</td></tr>
</table>
`
      },
      {
        title: "5.2 接地系统 (Grounding)",
        content: `
<h4>接地 vs 搭接</h4>
<table>
  <tr><th>概念</th><th>英文</th><th>目的</th></tr>
  <tr><td>接地</td><td>Grounding</td><td>将电气系统连接到大地，稳定电压并防止雷击</td></tr>
  <tr><td>搭接</td><td>Bonding</td><td>连接所有金属非载流部件，确保故障电流路径畅通，使断路器快速跳闸</td></tr>
</table>
<div class="note-box">
  <strong>重要规则：</strong>中性线和接地线只能在系统中的<strong>一个点</strong>连接——在主断路器处（通过 Main Bonding Jumper）。
</div>
<h4>接地电极导体 (GEC) 选型</h4>
<p>使用 NEC Table 250.66，根据<strong>最大未接地服务入口导体</strong>的尺寸确定。</p>
<h4>设备接地导体 (EGC) 选型</h4>
<p>使用 NEC Table 250.122，根据<strong>过流保护装置 (OCPD) 的额定值</strong>确定，而不是电路导体的载流量。</p>
<ul>
  <li>20A 断路器 → 最小 EGC 尺寸 12 AWG 铜</li>
  <li>60A 断路器 → 最小 EGC 尺寸 #10 AWG 铜</li>
</ul>
<div class="note-box">
  <strong>常见错误：</strong>根据导体尺寸而非断路器额定值来选择 EGC 尺寸。务必使用断路器或保险丝额定值作为参考。
</div>
<h4>铝质接地电极导体</h4>
<p>在室外使用时，终端必须距地面至少 <strong>18英寸</strong>，以防腐蚀。</p>
`
      },
      {
        title: "5.3 导线与断路器",
        content: `
<h4>导线温度等级</h4>
<table>
  <tr><th>标识</th><th>全称</th><th>温度等级</th></tr>
  <tr><td>THHN</td><td>Thermoplastic High Heat-resistant Nylon</td><td><strong>90°C</strong></td></tr>
  <tr><td>THWN</td><td>Thermoplastic Heat & Water-resistant Nylon</td><td>75°C</td></tr>
  <tr><td>TW</td><td>Thermoplastic Wet</td><td>60°C</td></tr>
</table>
<h4>NEC 110.14(C) 终端温度规则</h4>
<ul>
  <li>100A 及以下电路：使用 <strong>60°C</strong> 列选导线载流量</li>
  <li>100A 以上电路：使用 <strong>75°C</strong> 列选导线载流量</li>
  <li>即使使用 90°C 导线，如断路器只额定 75°C，必须使用 75°C 列</li>
</ul>
<h4>断路器标准额定值</h4>
<p>NEC 标准断路器额定值序列：<strong>15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200...</strong></p>
<p>注意：<strong>75安培不是</strong>标准额定值。</p>
<h4>过流保护装置计算示例</h4>
<div class="formula-box">
  4,500W 热水器，240V 单相：<br>
  电流 = 4,500W ÷ 240V = 18.75A<br>
  按 125% 计算：18.75 × 1.25 = 23.4A<br>
  这是指定系数下的<strong>载流量计算值</strong>，不是最大断路器结论；不能从23.4A直接断言“下一档是30A”（序列还包含25A）。选型还须核对设备和导线。
</div>
<h4>爱迪生基座保险丝 (Edison Base Fuses)</h4>
<p>在所有新建工程中<strong>被禁止使用</strong>，因为不同额定值的保险丝可以互换，存在安全隐患。仅允许在现有住宅安装中替换使用。</p>
`
      },
      {
        title: "5.4 关键 NEC 表格",
        content: `
<p>考试中需要熟悉的关键 NEC 表格：</p>
<table>
  <tr><th>表格编号</th><th>用途</th></tr>
  <tr><td>Table 250.66</td><td>接地电极导体 (GEC) 选型</td></tr>
  <tr><td>Table 250.102(C)</td><td>供电侧搭接跳线选型</td></tr>
  <tr><td>Table 250.122</td><td>设备接地导体 (EGC) 选型（按 OCPD 额定值）</td></tr>
  <tr><td>Table 310.16</td><td>导线载流量（主要选型表，基于30°C环境温度）</td></tr>
  <tr><td>Table 310.15(B)</td><td>环境温度修正系数</td></tr>
  <tr><td>Table 310.15(C)(1)</td><td>导线填充调整/降额系数</td></tr>
</table>
<h4>降额规则 (Derating)</h4>
<ul>
  <li>环境温度超过30°C时，需应用温度修正系数</li>
  <li>单一管道中超过3根载流导线时，需进行导线降额计算</li>
</ul>
`
      },
      {
        title: "5.5 住宅电气服务要求",
        content: `
<h4>入户线净空 (Service Drop Clearance)</h4>
<p>住宅电气服务入户线距地面最小净空为 <strong>10英尺</strong>。</p>
<h4>电动机控制器</h4>
<p>当电动机控制器同时作为断路装置时，必须能够断开所有<strong>非接地导体（火线）</strong>。</p>
<h4>危险区域电气安装</h4>
<p>Class II, Division 1 场所（存在可燃粉尘）：管道与接线盒的连接方式应为<strong>螺纹凸台 (Threaded Bosses)</strong>。</p>
<h4>照明设备安装</h4>
<p>嵌入式面板灯具安装在吊顶中时，应使用<strong>螺栓、螺钉、铆钉或夹具</strong>连接到天花板框架构件上。</p>
`
      }
    ]
  },

  // ============================================================
  // 第六部分：管道与暖通
  // ============================================================
  {
    id: "plumbing-hvac",
    title: "第六章：管道与暖通 (Plumbing & HVAC)",
    icon: "🔧",
    sections: [
      {
        title: "6.1 DWV 排水系统 (Drain, Waste & Vent)",
        content: `
<p>DWV 系统包含三个功能不同但相互依存的子系统：</p>
<table>
  <tr><th>子系统</th><th>英文</th><th>功能</th></tr>
  <tr><td>排水管</td><td>Drain</td><td>输送液态废水</td></tr>
  <tr><td>废水管</td><td>Waste</td><td>输送固体和液态废物到建筑排水管</td></tr>
  <tr><td>通气管</td><td>Vent</td><td>平衡气压以维持存水弯水封，排除下水道气体</td></tr>
</table>
<h4>管道类型区分</h4>
<ul>
  <li><strong>土管 (Soil Pipe)</strong>：输送来自马桶或小便池的废物</li>
  <li><strong>废水管 (Waste Pipe)</strong>：输送非人体废物（其他设备排水）</li>
  <li><strong>湿通气管 (Wet Vent)</strong>：同时作为一个设备的排水管和另一个设备的通气管</li>
</ul>
<h4>管道坡度要求</h4>
<table>
  <tr><th>管径</th><th>最小坡度</th></tr>
  <tr><td>3英寸及以下</td><td><strong>1/4英寸/英尺</strong></td></tr>
  <tr><td>4英寸及以上</td><td><strong>1/8英寸/英尺</strong></td></tr>
</table>
<div class="note-box">
  <strong>注意：</strong>坡度不足会导致固体沉积；坡度过大（小管径超过1/2英寸/英尺）会使液体流速过快，固体跟不上，同样导致沉积问题。
</div>
<h4>管道支撑间距</h4>
<p>水平安装的塑料 DWV 管道支撑间距最大为 <strong>48英寸</strong>（4英尺）。</p>
`
      },
      {
        title: "6.2 存水弯与通气 (Traps & Venting)",
        content: `
<h4>存水弯 (Trap)</h4>
<p>每个连接到 DWV 系统的设备必须设有存水弯，通常为 P 型弯 (P-trap)，维持 <strong>2至4英寸</strong>的水封。</p>
<h4>通气的三个目的</h4>
<ol>
  <li>防止水封被虹吸破坏 (Siphonage)</li>
  <li>将有害的下水道气体排出室外</li>
  <li>帮助排水系统顺畅运行</li>
</ol>
<h4>通气管终端要求</h4>
<ul>
  <li>通气管必须高出屋顶面至少 <strong>6英寸</strong></li>
  <li>距可开启窗户、门或进气口水平距离至少 <strong>10英尺</strong>（当通气管终端低于这些开口顶部2英尺以内时）</li>
</ul>
<h4>空气导入阀 (AAV)</h4>
<p>在特定情况下允许使用，但<strong>不得</strong>作为建筑排水系统的唯一通气方式。</p>
<h4>清通间隙 (Rodding Clearance)</h4>
<p>3英寸排水管需要至少 <strong>18英寸</strong> 的清通间隙。4英寸排水管需在管道末端安装清扫口。</p>
`
      },
      {
        title: "6.3 给水系统与水暖设备",
        content: `
<h4>水压要求</h4>
<p>住宅给水系统最大允许水压：<strong>80 psi</strong>。超过此值需安装减压阀。</p>
<h4>阀门类型</h4>
<table>
  <tr><th>阀门类型</th><th>英文</th><th>应用</th></tr>
  <tr><td>全通径阀</td><td>Full Port Valve</td><td>热水器上必须安装，确保充分水流</td></tr>
  <tr><td>止回阀</td><td>Check Valve</td><td>防止水流倒流</td></tr>
  <tr><td>截止阀</td><td>Gate Valve</td><td>完全开启或关闭水流</td></tr>
  <tr><td>球阀</td><td>Ball Valve</td><td>快速开关，用于紧急关闭</td></tr>
</table>
<h4>管道连接</h4>
<p>连接<strong>不同材质</strong>管道时，必须使用<strong>机械接头 (Mechanical Joint)</strong>。焊接方法需要相同或兼容的材料。</p>
<h4>无障碍设施要求</h4>
<p><strong>十字把手 (Crossbar handles)</strong> 不允许用于无障碍设施的水龙头，因为需要握力和旋转动作。应使用刀片手柄或单手柄。</p>
<h4>铜管等级</h4>
<table>
  <tr><th>标记颜色</th><th>等级</th><th>壁厚</th><th>用途</th></tr>
  <tr><td>绿色</td><td>K</td><td>最厚</td><td>医用气体系统、地下埋管</td></tr>
  <tr><td>蓝色</td><td>L</td><td>中等</td><td>常规给水管</td></tr>
  <tr><td>红色</td><td>M</td><td>最薄</td><td>低压排水管</td></tr>
</table>
`
      },
      {
        title: "6.4 暖通空调 (HVAC) 基础",
        content: `
<h4>热量传递三种方式</h4>
<table>
  <tr><th>方式</th><th>英文</th><th>说明</th><th>示例</th></tr>
  <tr><td>传导</td><td>Conduction</td><td>通过物体直接接触传热</td><td>触摸热锅</td></tr>
  <tr><td>对流</td><td>Convection</td><td>通过流体（液体或气体）运动传热</td><td>暖气片加热空气</td></tr>
  <tr><td>辐射</td><td>Radiation</td><td>通过电磁波传热，不需要介质</td><td>太阳光照射</td></tr>
</table>
<h4>负载类型</h4>
<table>
  <tr><th>负载类型</th><th>英文</th><th>特征</th><th>示例</th></tr>
  <tr><td>感性负载</td><td>Inductive Load</td><td>电流滞后电压</td><td>变压器、电动机</td></tr>
  <tr><td>容性负载</td><td>Capacitive Load</td><td>电流超前电压</td><td>电容器</td></tr>
  <tr><td>阻性负载</td><td>Resistive Load</td><td>电流与电压同相</td><td>电加热元件</td></tr>
</table>
<h4>制冷系统故障诊断</h4>
<ul>
  <li><strong>过滤器-干燥器两端温差</strong>：表示<strong>堵塞</strong>，需要更换</li>
  <li><strong>增加水冷冷凝器水流量</strong>：会<strong>降低</strong>运行排气压力</li>
</ul>
`
      }
    ]
  },

  // ============================================================
  // 第七部分：安全
  // ============================================================
  {
    id: "safety",
    title: "第七章：安全 (Safety / Cal-OSHA)",
    icon: "🦺",
    sections: [
      {
        title: "7.1 Cal/OSHA 法规框架",
        content: `
<p>建筑雇主必须遵守加州法规 Title 8, Chapter 4 中的 Cal/OSHA 法规，包括：</p>
<ul>
  <li><strong>Subchapter 4</strong>：建筑安全法规 (Construction Safety Orders)</li>
  <li><strong>Subchapter 5</strong>：电气安全法规 (Electrical Safety Orders)</li>
  <li><strong>Subchapter 7</strong>：一般行业安全法规 (General Industry Safety Orders)</li>
</ul>
<div class="note-box">
  <strong>Cal/OSHA vs 联邦 OSHA：</strong>加州通过 Cal/OSHA 运行经 OSHA 批准的州计划，必须至少与联邦法律同样严格——实际上 Cal/OSHA 通常<strong>超过</strong>联邦要求。
</div>
<h4>安全在考试中的比重</h4>
<p>03-2026官方考纲：B安全约15%，LAW安全约14%；不根据假定总题数反推题量。</p>
`
      },
      {
        title: "7.2 坠落防护 (Fall Protection)",
        content: `
<h4>触发高度</h4>
<table>
  <tr><th>情况</th><th>触发高度</th></tr>
  <tr><td>加州一般个人防坠条款§1670(a)</td><td>超过7.5ft且缺乏适用保护；具体作业有独立条款，不能套用统一6ft。</td></tr>
  <tr><td>钢结构连接工作</td><td>核对§1710(m)：超过两层或30ft取较低者有防坠要求，15–30ft也有装备配置/穿戴等规定，并非以下免保护。</td></tr>
  <tr><td>平台、开口、边缘</td><td>分别核对护栏、开口和具体施工条款，不能由一张统一高度表替代。</td></tr>
  <tr><td>突出钢筋刺穿风险</td><td>按§1712防止跌落刺穿，不可套用统一6ft安全豁免。</td></tr>
</table>
<h4>Cal/OSHA Section 1670</h4>
<p>该条规定特定情形的个人防坠系统；开口、沟槽周边、通行面及具体工种还须分别查适用条款。<a href="https://www.dir.ca.gov/title8/1670.html" target="_blank" rel="noopener">§1670原文</a>。</p>
<h4>防护系统优先级</h4>
<ol>
  <li><strong>被动系统优先</strong>：脚手架、护栏 (Guardrails)、安全网 (Safety Nets)</li>
  <li><strong>个人防坠系统</strong>：当被动系统无法实施时使用</li>
</ol>
`
      },
      {
        title: "7.3 沟槽开挖安全 (Trenching & Excavation)",
        content: `
<h4>防护系统要求</h4>
<p>每名暴露于坍塌风险的员工均需保护；例外为完全稳定岩石，或不足5ft且由competent person判定无坍塌迹象。因此非稳定岩石达到5ft需防护，浅于5ft也非自动豁免。三种防护方式：</p>
<table>
  <tr><th>方式</th><th>英文</th><th>说明</th></tr>
  <tr><td>支撑</td><td>Shoring</td><td>使用支撑结构防止土壁坍塌</td></tr>
  <tr><td>倾斜</td><td>Sloping</td><td>将沟壁按安全角度放坡</td></tr>
  <tr><td>屏蔽</td><td>Shielding</td><td>使用沟槽箱保护工人</td></tr>
</table>
<h4>其他要求</h4>
<ul>
  <li>开挖前必须联系地下设施警报系统 (Underground Service Alert)，至少提前 <strong>2个工作日</strong></li>
  <li>必须每日进行<strong>沟槽检查</strong>，防止坍塌</li>
  <li>土壤分类决定防护系统要求（参见 Cal/OSHA CSO § 1541.1）</li>
  <li>必须由<strong>胜任人员 (Competent Person)</strong> 监督</li>
</ul>
`
      },
      {
        title: "7.4 脚手架与梯子安全",
        content: `
<h4>脚手架安全 (Scaffolding)</h4>
<ul>
  <li>必须由<strong>合格人员</strong>设计和搭建</li>
  <li>必须定期检查</li>
  <li>必须按制造商指南搭建</li>
  <li>工人必须接受脚手架安全培训</li>
</ul>
<h4>梯子安全</h4>
<ul>
  <li>梯子应以 <strong>75度角（4:1比例）</strong>放置</li>
  <li>梯子底部与墙的距离 = 梯子工作长度的 1/4</li>
  <li>梯子应超出上方着陆面至少 <strong>3英尺</strong></li>
  <li>使用梯子时保持三点接触</li>
</ul>
`
      },
      {
        title: "7.5 危害通讯与工具安全",
        content: `
<h4>危害通讯标准 (Hazard Communication Standard / HazCom)</h4>
<p>要求雇主：</p>
<ul>
  <li>告知员工工作场所化学品的危害</li>
  <li>提供<strong>安全数据表 (SDS, Safety Data Sheets)</strong></li>
  <li>对容器贴上正确的<strong>GHS标签</strong></li>
  <li>提供员工培训</li>
</ul>
<h4>废物分类</h4>
<p>加州废漆应按规定送至适用PaintCare/危险废物接收点，不能把乳胶漆晒干后随意扔垃圾。须核对品类、数量及商业废物接收资格。<a href="https://calrecycle.ca.gov/Paint/" target="_blank" rel="noopener">CalRecycle说明</a>。</p>
<h4>电动工具安全</h4>
<ul>
  <li><strong>台锯 (Table Saw)</strong>：按设备要求使用护罩、防反弹装置及推料工具；不能依赖统一4英寸距离规则</li>
  <li><strong>气动钉枪</strong>：气压不得超过<strong>制造商规定的最大值</strong></li>
  <li><strong>凿子 (Chisel)</strong>：向远离身体方向凿、使用锋利凿子、固定工件</li>
</ul>
<h4>工地安全管理</h4>
<ul>
  <li><strong>安全施工规范 (Code of Safe Practices)</strong>：雇主必须制定书面安全规范</li>
  <li><strong>安全会议</strong>：主管至少每 <strong>10个工作日</strong> 进行一次"工具箱"安全会议</li>
  <li><strong>IIPP</strong>：伤害与疾病预防计划，所有加州雇主必须制定</li>
  <li><strong>热病预防</strong>：提供阴凉处、充足饮水和适应期</li>
  <li><strong>胜任人员 (Competent Person)</strong>：能识别现有和可预见危害、有权采取纠正措施的人</li>
</ul>
`
      }
    ]
  },

  // ============================================================
  // 第八部分：考试策略
  // ============================================================
  {
    id: "exam-strategy",
    title: "第八章：考试策略与备考建议",
    icon: "🎯",
    sections: [
      {
        title: "8.1 B 牌行业考试结构",
        content: `
<table>
  <tr><th>项目</th><th>行业考试 (Trade)</th><th>法律与商业 (Law & Business)</th></tr>
  <tr><td>题目数量</td><td colspan="2">以考场说明为准，不在本站承诺固定题数</td></tr>
  <tr><td>考试时间</td><td>210 分钟 (3.5小时)</td><td>210 分钟 (3.5小时)</td></tr>
  <tr><td>通过分数</td><td>以考场公布要求为准</td><td>以考场公布要求为准</td></tr>
  <tr><td>考试形式</td><td>闭卷，电脑答题</td><td>闭卷，电脑答题</td></tr>
  <tr><td>时间管理</td><td colspan="2">按当次题数分配3.5小时并预留检查时间</td></tr>
</table>
<p>两项考试均为单选题，每题4个选项。部分题目需要数学计算。考试在 PSI 考试中心进行。行业考试可能附有<strong>蓝图和图纸</strong>参考。</p>
`
      },
      {
        title: "8.2 考试科目权重",
        content: `
<h4>B 牌行业考试权重</h4><table><tr><th>领域</th><th>近似权重</th></tr><tr><td>规划与估算</td><td>15%</td></tr><tr><td>框架与结构</td><td>20%</td></tr><tr><td>核心工种</td><td>30%</td></tr><tr><td>装修工种</td><td>20%</td></tr><tr><td>安全</td><td>15%</td></tr></table><h4>法律与商业考试权重</h4><table><tr><th>领域</th><th>近似权重</th></tr><tr><td>组织与执照</td><td>13%</td></tr><tr><td>商业财务</td><td>15%</td></tr><tr><td>雇佣</td><td>20%</td></tr><tr><td>保险与留置权</td><td>12%</td></tr><tr><td>合同要求与执行</td><td>21%</td></tr><tr><td>公共工程</td><td>5%</td></tr><tr><td>安全</td><td>14%</td></tr></table><p>依据CSLB 13E-B及13E-LAW (03-2026)。不根据假定题数反推各类题量。</p>
`
      },
      {
        title: "8.3 答题策略",
        content: `
<h4>考前准备</h4>
<ul>
  <li>根据科目权重<strong>按比例分配复习时间</strong></li>
  <li>在薄弱科目上投入更多时间</li>
  <li>使用定时练习模拟考试条件</li>
  <li>建议自定高于日常练习水平的掌握目标，并能解释错项；练习分数不等于官方及格线</li>
</ul>
<h4>答题技巧</h4>
<ul>
  <li><strong>先易后难</strong>：先做有把握的题目，标记不确定的题目回头检查</li>
  <li><strong>选择"最佳答案"</strong>：题目要求选最佳答案，不是"正确"答案——有些选项可能部分正确，选最完整的</li>
  <li><strong>注意关键词</strong>：最小 (minimum)、最大 (maximum)、至少 (at least)、不超过 (not to exceed)、不包括 (except) 等</li>
  <li><strong>不留空白</strong>：猜题不扣分，全部作答</li>
  <li><strong>排除法</strong>：先排除明显错误的选项，提高猜对概率</li>
  <li><strong>审题仔细</strong>：读懂每个词，理解题目问的是什么</li>
</ul>
<h4>时间管理</h4>
<ul>
  <li>两科均按<strong>3.5小时</strong>及当次实际题数安排时间</li>
  <li>不要在单题上花费过多时间——标记后继续</li>
  <li>预留 <strong>15-20分钟</strong> 回顾标记的题目</li>
</ul>
<div class="note-box">
  <strong>重要提醒：</strong>不要死记硬背练习题答案——理解题目背后的<strong>原理</strong>，因为正式考试的措辞可能不同。学习概念而非记忆题目。
</div>
`
      },
      {
        title: "8.4 未通过怎么办",
        content: `
<ul>
  <li>CSLB 要求两次考试之间至少等待 <strong>3周</strong></li>
  <li>每次重考需要支付额外费用</li>
  <li>利用等待时间复习失分最多的领域</li>
  <li>考虑报名正式的备考课程</li>
  <li>在本次18个月申请窗口内可安排多次重考，仍须遵守至少21天间隔与付费要求</li>
</ul>
`
      }
    ]
  }
];
