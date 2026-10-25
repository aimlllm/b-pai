# B 行业进阶题库交付

- 日期：2026-10-25
- 负责：`trade_bank` 子代理；根 session 负责整合、UI 和上线。
- 仓库：<https://github.com/aimlllm/b-pai>
- 分支：`feat/advanced-trade-bank-20261025`
- 基线：`03584c8f82b2b221122222f32979f8f1ead83f63`
- 工作目录：`/Users/zw/Documents/my_projects/b-pai-trade-20261025`
- 文件：[`new-trade-questions.js`](../../new-trade-questions.js)

## 内容合同

60道原创中英双语练习，ID1001–1060；非官方、非回忆真题、未复制商业题库。按当前CSLB B指南五域配比：计划估算9、结构12、核心工种18、饰面12、安全9。题目有计算/情境、难度、来源用途和核验日期；题设工程参数与规范法定要求分开。

工程计算题的来源指向考纲，只证明该领域和计算能力在考试范围内。具体数量、损耗、项目要求和推导是原创题设，不宣称这些数字为加州普遍强制限值。结构/节点情境使用明确的“批准图/项目/系统要求”，不伪造未核实的规范尺寸。

## 已读取的主要来源

- [CSLB B Study Guide 13E-B (03-2026)](https://www.cslb.ca.gov/Resources/StudyGuides/BStudyGuide.pdf)：五域比例、计算及最佳答案形式。
- [Cal/OSHA §1541](https://www.dir.ca.gov/title8/1541.html)：开挖定位、出口、检查。
- [Cal/OSHA §1541.1](https://www.dir.ca.gov/title8/1541_1.html)：坍塌保护及小于5ft例外。
- [Cal/OSHA §3395](https://www.dir.ca.gov/title8/3395.html)：户外饮水、遮阴、高温程序。
- [Cal/OSHA §1532.3](https://www.dir.ca.gov/title8/1532_3.html)：硅尘Table 1与清扫。
- [Cal/OSHA §1524](https://www.dir.ca.gov/title8/1524.html)：饮水容器卫生。
- [APA Wall Bracing](https://www.apawood.org/applications-systems/fully-sheathed-wall-systems/wall-bracing/)：侧向受力系统。
- [US EPA Mold Course Chapter 2](https://www.epa.gov/mold/mold-course-chapter-2)：湿气来源、隐蔽潮湿、干燥及围护系统。
- [ENERGY STAR Seal and Insulate](https://www.energystar.gov/saveathome/seal_insulate/why-seal-and-insulate)：保温与气密的不同作用。

## 验证与边界

- Node VM加载及schema/唯一ID/选项/答案/来源/日期/配比检查。
- 独立复算所有30道计算题，确认取整和单位换算。
- 答案位置均衡：A/B/C/D各15题。
- `node --check new-trade-questions.js`、`git diff --check`。
- 未在此分支接入页面或运行浏览器；该部分归整合 session。
- 题库不是现场设计、施工说明或考试通过保证；尚未经持照承包商独立内容审核。
