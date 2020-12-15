let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: "it's my first post", likesCount: 25},
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
            newMessageText: 'Enter your message',
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else  if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        }
	}
}

export default store;
window.store = store;