/* global SITE_DATA */
(function () {
  'use strict';

  var data = window.SITE_DATA;
  var app = document.getElementById('app');

  var problemsById = {};
  var groupsById = {};
  data.problems.forEach(function (problem) {
    problemsById[problem.id] = problem;
  });
  data.groups.forEach(function (group) {
    groupsById[group.id] = group;
  });

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function rich(value) {
    return escapeHtml(value).replace(/`([^`]+)`/g, '<code>$1</code>');
  }

  function bullets(paragraphs) {
    var html = '';
    var inList = false;
    paragraphs.forEach(function (paragraph) {
      if (paragraph.indexOf('• ') === 0) {
        if (!inList) {
          html += '<ul>';
          inList = true;
        }
        html += '<li>' + rich(paragraph.slice(2)) + '</li>';
      } else {
        if (inList) {
          html += '</ul>';
          inList = false;
        }
        html += '<p>' + rich(paragraph) + '</p>';
      }
    });
    if (inList) html += '</ul>';
    return html;
  }

  var ARG_NAMES = ['A', 'X'];

  var COPY_ICON =
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<rect x="9" y="9" width="11" height="11" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.8"/>' +
    '<path d="M5 15V5a1 1 0 0 1 1-1h9" fill="none" stroke="currentColor" stroke-width="1.8"/>' +
    '</svg>';

  function copyText(text, done) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () {
          done(true);
        },
        function () {
          done(false);
        }
      );
      return;
    }

    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();

    var ok = false;
    try {
      ok = document.execCommand('copy');
    } catch (error) {
      ok = false;
    }
    document.body.removeChild(area);
    done(ok);
  }

  function formatArgs(args) {
    return args
      .map(function (value, index) {
        return (ARG_NAMES[index] || 'arg' + index) + ' = ' + JSON.stringify(value);
      })
      .join('\n');
  }

  function testBlock(test) {
    var explanation = test.explanation
      ? '<p class="muted">' + rich(test.explanation) + '</p>'
      : '';
    return (
      '<div class="test">' +
      '<div class="test-name">' + escapeHtml(test.name) + '</div>' +
      '<pre>' + escapeHtml(formatArgs(test.args)) + '\n→ ' +
      escapeHtml(JSON.stringify(test.expected)) + '</pre>' +
      explanation +
      '</div>'
    );
  }

  function homePage() {
    var folders = data.groups
      .map(function (group) {
        return (
          '<li>' +
          '<a href="#/group/' + encodeURIComponent(group.id) + '">' +
          escapeHtml(group.name) + '</a> <span class="muted">(' +
          group.problemIds.length + ')</span><br>' +
          '<span class="muted">' + escapeHtml(group.description) + '</span>' +
          '</li>'
        );
      })
      .join('');

    return (
      '<h1>Folders</h1>' +
      '<p class="muted">' + escapeHtml(data.subtitle) + '</p>' +
      '<ul class="nav-list">' + folders + '</ul>'
    );
  }

  function groupPage(group) {
    var problems = group.problemIds
      .map(function (id) {
        return problemsById[id];
      })
      .filter(Boolean)
      .map(function (problem) {
        return (
          '<li>' +
          '<a href="#/problem/' + encodeURIComponent(problem.id) + '">' +
          escapeHtml(problem.title) + '</a><br>' +
          '<span class="muted">' + escapeHtml(problem.subtitle) + ' · ' +
          problem.solutions.length + ' solutions</span>' +
          '</li>'
        );
      })
      .join('');

    return (
      '<p><a href="#/">← All folders</a></p>' +
      '<h1>' + escapeHtml(group.name) + '</h1>' +
      '<p class="muted">' + escapeHtml(group.description) + '</p>' +
      '<ul class="nav-list">' + problems + '</ul>'
    );
  }

  function problemPage(problem) {
    var group = groupsById[problem.groupId];

    var examples = problem.examples.map(testBlock).join('');
    var tests = problem.tests.map(testBlock).join('');

    var solutions = problem.solutions
      .map(function (solution) {
        return (
          '<div class="solution-head">' +
          '<h3>' + escapeHtml(solution.id) + '. ' + escapeHtml(solution.name) + '</h3>' +
          '<button type="button" class="copy-btn" ' +
          'data-copy-problem="' + escapeHtml(problem.id) + '" ' +
          'data-copy-solution="' + escapeHtml(solution.id) + '" ' +
          'aria-label="Copy solution ' + escapeHtml(solution.id) + ' code">' +
          COPY_ICON + 'Copy</button>' +
          '</div>' +
          '<p class="muted">' + escapeHtml(solution.complexity) + '</p>' +
          '<pre><code>' + escapeHtml(solution.code) + '</code></pre>'
        );
      })
      .join('');

    var back = group
      ? '<p><a href="#/">All folders</a> / ' +
        '<a href="#/group/' + encodeURIComponent(group.id) + '">' +
        escapeHtml(group.name) + '</a></p>'
      : '<p><a href="#/">All folders</a></p>';

    return (
      back +
      '<h1>' + escapeHtml(problem.title) + '</h1>' +
      '<p class="muted">' + escapeHtml(problem.subtitle) + '</p>' +

      '<h2>Problem</h2>' +
      bullets(problem.statement) +
      '<h3>Constraints</h3>' +
      '<ul>' + problem.constraints.map(function (item) {
        return '<li>' + rich(item) + '</li>';
      }).join('') + '</ul>' +
      '<p><strong>Function:</strong> <code>' + escapeHtml(problem.signature) +
      '</code></p>' +

      '<h2>Test cases</h2>' +
      '<h3>Examples</h3>' + examples +
      '<h3>Edge cases</h3>' + tests +
      '<p class="muted">Randomised suite: ' +
      escapeHtml(problem.randomCheck.description) + ' (' +
      problem.randomCheck.count + ' cases, run against all ' +
      problem.solutions.length + ' solutions.)</p>' +

      '<h2>Solutions</h2>' + solutions
    );
  }

  function parseHash() {
    var raw = window.location.hash.replace(/^#\/?/, '');
    var parts = raw.split('/').filter(Boolean);
    if (parts[0] === 'group' && parts[1]) {
      return { page: 'group', id: decodeURIComponent(parts[1]) };
    }
    if (parts[0] === 'problem' && parts[1]) {
      return { page: 'problem', id: decodeURIComponent(parts[1]) };
    }
    return { page: 'home' };
  }

  function render() {
    var route = parseHash();
    var html;
    var title = data.title;

    if (route.page === 'group' && groupsById[route.id]) {
      html = groupPage(groupsById[route.id]);
      title = groupsById[route.id].name + ' · ' + data.title;
    } else if (route.page === 'problem' && problemsById[route.id]) {
      html = problemPage(problemsById[route.id]);
      title = problemsById[route.id].title + ' · ' + data.title;
    } else if (route.page === 'home') {
      html = homePage();
    } else {
      html = '<h1>Not found</h1><p><a href="#/">All folders</a></p>';
    }

    app.innerHTML = html;
    document.title = title;
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', render);

  document.addEventListener('click', function (event) {
    var button = event.target.closest('.copy-btn');
    if (!button) return;

    var problem = problemsById[button.getAttribute('data-copy-problem')];
    if (!problem) return;

    var solutionId = button.getAttribute('data-copy-solution');
    var solution = problem.solutions.filter(function (item) {
      return item.id === solutionId;
    })[0];
    if (!solution) return;

    copyText(solution.code, function (ok) {
      button.innerHTML = COPY_ICON + (ok ? 'Copied' : 'Failed');
      window.setTimeout(function () {
        button.innerHTML = COPY_ICON + 'Copy';
      }, 1500);
    });
  });

  render();
})();
