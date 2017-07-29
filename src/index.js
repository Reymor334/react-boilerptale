import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'

import Root from './components/index'
import store, {history} from './store/store'

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
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
