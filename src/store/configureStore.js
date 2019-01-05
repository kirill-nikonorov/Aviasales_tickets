import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/rootReducer';

import thunk from 'redux-thunk';
import DevTools from '../containers/DevTools';

const initialStore = {};

const enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument()
);

const configurateStore = () => {
    const store = createStore(rootReducer, initialStore, enhancer);

    if (module.hot) {
        module.hot.accept('../reducers/rootReducer', () => {
            store.replaceReducer(rootReducer);
        });
    }
    return store;
};

export default configurateStore;
