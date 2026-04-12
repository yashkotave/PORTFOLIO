const fs = require('fs');
const path = require('path');

const basePath = 'd:\\MY SPACE\\MERN PROJECTS\\FULL STACK\\PORTFOLIO';
const directories = [
    'client\\src\\config',
    'client\\src\\components',
    'client\\public',
    'server\\models',
    'server\\routes'
];

directories.forEach(dir => {
    const fullPath = path.join(basePath, dir);
    try {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(`✓ Created: ${fullPath}`);
    } catch (err) {
        console.error(`✗ Error creating ${fullPath}: ${err.message}`);
    }
});

console.log('\n✓ Folder structure created successfully!');
