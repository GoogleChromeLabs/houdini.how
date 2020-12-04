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

import hydrate from 'preact-iso/hydrate'
import App from './components/app.js'

if (typeof window !== 'undefined') {
  // So... sometimes we load paint worklets on the main thread, which is bad, but this hack copies them into a worklet.
  self.registerPaint = function(name, painter) {
    const code = `registerPaint(${JSON.stringify(name)}, ${Function.prototype.toString.call(painter)})`
    CSS.paintWorklet.addModule(URL.createObjectURL(new Blob([code], {type:'application/javascript'})))
  }

  function init() {
    hydrate(<App />)
  }

  // ensure the paint polyfill is loaded before rendering:
  if (self.CSS && self.CSS.paintWorklet) init()
  else import('css-paint-polyfill').then(init)
}

export async function prerender(data) {
  const { default: prerender } = await import('preact-iso/prerender')
  return prerender(<App {...data} />)
}
