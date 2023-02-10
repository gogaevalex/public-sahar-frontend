import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Header} from "./components/Header";
import {Route, Routes} from 'react-router-dom'
import {RulesUser} from "./pages/RulesUser";
import {ChoiseClass} from "./pages/ChoiseClass";
import {Form} from "./components/Form";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    const onClose = () => {
        tg.close();
    }

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<RulesUser />}/>
                <Route path={'choiseClass'} element={<ChoiseClass />}/>
                <Route path={'form'} element={<Form />}/>
            </Routes>
        </div>
    );
}

export default App;