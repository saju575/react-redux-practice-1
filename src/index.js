import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import counterStore from "./app/counterStore";

ReactDOM.render(
	<Provider store={counterStore}>
		<App />
	</Provider>,
	document.getElementById("root")
);
