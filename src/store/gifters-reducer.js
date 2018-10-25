const initialState = [];
export default (state = initialState, action) => {
    switch (action.type) {
        case 'GIFTERS_SET': {
            return [...action.gifters]
        }
        default:
            return state;
    }
};
