/**
 * 공통: 다크 모드 토글 (메인·검사 페이지 공용)
 */
(function () {
  'use strict';
  function initDark() {
    var darkToggle = document.getElementById('dark-toggle');
    var darkIcon = document.querySelector('.dark-toggle-icon');
    var darkLabel = document.querySelector('.dark-toggle-label');
    if (darkToggle) {
      darkToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        var isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('sagunja-dark', isDark);
        if (darkIcon) darkIcon.textContent = isDark ? '☀️' : '🌙';
        if (darkLabel) darkLabel.textContent = isDark ? '라이트 모드' : '다크 모드';
      });
    }
    if (localStorage.getItem('sagunja-dark') === 'true') {
      document.documentElement.classList.add('dark');
      if (darkIcon) darkIcon.textContent = '☀️';
      if (darkLabel) darkLabel.textContent = '라이트 모드';
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDark);
  } else {
    initDark();
  }
})();
