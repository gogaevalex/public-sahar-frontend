import './App.css';
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import { Route, Routes } from 'react-router-dom'
import { RulesUser } from "./pages/RulesUser";
import { ChoiceClass } from "./pages/ChoiceClass";
import { ChoiceCity } from "./pages/ChoiceCity";
import { ChoiceSchool } from "./pages/ChoiceSchool";
import { ChoiceName } from "./pages/ChoiceName";
import { ChoiceFamily } from "./pages/ChoiceFamily";
import { ChoiceFriend } from "./pages/ChoiceFriend";
import { ChoiceGender } from "./pages/ChoiceGender";
import { ChoicePromo } from "./pages/ChoicePromo";
import { InfoBotPage } from "./pages/InfoBotPage";
import { NewsLinePage } from "./pages/NewsLinePage";
import { Questions } from "./pages/Questions";
import { PostGame } from "./pages/PostGame";
import { PostGameCoins } from "./pages/PostGameCoins";
import { PostGameStart } from "./pages/PostGameStart";
import { PayAdd } from "./pages/PayAdd";
import { Shop } from "./pages/Shop";
import { ShopCrushOption } from './pages/ShopCrushOption';
import { NewCompliments } from './pages/NewCompliments';
import { NewComplimentsDetails } from './pages/NewComplimentsDetails';
import { People } from './pages/People';
import { Profile } from './pages/Profile';
import { Feed } from './pages/Feed';
import { AuthVK } from './pages/AuthVK';



function App() {
    const { onToggleButton, tg } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<RulesUser />} />
                <Route path={'/choiceClass'} element={<ChoiceClass />} />
                <Route path={'/choiceCity'} element={<ChoiceCity />} />
                <Route path={'/choiceSchool'} element={<ChoiceSchool />} />
                <Route path={'/choiceName'} element={<ChoiceName />} />
                <Route path={'/choiceFamily'} element={<ChoiceFamily />} />
                <Route path={'/choiceFriend'} element={<ChoiceFriend />} />
                <Route path={'/choiceGender'} element={<ChoiceGender />} />
                <Route path={'/choicePromo'} element={<ChoicePromo />} />
                <Route path={'/infoBot'} element={<InfoBotPage />} />
                <Route path={'/newsline'} element={<NewsLinePage />} />
                <Route path={'/questions'} element={<Questions />} />
                <Route path={'/postgame'} element={<PostGame />} />
                <Route path={'/postgame/start'} element={<PostGameStart />} />
                <Route path={'/postgame/coins'} element={<PostGameCoins />} />
                <Route path={'/payadd'} element={<PayAdd />} />
                <Route path={'/shop'} element={<Shop />} />
                <Route path={'/shopcrushoption'} element={<ShopCrushOption />} />
                <Route path={'/newcompliments'} element={<NewCompliments />} />
                <Route path={'/newcomplimentsdetails/:id'} element={<NewComplimentsDetails />} />
                <Route path={'/people'} element={<People />} />
                <Route path={'/profile'} element={<Profile />} />
                <Route path={'/feed'} element={<Feed />} />
                <Route path={'/authvk'} element={<AuthVK />} />

            </Routes>
        </div>
    );
}

export default App;