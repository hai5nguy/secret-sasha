import { dispatch } from 'store'

export default (name) => {
    dispatch({ type: 'CARD_OPEN', name: name })
}
