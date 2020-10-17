# Action Remove Labels

[![actions-workflow-test][actions-workflow-test-badge]][actions-workflow-test]
[![release][release-badge]][release]

It's a GitHub Action to remove GitHub labels.

## Inputs

|      NAME      |                                           DESCRIPTION                                           |   TYPE   | REQUIRED |                                     DEFAULT                                     |
| -------------- | ----------------------------------------------------------------------------------------------- | -------- | -------- | ------------------------------------------------------------------------------- |
| `token` | A GitHub token.                                                                                 | `string` | `true`   | `N/A`                                                                           |
| `labels`       | The labels name to be removed. Must be separated with ';' if there're multiple labels. | `string` | `true`   | `N/A`                                                                           |
| `issueNumber`       | The number of the issue.                                                        | `number` | `true`  | `N/A`


## Example

### Remove labels from issue

```yaml
jobs:
  add_labels:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: szollarp/remove-label-from-issue-action@v1
        with:
          token: ${{ secrets.github_token }}
          labels: fix;build
          issueNumber: 100
```

<!-- badge links -->

[actions-workflow-test]: https://github.com/szollarp/remove-label-from-issue-action/actions?query=workflow%3Aunits-test
[actions-workflow-test-badge]: https://img.shields.io/github/workflow/status/szollarp/remove-label-from-issue-action/units-test?label=Test&style=for-the-badge&logo=github

[release]: https://github.com/szollarp/remove-label-from-issue-action/releases
[release-badge]: https://img.shields.io/github/v/release/szollarp/remove-label-from-issue-action?style=for-the-badge&logo=github
