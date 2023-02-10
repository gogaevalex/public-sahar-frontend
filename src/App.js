import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Header} from "./components/Header";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import {ProductList} from "./components/ProductList";
import {Form} from "./components/Form";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    const onClose = () => {
        tg.close();
    }

    return <div>
        <span style={{color: "red"}}>
            yeufuifhbieru
        </span>
        <button onClick={onClose}>закрыть</button>
    </div>

    // return (
    //     <BrowserRouter>
    //         <div className="App">
    //             <Header />
    //             <Routes>
    //                 <Route index element={<ProductList />}/>
    //                 <Route path={'form'} element={<Form />}/>
    //             </Routes>
    //         </div>
    //     </BrowserRouter>
    // );
}

export default App;