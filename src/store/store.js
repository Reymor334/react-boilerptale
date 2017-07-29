import {applyMiddleware, compose, createStore} from 'redux'
import {createHashHistory} from 'history'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import rootRed from '../reducers/index'

const history = createHashHistory();

const store = createStore(
    connectRouter(history)(rootRed),
    {},
    compose(
        applyMiddleware(
            routerMiddleware(history)
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

if (process.env.NODE_ENV === "development") {
    if (module.hot) {
        module.hot.accept('../reducers/index', () => {
            store.replaceReducer(connectRouter(history)(rootRed))
        })
    }
}

export default store

export {
    history
}