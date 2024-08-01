# package-manager-cli

One command to use any* package manager.

## Install

```
npm install -g package-manager-cli
```

## Usage

Go to any Node.js project and just use `pm` instead of *(`yarn`, `npm`, `pnpm`, or `bun`).

Considerations:
1. When there's yarn.lock, package-lock.json, pnpm-lock.yaml, or bun.lockb in current working directory, it will skip other operations and directly resolve yarn, npm, pnpm, or bun.
2. When there's no lockfile found, it checks if yarn, pnpm, or bun command exists. If so, it resolves yarn, pnpm, or bun otherwise npm.
3. Results are cached.