import React from "react";
import Button from "../Button/Button";
import Display from "../Display/Display";

const Form = (props) => {
	return (
		// className={"header"}
		<div>
			<Display />
			<div className="buttons-block">
				<Button id="option_1" className="neon-button">
					Option 1
				</Button>
				<Button id="option_2" className="neon-button">
					Option 2
				</Button>
				<Button id="option_2" className="neon-button">
					Option 2
				</Button>
			</div>
		</div>
	);
};

export default Form;
