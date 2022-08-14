import githubColors from '@site/github_colors.json';
import fs from 'fs';

fs.writeFileSync('src/github/colors.json', JSON.stringify({
  map: Object.keys(githubColors).reduce((a, b) => ({ ...a, [b]: githubColors[b].color }), {}),
  list: [{ lang: 'All Languages', color: '#fff' }, ...Object.entries(githubColors).map(i => ({ lang: i[0], ...i[1] }))],
}, null, 2));
console.log('src/github/colors.json Done!')