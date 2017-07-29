import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'

import Root from './components/index'
import store, {history} from './store/store'

if (process.env.NODE_ENV === "development") {
    const AppContainer = require('react-hot-loader').AppContainer;

    const render = Component => {
        ReactDOM.render(
            <AppContainer>
                <Provider
                    store={store}>
                    <ConnectedRouter
                        history={history}>
                        <Component/>
                    </ConnectedRouter>
                </Provider>
            </AppContainer>,
            document.getElementById('root')
        )
    };

    render(Root);

    if (module.hot) {
        module.hot.accept('./components/index', () => {
            render(Root)
        })
    }
} else {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Root/>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    )
}
