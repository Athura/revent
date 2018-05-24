import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
import  { configureStore } from './app/store/configureStore';
import ScrollToTop from './app/common/util/ScrollToTop';

const store = configureStore();

const rootEl = document.getElementById('root');

//hot module loading, website doesn't need to be refreshed
let render = () => {
    ReactDOM.render( 
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    < App / >
                </ScrollToTop> 
            </BrowserRouter>
        </Provider>,
         rootEl)
}

if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render)
    })
}

render();

registerServiceWorker();