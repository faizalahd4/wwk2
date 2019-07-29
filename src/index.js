/**
 * Copyright (c) 2019
 * Index
 * 
 * @summary Index
 * @author  Faizal
 * 
 * Created at: 2019 July 26
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import lang_en from './data/translations/en.json';
import lang_fr from './data/translations/fr.json';
import {Languages} from './scripts/constants/languages';
import * as serviceWorker from './serviceWorker';

i18next.init({
    interpolation: {escapeValue: false},
    ns: [Languages.DEFAULT_NS],
    defaultNS: Languages.DEFAULT_NS,
    lng: Languages.ENGLISH,
    resources: {
        en: {
            default: lang_en
        },
        de: {
            default: lang_fr
        },
    },
})
ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
