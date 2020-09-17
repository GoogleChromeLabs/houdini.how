import { render } from 'preact';
import App from './components/app.js';

// So... sometimes we load paint worklets on the main thread, which is bad, but this hack copies them into a worklet.
self.registerPaint = function(name, painter) {
	const code = `registerPaint(${JSON.stringify(name)}, ${Function.prototype.toString.call(painter)})`;
	CSS.paintWorklet.addModule(URL.createObjectURL(new Blob([code], {type:'application/javascript'})));
};

render(<App />, document.body);
