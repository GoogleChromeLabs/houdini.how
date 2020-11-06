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

import { h, createContext, cloneElement } from 'preact';
import { useContext, useMemo, useReducer, useEffect, useRef } from 'preact/hooks';

const UPDATE = (state, url, push) => {
	if (url && url.type === 'click') {
		const link = url.target.closest('a[href]');
		if (!link || link.origin != location.origin) return state;
		url.preventDefault();
		push = true;
		url = link.href.replace(location.origin, '');
	} else if (typeof url !== 'string') url = location.pathname + location.search;
	if (push === true) history.pushState(null, '', url);
  else if (push === false) history.replaceState(null, '', url);
	return url;
};

export function Loc(props) {
	const [url, route] = useReducer(UPDATE, location.pathname + location.search);
	const value = useMemo(() => {
		const u = new URL(url, location.origin);
		return { url, path: u.pathname, query: Object.fromEntries(u.searchParams), route };
	}, [url]);
	useEffect(() => {
		addEventListener('click', route);
		addEventListener('popstate', route);
		return () => {
			removeEventListener('click', route);
			removeEventListener('popstate', route);
		};
	});
	return h(Loc.ctx.Provider, { value }, props.children);
}

export function Router(props) {
	const [, update] = useReducer(c => c + 1, 0);
	const loc = useLoc();
	const { url, path, query } = loc;
	const cur = useRef(loc);
	const prev = useRef();
	const curChildren = useRef();
	const prevChildren = useRef();
	const pending = useRef();
	if (url !== cur.current.url) {
		pending.current = null;
		prev.current = cur.current;
		prevChildren.current = curChildren.current;
		cur.current = loc;
	}
	this.componentDidCatch = err => {
		if (err && err.then) pending.current = err;
	};
	useEffect(() => {
		let p = pending.current;
		const commit = () => {
			if (cur.current.url !== url || pending.current !== p) return;
			if (props.onLoadEnd) props.onLoadEnd(url);
			prev.current = prevChildren.current = null;
			update(0);
		};
		if (p) {
			if (props.onLoadStart) props.onLoadStart(url);
			p.then(commit);
		} else commit();
	}, [url]);
	const children = [].concat(...props.children);
	let a = children.filter(c => c.props.path === path);
	if (a.length == 0) a = children.filter(c => c.props.default);
	curChildren.current = a.map((p, i) => cloneElement(p, { path, query }));
	return curChildren.current.concat(prevChildren.current || []);
}

Loc.Router = Router;

Loc.ctx = createContext(/** @type {{ url: string, path: string, query: object, route }} */ ({}));

export const useLoc = () => useContext(Loc.ctx);

export function Link({ activeClassName, ...props }) {
	const { path } = useLoc();
	let className = props.class;
	if (props.href === path) {
		className += ' ' + activeClassName;
	}
	return (
		<a {...props} class={className} />
	);
}
