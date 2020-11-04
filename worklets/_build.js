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
const compatData = require('./_compat-data.json');
process.chdir(__dirname);

// const browsershare = {
//   chrome: 66.34,
//   safari: 16.73,
//   firefox: 4.09,
//   samsung: 3.23,
//   edge: 2.61,
//   opera: 2.06,
//   uc: 1.23,
//   ie: 1.19,
//   edge_legacy: 0.52,
//   other: 2,
//   polyfill: 0
// };
// browsershare.polyfill = browsershare.firefox + browsershare.safari + browsershare.edge_legacy + browsershare.uc;

async function build() {
  const files = fs.readdirSync('.').filter(f => f[0] !== '_' && f.endsWith('.json'));
  const list = files.map(f => {
    const data = JSON5.parse(fs.readFileSync(f, 'utf-8'));
    const apis = [...new Set([].concat(data.tags || [], data.apis || []).map(mush))];
    const compat = apis.map(getCompatData).filter(Boolean);
    data.compat = {
      // percent: Number(compat.map(c => c.percent).reduce(Math.min).toFixed(2)),
      browsers: compat.map(c => c.browsers).reduce((a, b) => a.filter(x => b.includes(x))),
      versions: compat.reduce((acc, b) => {
        const vs = b.versions;
        for (let i in acc) if (vs[i] == null) acc[i] = undefined;
        for (let i in vs) {
          const v = vs[i];
          if (typeof v === 'string') {
            acc[i] = v.replace(/^(Canary|Preview|Beta|Developer|Nightly)$/i, 'WIP');
          }
          else {
            acc[i] = Math.min(acc[i] || v, v);
          }
        }
        return acc;
      }, {})
    }
    return data;
  });
  list.sort(() => Math.random() - 0.5);
  fs.writeFileSync('../public/worklet-data.js', `// this file is auto-generated\nexport default ${JSON5.stringify(list, null, 2)}`);
}

const mush = s => s.toLowerCase().replace(/(?:\W+|css|api|ing)/g, '');

function getCompatData(apiName) {
  let name = mush(apiName);
  for (const api of compatData.api) {
    if (mush(api.name) === apiName || mush(api.tag) === apiName) {
      name = api.tag;
      break;
    }
  }
  const status = compatData.status[name];
  if (!status) return false;
  let browsers = Object.keys(status);
  if (browsers.length === 0) return false;
  // let percent = 0;
  const versions = {};
  browsers = browsers.filter(browser => {
    const { completeness, since } = status[browser];
    if (completeness !== 'yes' && completeness !== 'partially') return false;
    // percent += browsershare[browser];
    const v = since && since.match(/[\d.]+/g);
    versions[browser] = v && v[0] || since;
    return true;
  });
  // return { percent, browsers, versions };
  return { browsers, versions };
}


build();
if (process.argv.includes('watch')) fs.watch('.').on('change', build);
