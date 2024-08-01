#!/usr/bin/env node

const { execSync } = require("child_process");
const { detect } = require("detect-package-manager");

const args = process.argv.slice(2).join(" ");

try {
  detect().then((pm) => {
    execSync(`${pm} ${args}`, { stdio: "inherit" });
  });
} catch (error) {
  console.error(`Failed to execute command: npm ${args}`);
  process.exit(1);
}
