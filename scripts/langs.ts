import githubColors from '@site/github_colors.json';
import fs from 'fs';

const content = Object.entries(githubColors).map(i => ({ lang: i[0], ...i[1] }));
fs.writeFileSync('src/github/colors.json', JSON.stringify(content, null, 2));
console.log('src/github/colors.json Done!')