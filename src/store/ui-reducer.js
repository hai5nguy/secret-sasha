const initialState = {
    showDialog: false,
    selectedGifter: '',
    secretSanta: '',
    secretSantaAlreadyViewed: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UI_SET': {
            return { ...state, ...action.ui }
        }
        default:
            return state
    }
}
