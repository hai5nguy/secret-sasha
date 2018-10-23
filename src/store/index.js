import { combineReducers, createStore } from 'redux'

import card from './card-reducer'
import template from './template-reducer'
import ui from './ui-reducer'

const reducer = combineReducers({
    card,
    template,
    ui,
})
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export const { dispatch, getState } = store
export default store
