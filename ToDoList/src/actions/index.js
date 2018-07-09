export function addTodo(todo) {
    return {
        type: 'ADD_TODO',
        payload: todo
    };
}

export function setCurrentTodo(index) {
    return {
        type: 'SET_CURRENT_TODO',
        payload: index
    };
}

export function editTodo(values) {
    return {
        type: 'EDIT_CURRENT_TODO',
        payload: values
    };
}

export function deleteTodo(todo) {
    return {
        type: 'DELETE_TODO',
        payload: todo
    };
}

