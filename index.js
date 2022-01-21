const core = require("@actions/core");
const { run } = require("lerna-lcov-aggregate");

try {
  run();
} catch (err) {
  core.setFailed(err.message);
}
