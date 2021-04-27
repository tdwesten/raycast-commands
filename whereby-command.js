#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Whereby
// @raycast.mode silent
// @raycast.packageName Open a Whereby room
//
// Optional parameters:
// @raycast.icon https://whereby.com/favicon.ico
// @raycast.argument1 { "type": "text", "placeholder": "Room"}
//
// Documentation:
// @raycast.description Open Whereby rooms in the browser
// @raycast.author Thomas van der Westen
// @raycast.authorURL https://github.com/tdwesten

const { exec } = require('child_process');
let [room] = process.argv.slice(2);

if (room != 'pixelpillow') {
  room = `pp-${room}`;
}

let url = `https://whereby.com/${room}`;

exec(`open "${url}"`);
