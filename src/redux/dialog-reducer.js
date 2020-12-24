const ADD_MESSAGE = 'ADD-MESSAGE'; //ADD = SEND
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'; //TEXT == BODY

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
    newMessageText: '',
}
export const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 20, message: state.newMessageText}],
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessageText,
            };
        }
        default:
            return state;
    }

    return state;
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export default dialogReducer;