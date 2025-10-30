const fs = require('fs');
const path = require('path');

// Define the categories with their correct paths
const categories = [
  { name: 'Action', file: 'html/action.html' },
  { name: 'Adventure', file: 'html/adventure.html' },
  { name: 'Battle Royale', file: 'html/battle-royale.html' },
  { name: 'Casual/Party', file: 'html/casual-party.html' },
  { name: 'Fighting', file: 'html/fighting.html' },
  { name: 'Indie', file: 'html/indie.html' },
  { name: 'Metroidvania', file: 'html/metroidvania.html' },
  { name: 'MMORPG', file: 'html/mmorpg.html' },
  { name: 'Puzzle', file: 'html/puzzle.html' },
  { name: 'Racing', file: 'html/racing.html' },
  { name: 'Rhythm/Music', file: 'html/rhythm-music.html' },
  { name: 'Roguelike/Roguelite', file: 'html/roguelike.html' },
  { name: 'RPG', file: 'html/rpg.html' },
  { name: 'Shooter', file: 'html/shooter.html' },
  { name: 'Simulation/Strategy', file: 'html/simulation-strategy.html' },
  { name: 'Sports', file: 'html/sports.html' },
  { name: 'Strategy', file: 'html/strategy.html' },
  { name: 'Survival/Horror', file: 'html/survival-horror.html' },
  { name: 'Visual Novels', file: 'html/visual-novels.html' }
];

// Define the platforms with their correct paths
const platforms = [
  { name: 'PC (Windows)', file: 'html/pc.html' },
  { name: 'PlayStation 5', file: 'html/playstation5.html' },
  { name: 'Xbox Series X|S', file: 'html/xbox-series.html' },
  { name: 'Nintendo Switch', file: 'html/switch.html' },
  { name: 'Mobile (iOS/Android)', file: 'html/mobile.html' },
  { name: 'VR/AR', file: 'html/vr-ar.html' },
  { name: 'Cloud Gaming', file: 'html/cloud-gaming.html' }
];

// Function to generate the categories dropdown HTML
function generateCategoriesDropdown(currentFile) {
  let dropdown = '<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="categoriesDropdown">\n';
  
  categories.forEach(category => {
    // For index.html, use direct paths
    let href = currentFile === 'index.html' 
      ? category.file 
      : '../' + category.file;
    
    const isActive = currentFile === category.file.split('/').pop() ? ' active' : '';
    dropdown += `        <li><a class="dropdown-item${isActive}" href="${href}">${category.name}</a></li>\n`;
  });
  
  dropdown += '      </ul>';
  return dropdown;
}

// Function to generate the platforms dropdown HTML
function generatePlatformsDropdown(currentFile) {
  let dropdown = '<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="consolesDropdown">\n';
  
  platforms.forEach(platform => {
    // For index.html, use direct paths
    let href = currentFile === 'index.html' 
      ? platform.file 
      : '../' + platform.file;
    
    dropdown += `        <li><a class="dropdown-item" href="${href}">${platform.name}</a></li>\n`;
  });
  
  dropdown += '      </ul>';
  return dropdown;
}

// Function to update navigation in a file
function updateNavigationInFile(filePath) {
  try {
    const fileName = path.basename(filePath);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update categories dropdown
    const categoriesDropdown = generateCategoriesDropdown(fileName);
    content = content.replace(
      /<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="categoriesDropdown">[\s\S]*?<\/ul>/,
      categoriesDropdown
    );
    
    // Update platforms dropdown
    const platformsDropdown = generatePlatformsDropdown(fileName);
    content = content.replace(
      /<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="consolesDropdown">[\s\S]*?<\/ul>/,
      platformsDropdown
    );
    
    // Update home link
    const homeLink = fileName === 'index.html' 
      ? 'index.html' 
      : '../index.html';
    
    content = content.replace(
      /<a class="nav-link text-white fw-bold" href="[^"]*"><i class="bi bi-house-fill me-1"><\/i> Home<\/a>/,
      `<a class="nav-link text-white fw-bold" href="${homeLink}"><i class="bi bi-house-fill me-1"></i> Home</a>`
    );
    
    // Update logo link
    const logoLink = fileName === 'index.html' 
      ? 'index.html' 
      : '../index.html';
    
    content = content.replace(
      /<a class="navbar-brand" href="[^"]*">/,
      `<a class="navbar-brand" href="${logoLink}">`
    );
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to process all HTML files
function processHtmlFiles(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-html directories
      if (file !== 'node_modules' && !file.startsWith('.')) {
        processHtmlFiles(filePath);
      }
    } else if (path.extname(file).toLowerCase() === '.html') {
      updateNavigationInFile(filePath);
    }
  });
}

// Start processing from the root directory
const rootDir = path.join(__dirname);
console.log('Updating navigation links...');
processHtmlFiles(rootDir);
console.log('Navigation links updated successfully!');
