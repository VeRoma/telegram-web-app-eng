import { useEffect, useState } from "react";

export function Dict() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/engF2000.json")
            .then((response) => response.json())
            .then((jsonData) => {
                console.log("Данные успешно загружены:", jsonData);
                setData(jsonData);
            })
            .catch((error) =>
                console.error("Ошибка при загрузке JSON:", error)
            );
    }, []);

    return { data };
}

