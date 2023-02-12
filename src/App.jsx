import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from 'react-router-dom'
import {RulesUser} from "./pages/RulesUser";
import {ChoiseClass} from "./pages/ChoiseClass";
import {ChoiseCity} from "./pages/ChoiseCity";
import {ChoiseSchool} from "./pages/ChoiseSchool";



function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<RulesUser />}/>
                <Route path={'/choiseClass'} element={<ChoiseClass />}/>
                <Route path={'/choiseCity'} element={<ChoiseCity />}/>
                <Route path={'/choiseSchool'} element={<ChoiseSchool />}/>
            </Routes>
        </div>
    );
}

export default App;