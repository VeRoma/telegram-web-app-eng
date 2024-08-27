import { useEffect, useState } from "react";
let dataDict=0;
export function Dict() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch("/engF2000.json")
			.then((response) => response.json())
			.then((jsonData) => setData(jsonData))
			.catch((error) =>
				console.error("Ошибка при загрузке JSON:", error)
			);
	}, []);

	return data ? (dataDict = data) : (dataDict = 0)

}

