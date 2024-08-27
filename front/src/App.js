import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

function App() {
	const { onToggleButton, tg } = useTelegram();

	useEffect(() => {
		tg.ready();
	}, [tg]);

	// tg.expand();

	return (
		<div className="App">
			<Header />
			<button onClick={onToggleButton}>
				default button - show toggle from App.js
			</button>
			<Form />
		</div>
	);
}

export default App;
