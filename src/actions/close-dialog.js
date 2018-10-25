import { dispatch } from 'store'

export default () => {
    const ui = { showDialog: false, selectedGifter: '', secretSanta: '', secretSantaAlreadyViewed: false }
    dispatch({ type: 'UI_SET', ui })
}
