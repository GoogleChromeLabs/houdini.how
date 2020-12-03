import { useLoc } from 'preact-iso/router'

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
