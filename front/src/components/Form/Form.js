import React from "react";
import Button from "../Button/Button";

const Form = (props) => {
	return (
		// className={"header"}
		<div className="buttons-block">
			<input id className="display" type="text" disabled value="test test test" />

			<Button id="option_1" className="neon-button">Option 1</Button>
			<Button id="option_2" className="neon-button">Option 2</Button>
			<Button id="option_2" className="neon-button">Option 2</Button>
			
		</div>
	);
};

export default Form;
