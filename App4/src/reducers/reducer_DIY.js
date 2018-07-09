const initialState = {
    DIYs: [],
    currentDIY: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_DIY':
            return {
                ...state,
                DIYs: [...state.DIYs, action.payload]
            };

        case 'SET_CURRENT_DIY':
            return {
                ...state,
                currentDIY: state.DIYs[action.payload]
            };

        case 'EDIT_CURRENT_DIY':
            // make copy of DIYs
            const DIYCopy1 = [...state.DIYs];
            DIYCopy1[action.payload.index] = action.payload.newVal;
            return { ...state, DIYs: DIYCopy1 };

        case 'DELETE_DIY':
            const DIYCopy2 = [...state.DIYs]
            DIYCopy2.splice(action.payload, 1);
            console.log(action);
            return {
                ...state,
                DIYs: DIYCopy2
            };

        default:
            return state;
    }
}
