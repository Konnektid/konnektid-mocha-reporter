
// define the reporters to use
const MochaReporters = require("mocha").reporters;
const ciReporter = MochaReporters.tap;
const devReporter = MochaReporters.spec;

// check environment
const isCI = !!process.env.BUILD_NUMBER;

// export the correct reporter
module.exports = isCI ? ciReporter : devReporter;
