// Disable copy, paste, cut, and context menu
['copy', 'paste', 'cut', 'contextmenu'].forEach(evt => {
  document.addEventListener(evt, e => e.preventDefault());
});
document.addEventListener('selectstart', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && ['c','v','x','a','u','s'].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const TEXT = {
    empty: '当前筛选没有题目，请调整考试、领域或题型。',
    noMistakes: '当前筛选范围暂无错题。',
    correct: '回答正确', wrong: '回答错误', answer: '正确答案',
    source: '依据与核验', legacy: '旧版基础题 · 未逐题核验版本',
    original: '原创练习 · 非官方真题', intermediate: '进阶', advanced: '挑战',
    scenario: '情境判断', calculation: '计算应用',
    allSections: '全部领域', reset: '筛选会重新开始本轮练习。',
    review: '错题再练', normal: '按筛选练习',
    returnBank: '返回筛选题库',
  };
  const SECTION_NAMES = {
    planning: 'B · 规划与估算', framing: 'B · 框架与结构', core: 'B · 核心工种',
    finish: 'B · 装修工种', safety: '安全', business: 'LAW · 组织与执照',
    finance: 'LAW · 财务', employment: 'LAW · 雇佣', insurance: 'LAW · 保险与留置权',
    contracts: 'LAW · 合同执行', public: 'LAW · 公共工程',
  };
  const bank = [
    ...ADVANCED_TRADE_QUESTIONS, ...ADVANCED_LAW_QUESTIONS,
    ...QUESTIONS.map(q => ({ ...q, exam: q.category === 'law' ? 'LAW' : 'B', legacy: true })),
  ];
  let currentCategory = 'all';
  let filteredQuestions = [];
  let currentIndex = 0;
  let answers = {};
  let correctCount = 0;
  let wrongCount = 0;
  let reviewing = false;
  let mistakes = new Set();
  try {
    const stored = JSON.parse(localStorage.getItem('bpai-mistakes-v1') || '[]');
    if (Array.isArray(stored)) mistakes = new Set(stored.filter(id => bank.some(q => q.id === id)));
  } catch { /* Storage is optional; practice still works. */ }

  const quizArea = document.getElementById('quizArea');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const questionCounter = document.getElementById('questionCounter');
  const progressEl = document.getElementById('progress');
  const correctEl = document.getElementById('correct');
  const wrongEl = document.getElementById('wrong');
  const accuracyEl = document.getElementById('accuracy');
  const progressFill = document.getElementById('progressFill');
  const bankFilter = document.getElementById('bankFilter');
  const examFilter = document.getElementById('examFilter');
  const sectionFilter = document.getElementById('sectionFilter');
  const difficultyFilter = document.getElementById('difficultyFilter');
  const kindFilter = document.getElementById('kindFilter');
  const filterStatus = document.getElementById('filterStatus');
  const reviewBtn = document.getElementById('reviewBtn');
  document.querySelectorAll('[data-new-count]').forEach(el => el.textContent = bank.filter(q => !q.legacy).length);
  document.querySelectorAll('[data-total-count]').forEach(el => el.textContent = bank.length);

  [bankFilter, examFilter, sectionFilter, difficultyFilter, kindFilter].forEach(control => {
    control.addEventListener('change', () => {
      if (control === bankFilter || control === examFilter) {
        currentCategory = 'all';
        document.querySelectorAll('.filter-btn').forEach(button => {
          const active = button.dataset.category === 'all';
          button.classList.toggle('active', active);
          button.setAttribute('aria-pressed', String(active));
        });
      }
      if (control === bankFilter) {
        sectionFilter.value = 'all';
        difficultyFilter.value = 'all';
        kindFilter.value = 'all';
        [sectionFilter, difficultyFilter, kindFilter].forEach(filter => filter.disabled = bankFilter.value === 'legacy');
      }
      if (control === examFilter) {
        sectionFilter.value = 'all';
        [...sectionFilter.options].forEach(option => {
          option.hidden = !!option.dataset.exam && examFilter.value !== 'all' && option.dataset.exam !== examFilter.value;
        });
      }
      reviewing = false;
      resetQuiz();
    });
  });
  reviewBtn.addEventListener('click', () => {
    reviewing = !reviewing;
    resetQuiz();
  });

  // Category filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.filter-btn').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
      currentCategory = btn.dataset.category;
      reviewing = false;
      resetQuiz();
    });
  });

  // Shuffle button
  document.getElementById('shuffleBtn').addEventListener('click', () => {
    shuffleArray(filteredQuestions);
    currentIndex = 0;
    answers = {};
    correctCount = 0;
    wrongCount = 0;
    renderQuestion();
    updateStats();
  });

  // Reset button
  document.getElementById('resetBtn').addEventListener('click', () => { reviewing = false; resetQuiz(); });

  // Navigation
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) { currentIndex--; renderQuestion(); }
  });
  nextBtn.addEventListener('click', () => {
    if (currentIndex < filteredQuestions.length - 1) { currentIndex++; renderQuestion(); }
  });

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  function resetQuiz() {
    filteredQuestions = bank.filter(q =>
      (bankFilter.value === 'all' || (bankFilter.value === 'updated' ? !q.legacy : q.legacy)) &&
      (examFilter.value === 'all' || q.exam === examFilter.value) &&
      (currentCategory === 'all' || q.category === currentCategory) &&
      (sectionFilter.value === 'all' || q.section === sectionFilter.value) &&
      (difficultyFilter.value === 'all' || q.difficulty === difficultyFilter.value) &&
      (kindFilter.value === 'all' || q.kind === kindFilter.value) &&
      (!reviewing || mistakes.has(q.id))
    );
    currentIndex = 0;
    answers = {};
    correctCount = 0;
    wrongCount = 0;
    filterStatus.textContent = `${reviewing ? TEXT.review : TEXT.normal}：${filteredQuestions.length} 题。${TEXT.reset}`;
    reviewBtn.textContent = reviewing ? TEXT.returnBank : `${TEXT.review} (${mistakes.size})`;
    reviewBtn.setAttribute('aria-pressed', String(reviewing));
    renderQuestion();
    updateStats();
  }

  function renderQuestion() {
    if (filteredQuestions.length === 0) {
      quizArea.innerHTML = `<div class="question-card empty-state"><p>${reviewing ? TEXT.noMistakes : TEXT.empty}</p></div>`;
      questionCounter.textContent = '0 / 0';
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      return;
    }

    const q = filteredQuestions[currentIndex];
    const answered = answers[q.id] !== undefined;
    const userAnswer = answers[q.id];
    const letters = ['A', 'B', 'C', 'D'];

    let optionsHtml = q.options.map((opt, i) => {
      let cls = 'option-btn';
      if (answered) {
        cls += ' disabled';
        if (i === q.answer) cls += ' correct';
        else if (i === userAnswer && userAnswer !== q.answer) cls += ' incorrect';
      }
      return `<button class="${cls}" data-index="${i}" ${answered ? 'disabled' : ''}>
        <span class="option-letter">${letters[i]}</span>
        <span>${opt}</span>
      </button>`;
    }).join('');

    let answerHtml = '';
    if (answered) {
      const isCorrect = userAnswer === q.answer;
      const sources = q.sources?.length ? `<div class="question-sources"><strong>${TEXT.source}</strong><ul>${q.sources.map(source =>
        `<li><a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.title}</a>${source.note ? ` — ${source.note}` : ''}</li>`
      ).join('')}</ul><p>核验：${q.verifiedOn} · 题目为本站原创，引用资料不表示机构审定。</p></div>` : `<p class="legacy-note">${TEXT.legacy}；涉及规范数字请对照最新官方资料。</p>`;
      answerHtml = `<div class="answer-section${isCorrect ? '' : ' wrong'}" role="status">
        <h4>${isCorrect ? TEXT.correct : TEXT.wrong} · ${TEXT.answer}：${letters[q.answer]}</h4>
        <p>${q.explanation}</p>
        ${sources}
      </div>`;
    }

    quizArea.innerHTML = `<div class="question-card">
      <div class="question-meta"><span class="question-category">${q.section ? SECTION_NAMES[q.section] : q.categoryName}</span>
      ${q.difficulty ? `<span class="question-badge">${TEXT[q.difficulty]}</span><span class="question-badge">${TEXT[q.kind]}</span>` : ''}</div>
      <p class="question-provenance">${q.legacy ? TEXT.legacy : `${TEXT.original} · ${q.verifiedOn}`}</p>
      <div class="question-text">${currentIndex + 1}. ${q.question}</div>
      <div style="font-size:0.85rem;color:#64748B;margin-bottom:16px;font-style:italic;">${q.questionEn}</div>
      <div class="options-list">${optionsHtml}</div>
      ${answerHtml}
    </div>`;

    // Bind option clicks
    if (!answered) {
      quizArea.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => selectAnswer(q, parseInt(btn.dataset.index)));
      });
    }

    // Update navigation
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === filteredQuestions.length - 1;
    questionCounter.textContent = `${currentIndex + 1} / ${filteredQuestions.length}`;
  }

  function selectAnswer(question, selectedIndex) {
    if (answers[question.id] !== undefined) return;
    answers[question.id] = selectedIndex;
    if (selectedIndex === question.answer) {
      correctCount++;
      mistakes.delete(question.id);
    } else {
      wrongCount++;
      mistakes.add(question.id);
    }
    try { localStorage.setItem('bpai-mistakes-v1', JSON.stringify([...mistakes])); } catch { /* Optional local storage. */ }
    reviewBtn.textContent = reviewing ? TEXT.returnBank : `${TEXT.review} (${mistakes.size})`;
    renderQuestion();
    updateStats();
  }

  function updateStats() {
    const total = filteredQuestions.length;
    const answered = correctCount + wrongCount;
    progressEl.textContent = `${answered}/${total}`;
    correctEl.textContent = correctCount;
    wrongEl.textContent = wrongCount;
    accuracyEl.textContent = answered > 0 ? Math.round(correctCount / answered * 100) + '%' : '0%';
    progressFill.style.width = total > 0 ? (answered / total * 100) + '%' : '0%';
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.target.closest('select, input, textarea, a, [contenteditable="true"]') || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === 'ArrowLeft') prevBtn.click();
    else if (e.key === 'ArrowRight') nextBtn.click();
    else if (['1','2','3','4'].includes(e.key)) {
      const btns = quizArea.querySelectorAll('.option-btn:not(.disabled)');
      const idx = parseInt(e.key) - 1;
      if (btns[idx]) btns[idx].click();
    }
  });

  // ============ Course Section ============
  const courseNav = document.getElementById('courseNav');
  const courseContent = document.getElementById('courseContent');
  let activeCourseId = COURSES[0].id;

  function renderCourseNav() {
    courseNav.innerHTML = COURSES.map(c =>
      `<button class="course-nav-btn${c.id === activeCourseId ? ' active' : ''}" data-course="${c.id}">
        <span class="course-icon">${c.icon}</span>
        <span>${c.title.replace(/^第.章：/, '')}</span>
      </button>`
    ).join('');

    courseNav.querySelectorAll('.course-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCourseId = btn.dataset.course;
        renderCourseNav();
        renderCourseContent();
      });
    });
  }

  function renderCourseContent() {
    const course = COURSES.find(c => c.id === activeCourseId);
    if (!course) return;

    courseContent.innerHTML = `
      <div class="course-chapter-title">${course.icon} ${course.title}</div>
      <div class="course-sections">
        ${course.sections.map((s, i) => `
          <div class="course-section${i === 0 ? ' open' : ''}" data-index="${i}">
            <div class="course-section-header">
              <span>${s.title}</span>
              <span class="arrow">&#9654;</span>
            </div>
            <div class="course-section-body">${s.content}</div>
          </div>
        `).join('')}
      </div>
    `;

    courseContent.querySelectorAll('.course-section-header').forEach(header => {
      header.addEventListener('click', () => {
        const section = header.parentElement;
        section.classList.toggle('open');
      });
    });
  }

  renderCourseNav();
  renderCourseContent();

  // Init
  resetQuiz();
});
