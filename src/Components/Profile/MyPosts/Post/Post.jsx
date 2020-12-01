import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://i.imgflip.com/1we5s5.jpg" alt="" />
          {props.massage}
      <div>
      
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}
export default Post;