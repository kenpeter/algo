/* global SITE_DATA */
(function () {
  'use strict';

  var data = window.SITE_DATA;
  var app = document.getElementById('app');
  var statsNode = document.getElementById('topbar-stats');

  var problemsById = {};
  var groupsById = {};
  data.problems.forEach(function (problem) {
    problemsById[problem.id] = problem;
  });
  data.groups.forEach(function (group) {
    groupsById[group.id] = group;
  });

  statsNode.textContent = data.stats.problems + ' problems · ' + data.stats.solutions + ' solutions';

  /* ----------------------------- helpers ----------------------------- */

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Escape, then turn `code` spans into <code> elements.
  function rich(value) {
    return escapeHtml(value).replace(/`([^`]+)`/g, '<code>$1</code>');
  }

  function renderStatement(paragraphs) {
    var html = '';
    var inList = false;
    paragraphs.forEach(function (paragraph) {
      if (paragraph.indexOf('• ') === 0) {
        if (!inList) {
          html += '<ul class="bullets">';
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

  var ARG_NAMES = ['A', 'X', 'B', 'C'];

  function formatArgs(args) {
    return args
      .map(function (value, index) {
        return (ARG_NAMES[index] || 'arg' + index) + ' = ' + JSON.stringify(value);
      })
      .join('\n');
  }

  function badgeFor(difficulty) {
    var key = String(difficulty).toLowerCase();
    var modifier =
      key === 'easy' ? 'badge-easy' : key === 'hard' ? 'badge-hard' : 'badge-medium';
    return '<span class="badge ' + modifier + '">' + escapeHtml(difficulty) + '</span>';
  }

  function tagRow(tags) {
    return (
      '<div class="tag-row">' +
      tags
        .map(function (tag) {
          return '<span class="tag">' + escapeHtml(tag) + '</span>';
        })
        .join('') +
      '</div>'
    );
  }

  function breadcrumb(items) {
    return (
      '<ul class="breadcrumb">' +
      items
        .map(function (item) {
          if (item.href) {
            return '<li><a href="' + item.href + '">' + escapeHtml(item.label) + '</a></li>';
          }
          return '<li aria-current="page">' + escapeHtml(item.label) + '</li>';
        })
        .join('') +
      '</ul>'
    );
  }

  function problemHref(problem) {
    return '#/problem/' + encodeURIComponent(problem.id);
  }

  function groupHref(group) {
    return '#/group/' + encodeURIComponent(group.id);
  }

  /* ------------------------------ pages ------------------------------ */

  function renderHome() {
    var stats =
      '<div class="stats">' +
      '<div class="stat"><strong>' + data.stats.problems + '</strong><span>problems</span></div>' +
      '<div class="stat"><strong>' + data.stats.solutions + '</strong><span>solutions</span></div>' +
      '<div class="stat"><strong>' + data.stats.randomTests + '</strong><span>random tests</span></div>' +
      '</div>';

    var folders = data.groups
      .map(function (group) {
        var count = group.problemIds.length;
        return (
          '<a class="folder-card" href="' + groupHref(group) + '">' +
          '<span class="folder-icon" aria-hidden="true">' + escapeHtml(group.icon || '📁') + '</span>' +
          '<span class="folder-body">' +
          '<h2>' + escapeHtml(group.name) + '</h2>' +
          '<p>' + escapeHtml(group.description) + '</p>' +
          '<span class="folder-meta">' + count + (count === 1 ? ' problem' : ' problems') + ' →</span>' +
          '</span>' +
          '<span class="chevron" aria-hidden="true">›</span>' +
          '</a>'
        );
      })
      .join('');

    return (
      breadcrumb([{ label: 'All folders' }]) +
      '<div class="hero">' +
      '<h1>' + escapeHtml(data.title) + '</h1>' +
      '<p>' + escapeHtml(data.subtitle) + '</p>' +
      stats +
      '</div>' +
      '<h2 class="section-title">Folders</h2>' +
      '<div class="card-list">' + folders + '</div>'
    );
  }

  function renderGroup(group) {
    var problems = group.problemIds
      .map(function (id) {
        return problemsById[id];
      })
      .filter(Boolean);

    var cards = problems
      .map(function (problem) {
        return (
          '<a class="question-card" href="' + problemHref(problem) + '">' +
          '<span class="question-body">' +
          '<h2>' + escapeHtml(problem.title) + '</h2>' +
          '<p>' + escapeHtml(problem.subtitle) + '</p>' +
          tagRow(problem.tags) +
          '<span class="folder-meta">' +
          badgeFor(problem.difficulty) + ' &nbsp; ' + problem.solutions.length + ' solutions' +
          '</span>' +
          '</span>' +
          '<span class="chevron" aria-hidden="true">›</span>' +
          '</a>'
        );
      })
      .join('');

    return (
      breadcrumb([
        { label: 'All folders', href: '#/' },
        { label: group.name },
      ]) +
      '<div class="page-head">' +
      '<h1>' + escapeHtml(group.name) + '</h1>' +
      '<p>' + escapeHtml(group.description) + '</p>' +
      '</div>' +
      '<h2 class="section-title">' +
      problems.length +
      (problems.length === 1 ? ' problem' : ' problems') +
      '</h2>' +
      '<div class="card-list">' + cards + '</div>'
    );
  }

  function renderTestCard(test, kind) {
    var explanation = test.explanation
      ? '<p class="explanation">' + rich(test.explanation) + '</p>'
      : '';
    return (
      '<article class="test-card">' +
      '<div class="test-head">' +
      '<span class="test-name">' + escapeHtml(test.name) + '</span>' +
      '<span class="badge">' + kind + '</span>' +
      '</div>' +
      '<pre class="io">' + escapeHtml(formatArgs(test.args)) +
      '\n<span class="arrow">→</span> ' + escapeHtml(JSON.stringify(test.expected)) + '</pre>' +
      explanation +
      '</article>'
    );
  }

  function renderSolution(problem, solution) {
    return (
      '<details class="solution">' +
      '<summary>' +
      '<span class="sol-id">' + escapeHtml(solution.id) + '</span>' +
      '<span class="sol-name">' + escapeHtml(solution.name) + '</span>' +
      '<span class="sol-complexity">' + escapeHtml(solution.complexity) + '</span>' +
      '</summary>' +
      '<div class="sol-body">' +
      '<div class="sol-toolbar">' +
      '<button class="copy-btn" type="button" data-copy-problem="' + escapeHtml(problem.id) +
      '" data-copy-solution="' + escapeHtml(solution.id) + '">Copy</button>' +
      '</div>' +
      '<pre class="code"><code>' + escapeHtml(solution.code) + '</code></pre>' +
      '</div>' +
      '</details>'
    );
  }

  function renderPrevNext(group, problem) {
    var index = group.problemIds.indexOf(problem.id);
    var previous = index > 0 ? problemsById[group.problemIds[index - 1]] : null;
    var next = index < group.problemIds.length - 1 ? problemsById[group.problemIds[index + 1]] : null;
    if (!previous && !next) return '';

    return (
      '<nav class="prevnext" aria-label="More problems in this folder">' +
      (previous
        ? '<a href="' + problemHref(previous) + '"><span class="label">← Previous</span>' +
          '<span class="name">' + escapeHtml(previous.title) + '</span></a>'
        : '<span></span>') +
      (next
        ? '<a class="next" href="' + problemHref(next) + '"><span class="label">Next →</span>' +
          '<span class="name">' + escapeHtml(next.title) + '</span></a>'
        : '<span></span>') +
      '</nav>'
    );
  }

  function renderProblem(problem) {
    var group = groupsById[problem.groupId];
    var testCount = problem.examples.length + problem.tests.length;

    var examples = problem.examples
      .map(function (test) {
        return renderTestCard(test, 'example');
      })
      .join('');

    var tests = problem.tests
      .map(function (test) {
        return renderTestCard(test, 'edge case');
      })
      .join('');

    var solutions = problem.solutions
      .map(function (solution) {
        return renderSolution(problem, solution);
      })
      .join('');

    return (
      breadcrumb([
        { label: 'All folders', href: '#/' },
        { label: group ? group.name : 'Problems', href: group ? groupHref(group) : '#/' },
        { label: problem.title },
      ]) +
      '<div class="page-head">' +
      '<h1>' + escapeHtml(problem.title) + '</h1>' +
      '<p>' + escapeHtml(problem.subtitle) + '</p>' +
      '<div class="badges">' +
      badgeFor(problem.difficulty) +
      '<span class="badge">' + problem.solutions.length + ' solutions</span>' +
      '<span class="badge">' + testCount + ' written tests</span>' +
      '</div>' +
      tagRow(problem.tags) +
      '</div>' +
      '<nav class="jump-nav" aria-label="Jump to section">' +
      '<button type="button" data-scroll="statement">Problem</button>' +
      '<button type="button" data-scroll="tests">Test cases</button>' +
      '<button type="button" data-scroll="solutions">Solutions</button>' +
      '</nav>' +

      '<section class="panel" id="statement">' +
      '<h2>Problem</h2>' +
      '<div class="prose">' + renderStatement(problem.statement) + '</div>' +
      '<h3>Constraints</h3>' +
      '<ul class="constraints">' +
      problem.constraints.map(function (item) {
        return '<li>' + rich(item) + '</li>';
      }).join('') +
      '</ul>' +
      '<h3>Function signature</h3>' +
      '<div class="signature">' +
      '<div class="sig-row"><span class="sig-label">JavaScript</span>' +
      '<span class="sig-code">' + escapeHtml(problem.signature) + '</span></div>' +
      '<div class="sig-row"><span class="sig-label">Original (Java)</span>' +
      '<span class="sig-code">' + escapeHtml(problem.javaSignature) + '</span></div>' +
      '</div>' +
      '</section>' +

      '<section class="panel" id="tests">' +
      '<h2>Test cases</h2>' +
      '<h3>Examples</h3>' +
      '<div class="test-list">' + examples + '</div>' +
      '<h3>Edge cases</h3>' +
      '<div class="test-list">' + tests + '</div>' +
      '<p class="note"><strong>Randomised suite:</strong> ' +
      escapeHtml(problem.randomCheck.description) +
      ' That is ' + problem.randomCheck.count +
      ' extra cases, run against all ' + problem.solutions.length + ' solutions.</p>' +
      '</section>' +

      '<section class="panel" id="solutions">' +
      '<h2>Solutions</h2>' +
      '<p class="muted" style="margin-top:-4px">Five independent implementations. Tap one to open the code.</p>' +
      solutions +
      '</section>' +

      renderPrevNext(group || { problemIds: [] }, problem)
    );
  }

  function renderNotFound() {
    return (
      '<div class="page-head"><h1>Not found</h1>' +
      '<p>That page does not exist.</p></div>' +
      '<p><a href="#/">Back to all folders</a></p>'
    );
  }

  /* ----------------------------- routing ----------------------------- */

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
      var group = groupsById[route.id];
      html = renderGroup(group);
      title = group.name + ' · ' + data.title;
    } else if (route.page === 'problem' && problemsById[route.id]) {
      var problem = problemsById[route.id];
      html = renderProblem(problem);
      title = problem.title + ' · ' + data.title;
    } else if (route.page === 'home') {
      html = renderHome();
    } else {
      html = renderNotFound();
    }

    app.innerHTML = html;
    document.title = title;
    window.scrollTo(0, 0);
  }

  /* --------------------------- interactions -------------------------- */

  document.addEventListener('click', function (event) {
    var scrollButton = event.target.closest('[data-scroll]');
    if (scrollButton) {
      var target = document.getElementById(scrollButton.getAttribute('data-scroll'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    var copyButton = event.target.closest('[data-copy-problem]');
    if (!copyButton) return;

    var problem = problemsById[copyButton.getAttribute('data-copy-problem')];
    if (!problem) return;
    var solutionId = copyButton.getAttribute('data-copy-solution');
    var solution = problem.solutions.filter(function (item) {
      return item.id === solutionId;
    })[0];
    if (!solution) return;

    var done = function () {
      copyButton.textContent = 'Copied';
      window.setTimeout(function () {
        copyButton.textContent = 'Copy';
      }, 1600);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(solution.code).then(done, done);
    } else {
      var area = document.createElement('textarea');
      area.value = solution.code;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand('copy');
      } catch (error) {
        /* ignore */
      }
      document.body.removeChild(area);
      done();
    }
  });

  window.addEventListener('hashchange', render);
  render();
})();
