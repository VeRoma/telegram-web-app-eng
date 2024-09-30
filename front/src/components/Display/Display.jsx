import { Dict } from "../Dict/Dict";
import "./Display.css";
import React from "react";

const Display = (props) => {
	const { data } = Dict();

	if (!data) {
		return <div className="display">Загрузка данных...</div>;
	}

	console.log(data);

	return (
		<div className="display">
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
		</div>
	);
};

export default Display;
