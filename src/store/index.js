import { combineReducers, createStore } from 'redux'

import gifters from './gifters-reducer'
import ui from './ui-reducer'

const reducer = combineReducers({
    gifters,
    ui,
})
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export const { dispatch, getState } = store
export default store
