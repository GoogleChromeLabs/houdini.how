const fs = require('fs');
const JSON5 = require('json5');
process.chdir(__dirname);
async function build() {
  const files = fs.readdirSync('.').filter(f => f.endsWith('.json'));
  const list = files.map(f => JSON5.parse(fs.readFileSync(f, 'utf-8')), []);
  list.sort((a, b) => new Date(b.pubDate || 0).getTime() - new Date(a.pubDate || 0).getTime());
  fs.writeFileSync('../public/resource-data.js', `// this file is auto-generated\nexport default ${JSON5.stringify(list, null, 2)}`);
}
build();
if (process.argv.includes('watch')) fs.watch('.').on('change', build);
