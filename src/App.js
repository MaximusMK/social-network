import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://pllsll.com/assets/tmp/storage/b6/be/79/b6b2a3834f4.jpg" alt="logo" />
      </header>
      <nav className='nav'>
        <div><a href="#">Profile</a></div>
        <div><a href="#">Massages</a></div>
        <div><a href="#">News</a></div>
        <div><a href="#">Profile</a></div>
        <div><a href="#">Settings</a></div>
      </nav>
      <div className='content'>
        <div>
          <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_400,q_75,w_1366/v1/clients/daytonabeach/Beach_Aeriel_cx_af61e1fd-615c-4c57-8011-9689d196ae6b.jpg" alt=""/>
        </div>
        <div>ava + description</div>
        <div>My posts</div>
        <div>New post</div>
        <div>Post1</div>
        <div>Post2</div>
      </div>
    </div>
  );
}

export default App;
