import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = React.memo(props => {
    let postsElements = [...props.posts]
        .reverse()
        .map(p => <Post massage={p.message} likesCount={p.likesCount} key={p.id}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});


const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={"newPostText"}
                   placeholder={"Add your post"}
                   validate={[required, maxLength10]}/>
            <button>Add post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;
