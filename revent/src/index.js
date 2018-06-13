import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import {
    BrowserRouter
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
import  { configureStore } from './app/store/configureStore';
import ScrollToTop from './app/common/util/ScrollToTop';
import { loadEvents } from './features/event/eventActions';

const store = configureStore();
store.dispatch(loadEvents());

const rootEl = document.getElementById('root');

//hot module loading, website doesn't need to be refreshed
let render = () => {
    ReactDOM.render( 
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    <ReduxToastr
                        timeOut={4000}
                        position='bottom-right'
                        transitionIn='fadeIn'
                        transitionOut='fadeOut'
                        progressBar
                    />
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