import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import style from './Profile.module.css'

const Profile = (props) => {
	return (
		<div style={style}>
			<ProfileInfo isOwner={props.isOwner}
						 savePhoto={props.savePhoto}
						 profile={props.profile}
						 status={props.status}
						 updateStatus={props.updateStatus}
						 saveProfile={props.saveProfile} />
			<MyPostsContainer />
		</div>
	)
}
export default Profile;
