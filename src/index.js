import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux'
import { configureStore } from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();


root.render(
  // <React.StrictMode>
	  <BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	  </BrowserRouter>
  // </React.StrictMode>
);
