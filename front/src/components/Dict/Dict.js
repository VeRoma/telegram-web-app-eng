import React, { useEffect, useState } from "react";

const Dict = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch("./engF2000.json")
			.then((response) => response.json())
			.then((jsonData) => setData(jsonData))
			.catch((error) =>
				console.error("Ошибка при загрузке JSON:", error)
			);
	}, []);

	return (
		<div>
			<h1>Данные из JSON файла</h1>
			{data ? (
				<pre>{JSON.stringify(data, null, 2)}</pre>
			) : (
				<p>Ззззз...</p>
			)}
		</div>
	);
};

export default Dict;
