const fs = require('fs');
process.chdir(__dirname);
async function build() {
	const files = fs.readdirSync('.').filter(f => f.endsWith('.json'));
	const list = files.map(f => `\n"${f.replace('.json','')}": ${fs.readFileSync(f, 'utf-8')}`);
	fs.writeFileSync('../public/worklet-data.js', `// this file is auto-generated\nexport default {${list}\n}`);
}
build();
if (process.argv.includes('watch')) fs.watch('.').on('change', build);