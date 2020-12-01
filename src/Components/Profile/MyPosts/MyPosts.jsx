import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      MyPosts
      <div>
    <textarea></textarea>
    <button>Button</button>

    </div>
      <div className={s.posts}>
        <Post massage='Hi, how are you?' like='15' />
        <Post massage="it's my first post" like='25'/>
      </div>
    </div>
  )
}
export default MyPosts;

