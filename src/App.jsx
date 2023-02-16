import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from 'react-router-dom'
import {RulesUser} from "./pages/RulesUser";
import {ChoiceClass} from "./pages/ChoiceClass";
import {ChoiceCity} from "./pages/ChoiceCity";
import {ChoiceSchool} from "./pages/ChoiceSchool";
import {ChoiceName} from "./pages/ChoiceName";
import {ChoiceFamily} from "./pages/ChoiceFamily";
import {ChoiceFriend} from "./pages/ChoiceFriend";
import {ChoiceGender} from "./pages/ChoiceGender";
import {ChoicePromo} from "./pages/ChoicePromo";
import {InfoBotPage} from "./pages/InfoBotPage";
import {NewsLinePage} from "./pages/NewsLinePage";




function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<RulesUser />}/>
                <Route path={'/choiceClass'} element={<ChoiceClass />}/>
                <Route path={'/choiceCity'} element={<ChoiceCity />}/>
                <Route path={'/choiceSchool'} element={<ChoiceSchool />}/>
                <Route path={'/choiceName'} element={<ChoiceName />}/>
                <Route path={'/choiceFamily'} element={<ChoiceFamily />}/>
                <Route path={'/choiceFriend'} element={<ChoiceFriend />}/>
                <Route path={'/choiceGender'} element={<ChoiceGender />}/>
                <Route path={'/choicePromo'} element={<ChoicePromo />}/>
                <Route path={'/infoBot'} element={<InfoBotPage />}/>
                <Route path={'/newsline'} element={<NewsLinePage />}/>
            </Routes>
        </div>
    );
}

export default App;