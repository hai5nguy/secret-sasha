import { dispatch } from 'store'
import { send } from './api'

import fetchGifters from './fetch-gifters'

export default async (name) => {
    const { error, data } = await send(`mutation { openGifter(name: "${name}") }`)
    if (error) {
        dispatch({ type: 'UI_SET', ui: { secretSantaAlreadyViewed: true } })
    } else {
        dispatch({ type: 'UI_SET', ui: { secretSanta: data.openGifter } })
    }
    fetchGifters()
}
