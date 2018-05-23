import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

//hot module loading, website doesn't need to be refreshed
let render = () => {
    ReactDOM.render( 
        <BrowserRouter>
            < App / >
        </BrowserRouter>,
         rootEl)
}

if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render)
    })
}

render();

registerServiceWorker();