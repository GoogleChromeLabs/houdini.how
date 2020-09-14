import { h } from '/@npm/preact';
import { useState, useRef } from '/@npm/preact/hooks';

export default function lazy(load) {
	let p, c;
	return props => {
		if (!p) p = load().then(m => ((c = (m && m.default) || m), 1));
		const [, update] = useState(0);
		const r = useRef(c);
		if (!r.current) r.current = p.then(update);
		return h(c, props);
	};
}
