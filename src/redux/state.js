let state = {

	profilePage: {
		posts: [
			{id: 1, message: 'Hi, how are you?', likesCount: 15},
			{id: 2, message: "it's my first post", likesCount: 25},
			{id: 3, message: "Good", likesCount: 3},
		],
	},

	dialogsPage: {
		dialogs: [
			{id: 1, name: 'Dimych'},
			{id: 2, name: 'Andrey'},
			{id: 3, name: 'Sveta'},
			// {id: 4, name: 'Sasha'},
			{id: 5, name: 'Victor'},
			{id: 6, name: 'Valera'},
		],
		messages: [
			{id: 1, message: 'Hi!'},
			{id: 2, message: 'How is your React learning?'},
			{id: 3, message: 'Good! ;)'},
		],
	}
}

export default state;