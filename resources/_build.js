/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
