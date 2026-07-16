const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');
const destDir = path.join(__dirname, '../angular-workspace/projects/cozy-popup/src/lib/core');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(function (childItemName) {
      copyRecursiveSync(path.join(src, childItemName),
        path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('🔄 Syncing core CozyAlert source to Angular workspace...');
// Clean destination first to remove deleted files
if (fs.existsSync(destDir)) {
  fs.rmSync(destDir, { recursive: true, force: true });
}
copyRecursiveSync(srcDir, destDir);
console.log('✅ Sync complete!');
