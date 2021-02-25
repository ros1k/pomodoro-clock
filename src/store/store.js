import {createStore} from 'redux'
import {loadState,saveState} from '../helpers/localStorage'
import {rootReducer} from './reducers/rootReducer'
const persistedStore = loadState();

const store = createStore(
   rootReducer,
   persistedStore,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   )

store.subscribe(() => {
   saveState(store.getState())
})
export default store;