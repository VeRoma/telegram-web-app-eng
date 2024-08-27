import React from "react";

const Form = (props) => {
	return (
		// className={"header"}
		<div className="buttons-block">
			<input id className={"display"} type="text" disabled />

			<button id="option_1" className="neon-button">option_1</button>

			<button id="option_2" className="neon-button">option_2</button>

			<button id="option_3" className="neon-button">option_3</button>
		</div>
	);
};

export default Form;
