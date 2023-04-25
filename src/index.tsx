import React from 'react';
import ReactDOM from 'react-dom/client';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import {Provider} from "react-redux";
import store from './redux/store/store';
import '@shopify/polaris/build/esm/styles.css';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <AppProvider i18n={enTranslations}>
        <App />
    </AppProvider> 
  </Provider>
 ) 