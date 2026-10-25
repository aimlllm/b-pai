# 技术合同

原有 HTML/CSS/JavaScript 静态架构继续使用，无新增服务、账户或依赖。

- `questions.js`：65 道旧题；修正已发现错误，其余不授予统一“已核验”标记。
- `new-trade-questions.js`、`new-law-questions.js`：原创新题；ID 分别从 1001、2001 开始。字段包括 exam、section、difficulty、kind、sources、verifiedOn、original，以及原有题干/选项/答案/解析。
- `app.js`：合并题池，新题载入时随机选项并同步正确索引，同一次访问翻题保持排列；按资料批次/考试/领域/难度/题型/旧科目求交集。每次筛选或重开明确清空本轮答案。单题仅首次计分；错题 ID 在浏览器本地保存，失败不阻塞学习。
- `licensing.html`：静态申请路线、证据清单和期限，无个人资料收集。`licensing.css`适配手机与打印。
- `index.html`：官方考纲、流程、来源和用于检索的结构化数据使用同一口径。`courses.js` 同步相关考试与申请说明。
- 外链使用 HTTPS；题库为仓库内可信内容，用户不向页面注入 HTML，无个人身份信息收集。安全与法规题遵循加州范围。

测试：Node 内建断言检查 160 个唯一 ID、95 道新题 schema 与 B 领域数量；浏览器检查交叉筛选、答题、导航、错题与空结果以及 390px 布局。编译/结构检查不等同官方题库认证或通过保证。

新功能 UI 与数据状态以 [界面合同](../ui/overview.md) 为准。
