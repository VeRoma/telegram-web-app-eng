import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

function App() {
    const { onToggleButton, tg } = useTelegram();

    useEffect(() => {
        tg.ready();
        tg.expand();  // Перенесли сюда
    }, [tg]);

    return (
        <div className="App">
            <Header />
            test
            <Form />
        </div>
    );
}

export default App;
