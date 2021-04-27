#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Laravel Valet
// @raycast.mode fullOutput
// @raycast.packageName Raycast Scripts
//
// Optional parameters:
// @raycast.icon 🅿️
// @raycast.argument1 { "type": "text", "placeholder": "start, stop, restart"}
//
// Documentation:
// @raycast.description Open Whereby rooms in the browser
// @raycast.author Thomas van der Westen
// @raycast.authorURL https://github.com/tdwesten

const { exec } = require('child_process');
let [params] = process.argv.slice(2);

console.log(`Running "valet ${params}"...`);

exec(`valet ${params}`, function (error, stdout, stderr) {
  if (!stderr) {
    console.log(stdout);
  } else {
    console.log(stderr);
  }
});
