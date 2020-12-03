import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: "it's my first post", likesCount: 25},
  ]

  return (
    <div className={s.postsBlock}>
      <h3>MyPosts</h3>
      <div>
    <div>
      <textarea></textarea>
    </div>
    <div>
      <button>Button</button>
    </div>

    </div>
      <div className={s.posts}>
        <Post massage={postData[0].message} likesCount={postData[0].likesCount} />
        <Post massage={postData[1].message} likesCount={postData[1].likesCount} />
      </div>
    </div>
  )
}
export default MyPosts;

