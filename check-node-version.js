const engines = require('./package').engines;

const version = engines.node;
const current = process.version;

let satisfies;
try {
  satisfies = require('semver').satisfies;
} catch {
  const parse = (v) => String(v).replace(/^v/, '').split('.').map(Number);
  const cmp = (a, b) => {
    for (let i = 0; i < 3; i++) {
      const x = a[i] || 0;
      const y = b[i] || 0;
      if (x !== y) return x < y ? -1 : 1;
    }
    return 0;
  };
  satisfies = (v, range) => {
    const current = parse(v);
    const min = range.match(/>=\s*(\d+(?:\.\d+){0,2})/);
    const max = range.match(/<\s*(\d+(?:\.\d+){0,2})/);
    if (min && cmp(current, parse(min[1])) < 0) return false;
    if (max && cmp(current, parse(max[1])) >= 0) return false;
    return true;
  };
}

if (!satisfies(current, version)) {
  console.log(
    `Required node version ${version} not satisfied with current version ${current}.`,
  );
  process.exit(1);
}