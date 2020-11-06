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

import { h } from 'preact';
import { useState, useRef } from 'preact/hooks';

export default function lazy(load) {
	let p, c;
	return props => {
		if (!p) p = load().then(m => ((c = (m && m.default) || m), 1));
		const [, update] = useState(0);
		const r = useRef(c);
		if (!r.current) r.current = p.then(update);
		if (c === undefined) throw p;
		return h(c, props);
	};
}

export function ErrorBoundary(props) {
	this.componentDidCatch = absorb;
	return props.children;
}
function absorb(err) {
	if (err && err.then) this.__d = true;
	else if (this.props.onError) this.props.onError(err);
}
