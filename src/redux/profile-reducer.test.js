import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, post: "Hello, there", likesCount: 12 },
    { id: 2, post: "Its my first post", likesCount: 10 },
    { id: 3, post: "Its my second post", likesCount: 5 },
  ],
};


it('length of posts should be incremented', () => {
  //1. test date

  let action = addPostActionCreator("Yurko");

  //2. action
  let newState = profileReducer(state, action);
  //3.expectation
  expect(newState.posts.length).toBe(4);
});



it('lmessage of new post should be correct', () => {
  //1. test date

  let action = addPostActionCreator("Yurko");

  //2. action
  let newState = profileReducer(state, action);
  //3.expectation
  expect(newState.posts.posts[4].message).toBe("Yurko");
});

it('after deleting legnth of messages should be decremnt', () => {
  //1. test date

  let action = deletePost(1);

  //2. action
  let newState = profileReducer(state, action);
  //3.expectation
  expect(newState.posts.posts.length).toBe(2);
});


it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
  // 1. test data
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});






