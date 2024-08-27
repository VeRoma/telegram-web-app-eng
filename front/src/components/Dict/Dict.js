import React, { useEffect, useState } from "react";

const Dict = () => {
	const [data, setData] = useState(null);

	const fetchData = async () => {
		try {
			const response = await fetch("./engF2000.json");
			const jsonData = await response.json();
			setData(jsonData);
		} catch (error) {
			console.error("Ошибка при загрузке JSON:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<h1>Данные из JSON файла</h1>
			{data ? (
				<pre>{JSON.stringify(data, null, 2)}</pre>
			) : (
				<p>Загрузка...</p>
			)}
		</div>
	);
};

export default Dict;
