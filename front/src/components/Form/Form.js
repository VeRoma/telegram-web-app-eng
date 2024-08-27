import React from "react";

const Form = (props) => {
	return (
		// className={"header"}
		<div className={"buttons-block"}>
			<input className={"display"} type="text" disabled />

			<button id="option_1" class="neon-button"></button>

			<button id="option_2" class="neon-button"></button>

			<button id="option_3" class="neon-button"></button>
		</div>
	);
};

export default Form;
