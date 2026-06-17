var os = require('os');
console.log('--- OPERATING SYSTEM INFO ---');
// 1. Get the OS Platform (e.g., 'darwin' for Mac, 'win32' for Windows, 'linux')
console.log(`Platform: ${os.platform()}`);
// 2. Get CPU Architecture (e.g., 'x64' or 'arm64')
console.log(`Architecture: ${os.arch()}`);
// 3. Check System Memory (Convert bytes to Gigabytes for readability)
const freeMemoryGB = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
const totalMemoryGB = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
console.log(`Memory: ${freeMemoryGB} GB free out of ${totalMemoryGB} GB total`);
// 4. Get Current User Info
console.log(`Current User: ${os.userInfo().username}`);