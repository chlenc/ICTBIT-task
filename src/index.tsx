import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {loadState, saveState} from "./utils/localStore";
import {autorun} from "mobx";
import {RootStore, storesContext} from "./stores";

const initState = loadState();
const mobxStore = new RootStore(initState);
autorun(
    () => {
        // console.dir(mobxStore);
        saveState(mobxStore.serialize());
    },
    {delay: 1000}
);

ReactDOM.render(
    <React.StrictMode>
        <storesContext.Provider value={mobxStore}>
            <App/>
        </storesContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

