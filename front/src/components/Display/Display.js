import { Dict } from "../Dict/Dict";

import "./Display.css";
import React from "react";

const Display = (props) => {
	const { data } = Dict();
	return <div className="display">data:{data}</div>;
};

export default Display;
