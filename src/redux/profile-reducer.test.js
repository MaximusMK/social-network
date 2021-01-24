import React from 'react'
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: "it's my first post", likesCount: 25},
        {id: 3, message: "Good", likesCount: 3},
    ]
};

it('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("it-kamasutra.com");


    //2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

it('message of new post should be correct', () => {
    //1. test data
    let action = addPostActionCreator("it-kamasutra.com");


    //2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[3].message).toBe("it-kamasutra.com");
});

it('after deleting length of massages should be incremented', () => {
    //1. test data
    let action = deletePost(1);


    //2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(2);
});

it(`after deleting length of massages shouldn't be decremented if id is incorrect`, () => {
    //1. test data
    let action = deletePost(100);


    //2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});