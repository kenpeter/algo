/**
 * Builds docs/data.js for the GitHub Pages site from the problem metadata,
 * the solution registries and the solution source files.
 *
 *   node site/build.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'docs', 'data.js');

const GROUPS = [
  {
    id: 'arrays-greedy',
    name: 'Arrays & Greedy',
    description: 'Linear scans, greedy repair, prefix sums and hashing on arrays.',
    icon: '📁',
  },
  {
    id: 'dynamic-programming',
    name: 'Dynamic Programming',
    description: 'Interval DP, memoisation and shortest paths over state graphs.',
    icon: '📁',
  },
];

const PROBLEM_DIRS = ['village', 'refueling', 'subarr_sum'];

function readSolutions(problemDir) {
  const variants = require(path.join(ROOT, problemDir, 'solutions'));
  const solutionsDir = path.join(ROOT, problemDir, 'solutions');
  const files = fs
    .readdirSync(solutionsDir)
    .filter((file) => /^\d{2}-.+\.js$/.test(file))
    .sort();

  if (files.length !== variants.length) {
    throw new Error(
      `${problemDir}: ${files.length} solution files but ${variants.length} registry entries`
    );
  }

  return variants.map((variant, index) => ({
    id: variant.id,
    name: variant.name,
    complexity: variant.complexity,
    code: fs.readFileSync(path.join(solutionsDir, files[index]), 'utf8').trimEnd(),
  }));
}

const problems = PROBLEM_DIRS.map((dir) => {
  const meta = require(path.join(ROOT, dir, 'problem'));
  const solutions = readSolutions(dir);
  return {
    id: meta.id,
    groupId: meta.group,
    title: meta.title,
    subtitle: meta.subtitle,
    difficulty: meta.difficulty,
    tags: meta.tags,
    signature: meta.signature,
    javaSignature: meta.javaSignature,
    statement: meta.statement,
    constraints: meta.constraints,
    examples: meta.examples,
    tests: meta.tests,
    randomCheck: meta.randomCheck,
    solutions,
    file: dir,
  };
});

const groups = GROUPS.map((group) => ({
  ...group,
  problemIds: problems.filter((problem) => problem.groupId === group.id).map((p) => p.id),
}));

const unknownGroup = problems.find((p) => !groups.some((g) => g.id === p.groupId));
if (unknownGroup) throw new Error(`Problem ${unknownGroup.id} has unknown group ${unknownGroup.groupId}`);

const testCaseCount = problems.reduce(
  (sum, problem) => sum + problem.examples.length + problem.tests.length,
  0
);

const data = {
  generatedAt: new Date().toISOString(),
  title: 'Algorithm Quest',
  subtitle: 'Problem walkthroughs, test cases and five implementations each.',
  groups,
  problems,
  stats: {
    problems: problems.length,
    solutions: problems.reduce((sum, problem) => sum + problem.solutions.length, 0),
    writtenTests: testCaseCount,
    randomTests: problems.reduce((sum, problem) => sum + problem.randomCheck.count, 0),
  },
};

fs.mkdirSync(path.join(ROOT, 'docs'), { recursive: true });
fs.writeFileSync(OUT, `window.SITE_DATA = ${JSON.stringify(data, null, 2)};\n`);
fs.writeFileSync(path.join(ROOT, 'docs', '.nojekyll'), '');

console.log(
  `built ${path.relative(ROOT, OUT)} — ` +
    `${data.stats.problems} problems, ${data.stats.solutions} solutions, ` +
    `${data.stats.writtenTests} written tests, ${data.stats.randomTests} randomised tests`
);
