import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
        <Post massage='Hi, how are you?' likesCount='15' />
        <Post massage="it's my first post" likesCount='25'/>
      </div>
    </div>
  )
}
export default MyPosts;

