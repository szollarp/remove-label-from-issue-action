const core = require('@actions/core');
const github = require('@actions/github');

async function run(): Promise<void> {
  try {
    const token = core.getInput('token', { required: true });
    const issueNumber = core.getInput('issueNumber', { required: true });
    const labels = core.getInput('labels', { required: true }).split(';');
    
    const {context, getOctokit} = github;
    const octokit = getOctokit(token);

    for(const name of labels) {
      await octokit.issues.removeLabel({
        ...context.repo,
        issue_number: issueNumber,
        name
      });
    }
  }
  catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
}

run();