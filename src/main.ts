/**
 * This file is a part of Scrap, an educational programming language.
 * You should have received a copy of the MIT License, if not, please
 * visit https://opensource.org/licenses/MIT. To verify the code, visit
 * the official repository at https://github.com/tomas-wrobel/scrap.
 *
 * @license MIT
 * @author Tomáš Wróbel
 * @fileoverview Booting the Scrap app.
 */
import "./scss/*.scss";
import {App} from "@scrap/app";

window.MonacoEnvironment = {
	getWorker: () => new Worker(
		new URL("./monaco-editor/ts.worker.ts", import.meta.url), 
		{type: "module"}
	),
};

window.app = new App();
window.app.start();