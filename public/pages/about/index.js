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

import pageStyle from '../style.module.css';
import style from './style.module.css';

export default function AboutPage() {
	return (
		<div>
			<div class={pageStyle.container}>
				<h3>What is Houdini?</h3>
				<p>Houdini is a set of low-level APIs that exposes parts of the CSS engine, giving developers the power to extend CSS by hooking into the styling and layout process of a browser’s rendering engine. Houdini is a group of APIs that give developers direct access to the CSS Object Model (CSSOM), enabling developers to write code the browser can parse as CSS, thereby creating new CSS features without waiting for them to be implemented natively in browsers. —<a href="https://developer.mozilla.org/en-US/docs/Web/Houdini">[MDN]</a></p>
				<h3>Houdini APIs</h3>
				<p>CSS Houdini includes the following APIs, in order of support:</p>
				<ul class={style.apiList}>
					<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API">Typed Object Model: </a>Enables the browser to understand CSS and typed Javascript objects instead of strings, enabling faster parse times and more semantic manipulation.</li>
					<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/CSS_Properties_and_Values_API">Properties and Values API: </a>Enables developers to define advanced CSS cutom properties with syntax (type checking), default values, and inheritance.</li>
					<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API">Paint Worklet: </a>Enables developers to define canvas-like custom painting functions that can be used directly in CSS as backgrounds, borders, masks, and more.</li>
					<li><a href="https://developers.google.com/web/updates/2018/10/animation-worklet">Animation Worklet: </a>Enables animations to hook into the GPU to avoid jank and not clog the main thread. The Animation Worklet also enables scoll-linked animations.</li>
					<li><a href="https://www.w3.org/TR/css-layout-api-1/">Layout Worklet: </a>Gives web developers the ability to write their own layout algorithms in addition to the native algorithms user agents ship with today.</li>
					<li><a href="https://drafts.css-houdini.org/font-metrics-api/">Font Metrics API: </a>Designed to provide basic font metrics for both in-document and out-of-document content</li>
					<li><a href="https://github.com/WICG/css-parser-api">Parser API: </a>Allows developers to access the engine's parser (built on top of the Typed OM)</li>
				</ul>

				<h3>Browser Support and Status</h3>
				<iframe class={style.iframe} src="https://ishoudinireadyyet.com" />
			</div>
		</div>
	);
}
