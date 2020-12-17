import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

let store = {

    _state: {
        profilePage: {
            posts: [
                // {id: 1, message: 'Hi, how are you?', likesCount: 15},
                // {id: 2, message: "it's my first post", likesCount: 25},
                {id: 3, message: "Good", likesCount: 3},
            ],
            newPostText: 'Enter your post',
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;