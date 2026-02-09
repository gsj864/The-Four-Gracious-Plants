/**
 * 사군자 기질 검사 - 검사 페이지 (기질별 7문항, 총 28문항, 5점 척도)
 */
(function () {
  'use strict';

  const TYPES = {
    maehwa: { name: '매화', key: 'maehwa', icon: '🌸', color: '#c45c6a' },
    orchid: { name: '난초', key: 'orchid', icon: '🪷', color: '#7b8d93' },
    chrysanthemum: { name: '국화', key: 'chrysanthemum', icon: '🌼', color: '#d4a84b' },
    bamboo: { name: '대나무', key: 'bamboo', icon: '🎋', color: '#4a7c59' }
  };

  // 기질별 7문항씩, 총 28문항 (매화 7 → 난초 7 → 국화 7 → 대나무 7 순)
  const questions = [
    // 매화 (1~7)
    { question: '어려운 상황이 와도 끝까지 버티는 편이다.', type: 'maehwa' },
    { question: '한 번 결심한 일은 흔들리지 않고 해낸다.', type: 'maehwa' },
    { question: '스트레스를 받아도 혼자 견디며 이겨내는 편이다.', type: 'maehwa' },
    { question: '어렵더라도 꾸준히 밀어붙이는 편이다.', type: 'maehwa' },
    { question: '역경 속에서도 포기하지 않고 끝까지 해내는 편이다.', type: 'maehwa' },
    { question: '말보다 행동으로 보여주는 스타일이다.', type: 'maehwa' },
    { question: '주변 반대가 있어도 내 결심은 흔들리지 않는다.', type: 'maehwa' },
    // 난초 (8~14)
    { question: '주변 사람들과 조화를 이루는 것이 중요하다.', type: 'orchid' },
    { question: '갈등이 생기면 대화로 풀려고 노력한다.', type: 'orchid' },
    { question: '친구나 동료의 감정을 잘 읽고 위로해 주는 편이다.', type: 'orchid' },
    { question: '팀에서 분위기를 좋게 만드는 편이다.', type: 'orchid' },
    { question: '의견이 다를 때 상대방 의견을 경청하고 맞추려 한다.', type: 'orchid' },
    { question: '관계가 틀어지는 것을 싫어한다.', type: 'orchid' },
    { question: '함께 일할 때 협력과 팀워크를 최우선으로 생각한다.', type: 'orchid' },
    // 국화 (15~21)
    { question: '일을 할 때 정확함과 완성도를 중시한다.', type: 'chrysanthemum' },
    { question: '차분히 생각한 뒤 결정하는 편이다.', type: 'chrysanthemum' },
    { question: '조용한 시간을 갖고 내면을 돌아보는 편이다.', type: 'chrysanthemum' },
    { question: '일을 할 때 단계를 나누어 차근차근 한다.', type: 'chrysanthemum' },
    { question: '마무리를 꼼꼼히 하는 편이다.', type: 'chrysanthemum' },
    { question: '성급한 결정보다 신중한 판단을 선호한다.', type: 'chrysanthemum' },
    { question: '완벽에 가깝게 마치고 싶은 편이다.', type: 'chrysanthemum' },
    // 대나무 (22~28)
    { question: '목표가 정해지면 원칙에 맞게 빠르게 실행한다.', type: 'bamboo' },
    { question: '새로운 것을 배우고 성장하는 것을 좋아한다.', type: 'bamboo' },
    { question: '원칙과 기준이 분명한 편이다.', type: 'bamboo' },
    { question: '목표를 향해 쭉 나아가는 스타일이다.', type: 'bamboo' },
    { question: '결정할 때 원칙에 맞는지 먼저 생각한다.', type: 'bamboo' },
    { question: '추진력이 있고 일을 빠르게 진행하는 편이다.', type: 'bamboo' },
    { question: '성장할 기회가 있으면 적극적으로 참여한다.', type: 'bamboo' }
  ];

  const SCALE_LABELS = [
    '전혀 그렇지 않다',
    '그렇지 않다',
    '보통',
    '그렇다',
    '매우 그렇다'
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
  const MIXED_THRESHOLD = 3; // 점수 차이 3 이하면 혼합형
  const MAX_SCORE_PER_TYPE = 35; // 기질당 7문항 × 5점

  var TOTAL = questions.length;
  var emptyAnswers = function () { var a = []; for (var i = 0; i < TOTAL; i++) a[i] = null; return a; };

  let state = {
    currentIndex: 0,
    answers: emptyAnswers(),
    scores: { maehwa: 0, orchid: 0, chrysanthemum: 0, bamboo: 0 }
  };

  function computeScoresFromAnswers() {
    var s = { maehwa: 0, orchid: 0, chrysanthemum: 0, bamboo: 0 };
    for (var i = 0; i < TOTAL; i++) {
      var v = state.answers[i];
      if (v != null) s[questions[i].type] += v;
    }
    state.scores = s;
  }

  function showScreen(screenId) {
    var screens = document.querySelectorAll('.screen');
    screens.forEach(function (el) { el.classList.remove('active'); });
    var el = document.getElementById(screenId);
    if (el) el.classList.add('active');
    if (screenId === 'result-screen') document.body.classList.remove('question-screen-active');
    else if (screenId === 'question-screen') document.body.classList.add('question-screen-active');
  }

  function renderProgress() {
    var total = questions.length;
    var current = state.currentIndex + 1;
    var pct = (current / total) * 100;
    var progressBar = document.getElementById('progress-bar');
    var progressText = document.getElementById('progress-text');
    if (progressBar) progressBar.style.width = pct + '%';
    var track = progressBar && progressBar.parentElement;
    if (track) track.setAttribute('aria-valuenow', Math.round(pct));
    if (progressText) progressText.textContent = current + ' / ' + total;
  }

  function renderQuestion() {
    var q = questions[state.currentIndex];
    var typeInfo = TYPES[q.type];
    var categoryEl = document.getElementById('question-category');
    if (categoryEl) {
      categoryEl.textContent = typeInfo.icon + ' ' + typeInfo.name + ' 항목';
      categoryEl.className = 'question-category category-' + q.type;
    }
    var questionText = document.getElementById('question-text');
    var scaleEl = document.getElementById('scale-options');
    if (questionText) questionText.textContent = q.question;
    if (!scaleEl) return;
    scaleEl.innerHTML = '';
    var currentVal = state.answers[state.currentIndex];
    SCALE_LABELS.forEach(function (label, i) {
      var value = i + 1;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'scale-option' + (currentVal === value ? ' scale-option-selected' : '');
      btn.setAttribute('data-value', value);
      btn.innerHTML = '<span class="scale-num">' + value + '</span><span class="scale-label">' + label + '</span>';
      btn.addEventListener('click', function () { selectScale(value); });
      scaleEl.appendChild(btn);
    });
    renderProgress();
    renderAnswerPanel();
    updateNavButtons();
  }

  function selectScale(value) {
    state.answers[state.currentIndex] = value;
    computeScoresFromAnswers();
    renderQuestion();
    renderAnswerPanel();
  }

  function goToQuestion(index) {
    if (index < 0 || index >= TOTAL) return;
    state.currentIndex = index;
    renderQuestion();
  }

  function updateNavButtons() {
    var prevBtn = document.getElementById('btn-prev');
    var nextBtn = document.getElementById('btn-next');
    if (prevBtn) {
      prevBtn.disabled = state.currentIndex === 0;
      prevBtn.setAttribute('aria-hidden', state.currentIndex === 0 ? 'true' : 'false');
    }
    if (nextBtn) {
      nextBtn.textContent = state.currentIndex === TOTAL - 1 ? '결과 보기' : '다음';
    }
  }

  function getUnansweredCount() {
    var n = 0;
    for (var i = 0; i < TOTAL; i++) if (state.answers[i] == null) n++;
    return n;
  }

  function renderAnswerPanel() {
    var container = document.getElementById('answer-grid');
    var countEl = document.getElementById('answer-panel-count');
    if (!container) return;
    container.innerHTML = '';
    var unanswered = getUnansweredCount();
    if (countEl) countEl.textContent = unanswered > 0 ? '(미응답 ' + unanswered + '개)' : '(완료)';
    if (countEl) countEl.className = 'answer-panel-count' + (unanswered > 0 ? ' has-unanswered' : '');

    var typeKeys = ['maehwa', 'orchid', 'chrysanthemum', 'bamboo'];
    var itemsPerType = 7;
    typeKeys.forEach(function (typeKey, groupIndex) {
      var startIdx = groupIndex * itemsPerType;
      var typeInfo = TYPES[typeKey];
      var group = document.createElement('div');
      group.className = 'answer-type-group answer-type-' + typeKey;
      var header = document.createElement('div');
      header.className = 'answer-type-header';
      header.textContent = typeInfo.name;
      header.setAttribute('aria-label', typeInfo.name + ' 항목');
      group.appendChild(header);
      var cellsWrap = document.createElement('div');
      cellsWrap.className = 'answer-type-cells';
      for (var j = 0; j < itemsPerType; j++) {
        var i = startIdx + j;
        var cell = document.createElement('button');
        cell.type = 'button';
        cell.className = 'answer-cell' + (state.currentIndex === i ? ' current' : '') + (state.answers[i] == null ? ' unanswered' : '');
        cell.setAttribute('data-index', i);
        cell.textContent = state.answers[i] != null ? state.answers[i] : '－';
        cell.title = (i + 1) + '번 ' + (state.answers[i] != null ? state.answers[i] + '점' : '미응답');
        cell.addEventListener('click', (function (idx) {
          return function () {
            goToQuestion(idx);
            closeAnswerPopup();
          };
        })(i));
        cellsWrap.appendChild(cell);
      }
      group.appendChild(cellsWrap);
      container.appendChild(group);
    });
  }

  function getSortedScores() {
    return typeOrder.map(function (key) {
      return {
        key: key,
        name: TYPES[key].name,
        icon: TYPES[key].icon,
        color: TYPES[key].color,
        score: state.scores[key] || 0
      };
    }).sort(function (a, b) { return b.score - a.score; });
  }

  function isMixed(sorted) {
    if (sorted.length < 2) return false;
    var top = sorted[0].score;
    var next = sorted[1].score;
    return top > 0 && (top - next) <= MIXED_THRESHOLD;
  }

  function showResult() {
    computeScoresFromAnswers();
    var sorted = getSortedScores();
    var mixed = isMixed(sorted);
    var totalMax = MAX_SCORE_PER_TYPE;

    var title, subtitle, desc, strength, caution, match, difficult, themeClass, iconHtml;

    if (mixed && sorted[0].score === sorted[1].score) {
      title = sorted[0].name + '·' + sorted[1].name + ' 혼합형';
      subtitle = '두 기질이 고르게 나타나요';
      var r0 = results[sorted[0].key];
      var r1 = results[sorted[1].key];
      desc = r0.desc + ' ' + r1.desc;
      strength = r0.strength + ' ' + r1.strength;
      caution = r0.caution + ' ' + r1.caution;
      match = r0.match + ' ' + r1.match;
      difficult = r0.difficult;
      themeClass = 'theme-mixed';
      iconHtml = sorted[0].icon + ' ' + sorted[1].icon;
    } else if (mixed) {
      var primary = sorted[0];
      var secondary = sorted[1];
      var r = results[primary.key];
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
      var primary = sorted[0];
      var r = results[primary.key];
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

    var resultScreenEl = document.getElementById('result-screen');
    function setText(id, val) {
      var el = document.getElementById(id);
      if (el) el.textContent = val;
    }
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

    var scoresEl = document.getElementById('result-scores');
    scoresEl.innerHTML = '';
    sorted.forEach(function (item) {
      var pct = totalMax === 0 ? 0 : Math.round((item.score / totalMax) * 100);
      var wrap = document.createElement('div');
      wrap.className = 'score-bar-wrap score-bar-' + item.key;
      wrap.innerHTML =
        '<span class="score-label">' + item.name + '</span>' +
        '<div class="score-bar-bg"><div class="score-bar-fill" style="width:0%" data-pct="' + pct + '"></div></div>' +
        '<span class="score-pct">' + pct + '%</span>';
      scoresEl.appendChild(wrap);
    });

    showScreen('result-screen');

    requestAnimationFrame(function () {
      var resultEl = document.getElementById('result-screen');
      if (resultEl) {
        resultEl.querySelectorAll('.score-bar-fill').forEach(function (el) {
          el.style.width = (el.dataset.pct || 0) + '%';
        });
      }
    });
  }

  function quitTest() {
    if (confirm('검사를 중단하고 메인으로 돌아가시겠습니까?')) {
      window.location.href = 'index.html';
    }
  }

  function openAnswerPopup() {
    var overlay = document.getElementById('answer-popup-overlay');
    if (overlay) {
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
    }
  }

  function closeAnswerPopup() {
    var overlay = document.getElementById('answer-popup-overlay');
    if (overlay) {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
    }
  }

  function init() {
    document.body.addEventListener('click', function (e) {
      if (e.target.closest('#btn-answer-popup')) {
        e.preventDefault();
        renderAnswerPanel();
        openAnswerPopup();
        return;
      }
      if (e.target.closest('#answer-popup-close')) {
        e.preventDefault();
        closeAnswerPopup();
        return;
      }
      if (e.target.id === 'answer-popup-overlay') {
        e.preventDefault();
        closeAnswerPopup();
        return;
      }
      if (e.target.closest('#btn-quit')) {
        e.preventDefault();
        quitTest();
        return;
      }
      if (e.target.closest('#btn-prev')) {
        e.preventDefault();
        if (state.currentIndex > 0) goToQuestion(state.currentIndex - 1);
        return;
      }
      if (e.target.closest('#btn-next')) {
        e.preventDefault();
        if (state.currentIndex < TOTAL - 1) {
          goToQuestion(state.currentIndex + 1);
        } else {
          var un = getUnansweredCount();
          if (un > 0 && !confirm('미응답 문항이 ' + un + '개 있습니다. 그대로 결과를 보시겠습니까?')) return;
          showResult();
        }
        return;
      }
    });
    document.body.classList.add('question-screen-active');
    renderQuestion();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
