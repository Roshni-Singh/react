const initialState = {
    todos: [],
    currentTodo: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [ ...state.todos, action.payload ]
            };

        case 'SET_CURRENT_TODO':
            return {
                ...state,
                currentTodo: state.todos[action.payload]
            };
        case 'EDIT_CURRENT_TODO':
            // make copy of todos
            const todoCopy1 = [ ...state.todos ];
            todoCopy1[action.payload.index] = action.payload.newVal;
            return { ...state, todos: todoCopy1 };

        case 'DELETE_TODO':
            const todoCopy2 = [...state.todos]
            todoCopy2.splice(action.payload, 1);
            console.log(action);
            return {
                ...state,
                todos: todoCopy2
            };
        default:
            return state;
    }
}
