const fs = require('fs');
const path = require('path');

// Load package.json
const packageJsonPath = path.join(__dirname, 'package.json');

fs.readFile(packageJsonPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading package.json:', err);
    return;
  }

  const packageJson = JSON.parse(data);
  const requiredNodeVersion = packageJson.engines?.node;

  if (!requiredNodeVersion) {
    console.log('No Node.js version specified in package.json.');
    return;
  }

  const currentNodeVersion = process.versions.node;

  console.log(`Current Node.js version: ${currentNodeVersion}`);
  console.log(`Required Node.js version: ${requiredNodeVersion}`);

  const [requiredMajor, requiredMinor, requiredPatch] = requiredNodeVersion
    .replace(/[^\d.]/g, '')
    .split('.')
    .map(Number);

  const [currentMajor, currentMinor, currentPatch] = currentNodeVersion
    .replace(/[^\d.]/g, '')
    .split('.')
    .map(Number);

  // Compare versions
  const isCompatible =
    currentMajor > requiredMajor ||
    (currentMajor === requiredMajor && currentMinor > requiredMinor) ||
    (currentMajor === requiredMajor && currentMinor === requiredMinor && currentPatch >= requiredPatch);

  if (isCompatible) {
    console.log('Node.js version is compatible. Proceeding with the start script...');
  } else {
    console.log('Your Node.js version is not compatible. Do you wish to continue? (y/n): ');

    // Using stdin to accept user input without external dependencies
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function (data) {
      const answer = data.trim().toLowerCase();
      if (answer === 'y') {
        console.log('Continuing with the start script...');
        process.exit(0); // Allow continuation
      } else {
        console.log('Stopping the process.');
        process.exit(1); // Exit and stop the process
      }
    });
  }
});
