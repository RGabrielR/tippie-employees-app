import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import monitorReducersEnhancer from './monitorReducerEnhacer'
import logger from './logger'
import rootReducer from './reducer/rootReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export default function configureStore(preloadedState) {
  const middlewares = [logger, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)
  const persistConfig = {key: 'root', storage, }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, preloadedState, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducer/rootReducer', () => store.replaceReducer(rootReducer))
  }
  return store
}