#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('node:path');
const fs = require('node:fs');

// This will create the new project by cloning your template repo
const repoUrl = 'https://github.com/findsakshat/ts-express-starter.git';
const projectName = process.argv[2] || 'my-ts-express-app'; // Default to 'my-ts-express-app' if no name provided

// Run the command to clone the repo
console.log(`Creating a new project named ${projectName} from ${repoUrl}...`);
execSync(`git clone ${repoUrl} ${projectName}`, { stdio: 'inherit' });

// Navigate to the new directory
process.chdir(projectName);

// Install dependencies
console.log(`Installing dependencies...`);
execSync('npm install', { stdio: 'inherit' });

// Notify user
console.log(`
Project ${projectName} has been created successfully!

To get started, run the following commands:
cd ${projectName}
npm run dev
`);

