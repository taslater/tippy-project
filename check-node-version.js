const engines = require('./package').engines;

const version = engines.node;
const current = process.version;

let satisfies;
try {
  satisfies = require('semver').satisfies;
} catch {
  satisfies = (v, range) => {
    const major = Number(String(v).replace(/^v/, '').split('.')[0]);
    const min = range.match(/>=\s*(\d+)/);
    const max = range.match(/<\s*(\d+)/);
    if (min && major < Number(min[1])) return false;
    if (max && major >= Number(max[1])) return false;
    return true;
  };
}

if (!satisfies(current, version)) {
  console.log(
    `Required node version ${version} not satisfied with current version ${current}.`,
  );
  process.exit(1);
}