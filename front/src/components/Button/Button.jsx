import "./Button.css";
import React from "react";

const Button = (props) => {
	return <button {...props} className={"button"}/>;
	// return <button {...props} className={"button " + props.className} />;
};

export default Button;
