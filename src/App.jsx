import './App.css';
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import { Route, Routes } from 'react-router-dom'
import { RulesUser } from "./pages/RulesUser";
import { ChoiseClass } from "./pages/ChoiseClass";
import { ChoiseCity } from "./pages/ChoiseCity";
import { ChoiseSchool } from "./pages/ChoiseSchool";
import { Questions } from "./pages/Questions";
import { PostGame } from "./pages/PostGame";
import { PayAdd } from "./pages/PayAdd";
import { Shop } from "./pages/Shop";
import { ShopCrushOption } from './pages/ShopCrushOption';




function App() {
    const { onToggleButton, tg } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<RulesUser />} />
                <Route path={'/choiseClass'} element={<ChoiseClass />} />
                <Route path={'/choiseCity'} element={<ChoiseCity />} />
                <Route path={'/choiseSchool'} element={<ChoiseSchool />} />
                <Route path={'/questions'} element={<Questions />} />
                <Route path={'/postgame'} element={<PostGame />} />
                <Route path={'/payadd'} element={<PayAdd />} />
                <Route path={'/shop'} element={<Shop />} />
                <Route path={'/shopcrushoption'} element={<ShopCrushOption />} />
            </Routes>
        </div>
    );
}

export default App;