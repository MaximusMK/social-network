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
        <Post massage='Hi, how are you?' likesCount='15' />
        <Post massage="it's my first post" likesCount='25'/>
      </div>
    </div>
  )
}
export default MyPosts;

