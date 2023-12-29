/**
 * This is a minimal script to publish your package to "npm".
 * This is meant to be used as-is or customize as you see fit.
 *
 * This script is executed on "dist/path/to/library" as "cwd" by default.
 *
 * You might need to authenticate with NPM before running this script.
 */

import { execSync } from 'child_process';
import { readFileSync, copyFileSync } from 'fs';

import devkit from '@nx/devkit';
const { readCachedProjectGraph } = devkit;

function getPublishedVersion(packageName) {
  try {
    return execSync(`npm view ${packageName} version`).toString().trim();
  } catch (error) {
    console.error('Error fetching published version:', error);
    return null;
  }
}

function invariant(condition, message) {
  if (!condition) {
    console.error(message);
    process.exit(1);
  }
}

// Executing publish script: node path/to/publish.mjs {name} --version {version} --tag {tag}
const [, , name] = process.argv;

const graph = readCachedProjectGraph();
const project = graph.nodes[name];

invariant(
  project,
  `Could not find project "${name}" in the workspace. Is the project.json configured correctly?`
);

const outputPath = project.data?.targets?.build?.options?.outputPath;
invariant(
  outputPath,
  `Could not find "build.options.outputPath" of project "${name}". Is project.json configured  correctly?`
);

const filesToCopy = ['README.md', '.npmrc'];

filesToCopy.forEach((file) => {
  copyFileSync(file, `${outputPath}/${file}`);
});

process.chdir(outputPath);

const json = JSON.parse(readFileSync(`package.json`, 'utf8').toString());
const publishedVersion = getPublishedVersion(json.name);

if (publishedVersion === json.version) {
  console.log(
    `Version ${publishedVersion} already published. Skipping publish.`
  );
  process.exit(0);
}

execSync(`npm publish --access public`);
