name: Lighthouse

on: [push]

jobs:
  lhci:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Use Node.js 14.x
        uses: actions/setup-node@v1
        with:
          node-version: 14.x
      - name: Prepare LHCI
        run: npm install -g @lhci/cli@0.4.x
      - name: Install
        run: npm ci
      - name: Build
        run: npm run ci
      - name: LHCI
        run: lhci autorun --upload.target=temporary-public-storage --collect.url="http://localhost:8080" --collect.startServerCommand="npm run serve:prod" --upload.githubAppToken=${{ secrets.LHCI_GITHUB_APP_TOKEN }}
