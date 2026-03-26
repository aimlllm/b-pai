document.addEventListener('DOMContentLoaded', () => {
  let currentCategory = 'all';
  let filteredQuestions = [...QUESTIONS];
  let currentIndex = 0;
  let answers = {};
  let correctCount = 0;
  let wrongCount = 0;

  const quizArea = document.getElementById('quizArea');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const questionCounter = document.getElementById('questionCounter');
  const progressEl = document.getElementById('progress');
  const correctEl = document.getElementById('correct');
  const wrongEl = document.getElementById('wrong');
  const accuracyEl = document.getElementById('accuracy');
  const progressFill = document.getElementById('progressFill');

  // Category filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
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
  document.getElementById('resetBtn').addEventListener('click', resetQuiz);

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
    filteredQuestions = currentCategory === 'all'
      ? [...QUESTIONS]
      : QUESTIONS.filter(q => q.category === currentCategory);
    currentIndex = 0;
    answers = {};
    correctCount = 0;
    wrongCount = 0;
    renderQuestion();
    updateStats();
  }

  function renderQuestion() {
    if (filteredQuestions.length === 0) {
      quizArea.innerHTML = '<div class="question-card"><p style="text-align:center;color:#64748B;">该分类暂无题目</p></div>';
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
      return `<button class="${cls}" data-index="${i}">
        <span class="option-letter">${letters[i]}</span>
        <span>${opt}</span>
      </button>`;
    }).join('');

    let answerHtml = '';
    if (answered) {
      const isCorrect = userAnswer === q.answer;
      answerHtml = `<div class="answer-section${isCorrect ? '' : ' wrong'}">
        <h4>${isCorrect ? '回答正确!' : '回答错误'} 正确答案：${letters[q.answer]}</h4>
        <p>${q.explanation}</p>
      </div>`;
    }

    quizArea.innerHTML = `<div class="question-card">
      <span class="question-category">${q.categoryName}</span>
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
    answers[question.id] = selectedIndex;
    if (selectedIndex === question.answer) {
      correctCount++;
    } else {
      wrongCount++;
    }
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
