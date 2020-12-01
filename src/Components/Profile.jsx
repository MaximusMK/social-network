import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_400,q_75,w_1366/v1/clients/daytonabeach/Beach_Aeriel_cx_af61e1fd-615c-4c57-8011-9689d196ae6b.jpg" alt="" />
      </div>

      <div>
        ava + description
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div className ={s.posts}>
          <div className = {s.item}>
            Post1
          </div>
          <div>
            Post2
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile;
