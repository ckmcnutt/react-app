const core = require("@actions/core");
const github = require("@actions/core");

async function main() {
  try {
    const token = core.getInput("token");
    const title = core.getInput("title");
    const body = core.getInput("body");
    const assignees = core.getInput("assignees");

    const octokit = new github.Github(token);
    const res = await octokit.issues.create({
      ...github.context.repo,
      title,
      body,
      assignees: assignees ? assignees.split(",") : undefined,
    });

    core.setOutput("issue", JSON.stringify(res.data));
  } catch (error) {
    core.setFailed(error.message);
  }
}
