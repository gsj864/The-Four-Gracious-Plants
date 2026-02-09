/**
 * 사군자 기질 검사 - 프론트 전용 앱
 * 매화·난초·국화·대나무 기질 분석
 */

(function () {
  'use strict';

  const TYPES = {
    maehwa: { name: '매화', key: 'maehwa', icon: '🌸', color: '#c45c6a' },
    orchid: { name: '난초', key: 'orchid', icon: '🪷', color: '#7b8d93' },
    chrysanthemum: { name: '국화', key: 'chrysanthemum', icon: '🌼', color: '#d4a84b' },
    bamboo: { name: '대나무', key: 'bamboo', icon: '🎋', color: '#4a7c59' }
  };

  const questions = [
    {
      question: '어려운 상황이 오면 당신은?',
      options: [
        { text: '끝까지 버틴다', type: 'maehwa' },
        { text: '사람들과 상의한다', type: 'orchid' },
        { text: '조용히 정리한다', type: 'chrysanthemum' },
        { text: '정면 돌파한다', type: 'bamboo' }
      ]
    },
    {
      question: '친구가 고민을 털어놓으면?',
      options: [
        { text: '함께 버티는 법을 알려준다', type: 'maehwa' },
        { text: '경청하고 위로해 준다', type: 'orchid' },
        { text: '침착하게 원인을 같이 짚어본다', type: 'chrysanthemum' },
        { text: '해결 방향을 제시한다', type: 'bamboo' }
      ]
    },
    {
      question: '일을 할 때 가장 중요하게 생각하는 것은?',
      options: [
        { text: '끝까지 해내는 것', type: 'maehwa' },
        { text: '팀 분위기와 협력', type: 'orchid' },
        { text: '정확함과 완성도', type: 'chrysanthemum' },
        { text: '목표 달성과 성장', type: 'bamboo' }
      ]
    },
    {
      question: '스트레스를 받으면?',
      options: [
        { text: '혼자 견디며 이겨낸다', type: 'maehwa' },
        { text: '친한 사람과 이야기한다', type: 'orchid' },
        { text: '조용한 시간을 갖는다', type: 'chrysanthemum' },
        { text: '운동이나 활동으로 풀어낸다', type: 'bamboo' }
      ]
    },
    {
      question: '결정을 내릴 때?',
      options: [
        { text: '한 번 정하면 흔들리지 않는다', type: 'maehwa' },
        { text: '주변 의견을 많이 반영한다', type: 'orchid' },
        { text: '충분히 생각한 뒤 결정한다', type: 'chrysanthemum' },
        { text: '원칙에 맞게 빠르게 결정한다', type: 'bamboo' }
      ]
    },
    {
      question: '새로운 모임에 참석했을 때?',
      options: [
        { text: '조용히 지켜보며 적응한다', type: 'maehwa' },
        { text: '먼저 다가가 친해지려 한다', type: 'orchid' },
        { text: '편한 사람 한두 명과 깊게 친해진다', type: 'chrysanthemum' },
        { text: '역할을 정하고 움직인다', type: 'bamboo' }
      ]
    },
    {
      question: '목표가 생기면?',
      options: [
        { text: '어렵더라도 꾸준히 밀어붙인다', type: 'maehwa' },
        { text: '주변 도움을 받으며 진행한다', type: 'orchid' },
        { text: '단계를 나누어 차근차근 한다', type: 'chrysanthemum' },
        { text: '즉시 실행하고 결과를 본다', type: 'bamboo' }
      ]
    },
    {
      question: '갈등이 생기면?',
      options: [
        { text: '내 쪽에서 참고 넘어간다', type: 'maehwa' },
        { text: '대화로 풀려고 노력한다', type: 'orchid' },
        { text: '시간을 두고 정리한다', type: 'chrysanthemum' },
        { text: '원칙대로 말한다', type: 'bamboo' }
      ]
    },
    {
      question: '휴식 시간에는?',
      options: [
        { text: '혼자만의 시간으로 재충전한다', type: 'maehwa' },
        { text: '친구·가족과 보내고 싶다', type: 'orchid' },
        { text: '고요한 취미나 독서를 한다', type: 'chrysanthemum' },
        { text: '새로운 걸 배우거나 도전한다', type: 'bamboo' }
      ]
    },
    {
      question: '당신을 한 문장으로 표현한다면?',
      options: [
        { text: '역경 속에서도 꿋꿋한 사람', type: 'maehwa' },
        { text: '주변과 조화를 이루는 사람', type: 'orchid' },
        { text: '차분하고 완성도를 중시하는 사람', type: 'chrysanthemum' },
        { text: '원칙 있고 추진력 있는 사람', type: 'bamboo' }
      ]
    }
  ];

  const results = {
    maehwa: {
      name: '매화형',
      subtitle: '인내와 시작의 기질',
      desc: '역경 속에서도 꿋꿋이 버티는 힘이 있습니다. 추운 겨울에 피는 매화처럼, 어려움이 있어도 포기하지 않고 끝까지 견디는 강한 정신력을 가졌어요.',
      strength: '어려운 상황에서도 흔들리지 않는 인내심, 말보다 행동으로 보여주는 성실함.',
      caution: '혼자 견디려다 지칠 수 있으니, 적절히 털어놓고 쉬는 것도 중요해요.',
      match: '난초형, 국화형 (조용히 지켜봐 주고 조화를 이루는 타입과 잘 맞아요.)',
      difficult: '대나무형 (너무 직선적일 때 의견이 부딪힐 수 있어요.)'
    },
    orchid: {
      name: '난초형',
      subtitle: '품격과 관계의 기질',
      desc: '배려심이 깊고 관계 속 조화를 중시합니다. 은은한 향의 난초처럼, 주변을 편안하게 하고 함께 어울리는 것을 소중히 여겨요.',
      strength: '공감 능력, 팀워크, 분위기 메이킹, 갈등 완화.',
      caution: '남을 맞추다 자신을 놓치지 않도록, 본인 감정도 챙기세요.',
      match: '매화형, 국화형 (서로를 존중하고 조용히 지지해 주는 타입과 잘 맞아요.)',
      difficult: '대나무형 (원칙 중심일 때 감정보다 결과가 우선이라 어색할 수 있어요.)'
    },
    chrysanthemum: {
      name: '국화형',
      subtitle: '고요와 완성의 기질',
      desc: '신중하고 내면을 중시하며, 마무리에 강합니다. 가을 국화처럼 차분하게 마무리하고 완성도를 높이는 스타일이에요.',
      strength: '꼼꼼함, 완성도, 분석력, 안정적인 판단.',
      caution: '완벽을 추구하다 속도가 느려질 수 있으니, 적당한 선을 찾아보세요.',
      match: '매화형, 난초형 (서로를 압하지 않고 존중해 주는 타입과 잘 맞아요.)',
      difficult: '대나무형 (빠른 추진과 원칙 중심이 부담될 수 있어요.)'
    },
    bamboo: {
      name: '대나무형',
      subtitle: '강직과 성장의 기질',
      desc: '원칙이 분명하고 추진력이 있습니다. 곧게 자라는 대나무처럼, 목표를 향해 쭉 나아가는 성장형 기질이에요.',
      strength: '추진력, 원칙성, 목표 지향, 성장 욕구.',
      caution: '속도와 결과에만 치우치면 관계에서 오해가 생길 수 있어요. 여유를 갖는 것도 중요해요.',
      match: '매화형 (함께 목표를 향해 버티는 조합이 잘 맞아요.)',
      difficult: '난초형, 국화형 (감정·완성도보다 속도와 원칙을 우선할 때 갈등이 생길 수 있어요.)'
    }
  };

  const typeOrder = ['maehwa', 'orchid', 'chrysanthemum', 'bamboo'];
  const MIXED_THRESHOLD = 1; // 최고점과 1점 이하 차이나면 혼합형 표시

  let state = {
    currentIndex: 0,
    answers: [],
    scores: { maehwa: 0, orchid: 0, chrysanthemum: 0, bamboo: 0 }
  };

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(el => el.classList.remove('active'));
    const el = typeof screenId === 'string' ? document.getElementById(screenId) : screenId;
    if (el) el.classList.add('active');
  }

  function renderProgress() {
    const total = questions.length;
    const current = state.currentIndex + 1;
    const pct = (current / total) * 100;
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    if (progressBar) progressBar.style.width = pct + '%';
    const track = progressBar && progressBar.parentElement;
    if (track) track.setAttribute('aria-valuenow', Math.round(pct));
    if (progressText) progressText.textContent = current + ' / ' + total;
  }

  function renderQuestion() {
    const q = questions[state.currentIndex];
    const questionText = document.getElementById('question-text');
    const optionsList = document.getElementById('options');
    if (questionText) questionText.textContent = q.question;
    if (!optionsList) return;
    optionsList.innerHTML = '';
    q.options.forEach((opt) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.setAttribute('role', 'option');
      btn.textContent = opt.text;
      btn.dataset.type = opt.type;
      btn.addEventListener('click', () => selectOption(opt.type));
      li.appendChild(btn);
      optionsList.appendChild(li);
    });
    renderProgress();
  }

  function selectOption(type) {
    state.scores[type] = (state.scores[type] || 0) + 1;
    state.answers.push(type);
    if (state.currentIndex < questions.length - 1) {
      state.currentIndex++;
      renderQuestion();
    } else {
      showResult();
    }
  }

  function getSortedScores() {
    return typeOrder.map(key => ({
      key,
      name: TYPES[key].name,
      icon: TYPES[key].icon,
      color: TYPES[key].color,
      score: state.scores[key] || 0
    })).sort((a, b) => b.score - a.score);
  }

  function isMixed(sorted) {
    if (sorted.length < 2) return false;
    const top = sorted[0].score;
    const next = sorted[1].score;
    return top > 0 && (top - next) <= MIXED_THRESHOLD;
  }

  function showResult() {
    const sorted = getSortedScores();
    const total = questions.length;
    const mixed = isMixed(sorted);

    let title, subtitle, desc, strength, caution, match, difficult, themeClass, iconHtml;

    if (mixed && sorted[0].score === sorted[1].score) {
      title = sorted[0].name + '·' + sorted[1].name + ' 혼합형';
      subtitle = '두 기질이 고르게 나타나요';
      const r0 = results[sorted[0].key];
      const r1 = results[sorted[1].key];
      desc = r0.desc + ' ' + r1.desc;
      strength = r0.strength + ' ' + r1.strength;
      caution = r0.caution + ' ' + r1.caution;
      match = r0.match + ' ' + r1.match;
      difficult = r0.difficult;
      themeClass = 'theme-mixed';
      iconHtml = sorted[0].icon + ' ' + sorted[1].icon;
    } else if (mixed) {
      const primary = sorted[0];
      const secondary = sorted[1];
      const r = results[primary.key];
      title = primary.name + '형 (' + secondary.name + ' 기질 포함)';
      subtitle = r.subtitle;
      desc = r.desc + ' 동시에 ' + secondary.name + ' 기질도 함께 가지고 있어요.';
      strength = r.strength;
      caution = r.caution;
      match = r.match;
      difficult = r.difficult;
      themeClass = 'theme-' + primary.key;
      iconHtml = primary.icon;
    } else {
      const primary = sorted[0];
      const r = results[primary.key];
      title = primary.name + '형';
      subtitle = r.subtitle;
      desc = r.desc;
      strength = r.strength;
      caution = r.caution;
      match = r.match;
      difficult = r.difficult;
      themeClass = 'theme-' + primary.key;
      iconHtml = primary.icon;
    }

    const resultScreenEl = document.getElementById('result-screen');
    const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    setText('result-icon', iconHtml);
    setText('result-title', title);
    setText('result-subtitle', subtitle);
    setText('result-desc', desc);
    setText('result-strength', strength);
    setText('result-caution', caution);
    setText('result-match', match);
    setText('result-difficult', difficult);

    if (resultScreenEl) {
      resultScreenEl.classList.remove('theme-maehwa', 'theme-orchid', 'theme-chrysanthemum', 'theme-bamboo', 'theme-mixed');
      resultScreenEl.classList.add(themeClass);
    }

    const scoresEl = document.getElementById('result-scores');
    scoresEl.innerHTML = '';
    sorted.forEach(({ name, score, color }) => {
      const pct = total === 0 ? 0 : Math.round((score / total) * 100);
      const wrap = document.createElement('div');
      wrap.className = 'score-bar-wrap';
      wrap.innerHTML =
        '<span class="score-label">' + name + '</span>' +
        '<div class="score-bar-bg"><div class="score-bar-fill" style="width:0%;background:' + color + '" data-pct="' + pct + '"></div></div>' +
        '<span class="score-pct">' + pct + '%</span>';
      scoresEl.appendChild(wrap);
    });

    showScreen('result-screen');

    requestAnimationFrame(() => {
      const resultEl = document.getElementById('result-screen');
      if (resultEl) {
        resultEl.querySelectorAll('.score-bar-fill').forEach(el => {
          el.style.width = (el.dataset.pct || 0) + '%';
        });
      }
    });
  }

  function reset() {
    state = {
      currentIndex: 0,
      answers: [],
      scores: { maehwa: 0, orchid: 0, chrysanthemum: 0, bamboo: 0 }
    };
    showScreen('main-screen');
  }

  function shareResult() {
    const title = $('#result-title').textContent;
    const subtitle = $('#result-subtitle').textContent;
    const text = '사군자 기질 검사 결과: ' + title + ' - ' + subtitle + '\n나도 검사해보기!';
    const url = window.location.href;

    if (navigator.share && navigator.canShare && navigator.canShare({ title: document.title, text, url })) {
      navigator.share({
        title: document.title,
        text,
        url
      }).catch(() => copyToClipboard(text + ' ' + url));
    } else {
      copyToClipboard(text + ' ' + url);
    }
  }

  function copyToClipboard(str) {
    navigator.clipboard.writeText(str).then(() => {
      const btn = $('#btn-share');
      const orig = btn.textContent;
      btn.textContent = '복사됨!';
      setTimeout(() => { btn.textContent = orig; }, 2000);
    }).catch(() => alert('결과를 복사하려면 주소를 직접 복사해 주세요.'));
  }

  function startTest() {
    state.currentIndex = 0;
    state.answers = [];
    state.scores = { maehwa: 0, orchid: 0, chrysanthemum: 0, bamboo: 0 };
    showScreen('question-screen');
    renderQuestion();
  }

  function init() {
    document.body.addEventListener('click', function (e) {
      if (e.target.closest('#btn-start')) {
        e.preventDefault();
        startTest();
        return;
      }
      if (e.target.closest('#btn-retry')) {
        e.preventDefault();
        reset();
        return;
      }
      if (e.target.closest('#btn-share')) {
        e.preventDefault();
        shareResult();
      }
    });

    const darkToggle = document.getElementById('dark-toggle');
    const darkIcon = document.querySelector('.dark-toggle-icon');
    const darkLabel = document.querySelector('.dark-toggle-label');
    if (darkToggle) {
      darkToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('sagunja-dark', isDark);
        if (darkIcon) darkIcon.textContent = isDark ? '☀️' : '🌙';
        if (darkLabel) darkLabel.textContent = isDark ? '라이트 모드' : '다크 모드';
      });
    }
    const savedDark = localStorage.getItem('sagunja-dark') === 'true';
    if (savedDark) {
      document.documentElement.classList.add('dark');
      if (darkIcon) darkIcon.textContent = '☀️';
      if (darkLabel) darkLabel.textContent = '라이트 모드';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
