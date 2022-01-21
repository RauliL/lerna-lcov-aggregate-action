# LCOV code coverage aggregator for Lerna monorepos GitHub action

[GitHub action] which executes [lerna-lcov-aggregate].

[GitHub action]: https://docs.github.com/en/actions
[lerna-lcov-aggregate]: https://www.npmjs.com/package/lerna-lcov-aggregate

## Usage example

This example runs `npm run test:coverage` at the root of [Lerna] monorepo, then
aggregates LCOV results from all packages into single file and finally pushes
the result into [Coveralls].

[Lerna]: https://lerna.js.org
[Coveralls]: https://coveralls.io

```yaml
on: ["push", "pull_request"]

name: Test

jobs:

  build:
    name: Build
    runs-on: ubuntu-latest
    steps:

    - uses: actions/checkout@v1

    - name: Use Node.js 12.x
      uses: actions/setup-node@v1
      with:
        node-version: 12.x

    - name: npm install, npm run test:coverage
      run: |
        npm install
        npm run test:coverage

    - name: Aggregate LCOV results
      uses: RauliL/lerna-lcov-aggregate-action@master

    - name: Coveralls
      uses: coverallsapp/github-action@master
      with:
        github-token: ${{ secrets.GITHUB_TOKEN }}
```
