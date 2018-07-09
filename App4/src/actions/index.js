
export function addDIY(DIY) {
    return {
        type: 'ADD_DIY',
        payload: DIY
    };
}

export function setCurrentDIY(index) {
    return {
        type: 'SET_CURRENT_DIY',
        payload: index
    };
}

export function editDIY(values) {
    return {
        type: 'EDIT_CURRENT_DIY',
        payload: values
    };
}

export function deleteDIY(DIY) {
    return {
        type: 'DELETE_DIY',
        payload: DIY
    };
}

