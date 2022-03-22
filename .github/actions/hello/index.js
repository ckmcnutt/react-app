const core = require("@actions/core");
const github = require("@actions/github");

try {
  // debug messages
  core.debug("Test debug message");
  core.warning("Test warning message");
  core.error("Test error message");

  const name = core.getInput("who-to-greet");
  core.setSecret(name);
  console.log(`Hello ${name}!`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.startGroup("Logging github object");
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();

  core.exportVariable("HELLO", "hello world!");
} catch (error) {
  core.setFailed(error.message);
}
