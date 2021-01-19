const ADD_MESSAGE = 'ADD-MESSAGE'; //ADD = SEND

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your React learning?'},
        {id: 3, message: 'Good! ;)'},
    ],
}
export const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 20, message: action.newMessageText}],
            };
        }
        default:
            return state;
    }

    return state;
}

export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default dialogReducer;