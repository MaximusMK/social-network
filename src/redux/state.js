let rerenderEntireTree = () => {
	console.log("State changed");
}

let state = {

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
}

window.state = state.profilePage;

export const addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0,
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

export let addMessage = () => {
	let newMessage = {
		id: 4,
		message: state.dialogsPage.newMessageText,
	};
	state.dialogsPage.messages.push(newMessage);
	state.dialogsPage.newMessageText = '';
	rerenderEntireTree(state);
}
export const updateNewMessageText = (newMessageText) => {
	state.dialogsPage.newMessageText = newMessageText;
	rerenderEntireTree(state);
}

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
}

export default state;