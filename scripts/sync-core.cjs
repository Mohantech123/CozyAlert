const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');
const destDir = path.join(__dirname, '../angular-workspace/projects/cozy-popup/src/lib/core');

const mainReadme = path.join(__dirname, '../README.md');
const angularLibReadme = path.join(__dirname, '../angular-workspace/projects/cozy-popup/README.md');
const angularRootReadme = path.join(__dirname, '../angular-workspace/README.md');

const rootPackageJson = path.join(__dirname, '../package.json');
const angularLibPackageJson = path.join(__dirname, '../angular-workspace/projects/cozy-popup/package.json');

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

// Also copy the README.md so the Angular NPM package has the same documentation
if (fs.existsSync(mainReadme)) {
  fs.copyFileSync(mainReadme, angularLibReadme);
  fs.copyFileSync(mainReadme, angularRootReadme);
  console.log('📄 Synced README.md!');
}

// Auto-sync version number
if (fs.existsSync(rootPackageJson) && fs.existsSync(angularLibPackageJson)) {
  const rootData = JSON.parse(fs.readFileSync(rootPackageJson, 'utf8'));
  const libData = JSON.parse(fs.readFileSync(angularLibPackageJson, 'utf8'));
  
  if (libData.version !== rootData.version) {
    libData.version = rootData.version;
    fs.writeFileSync(angularLibPackageJson, JSON.stringify(libData, null, 2), 'utf8');
    console.log(`📦 Synced package version to ${rootData.version}!`);
  }
}

console.log('✅ Sync complete!');
