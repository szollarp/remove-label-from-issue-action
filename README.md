# Action Remove Labels

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