import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
	if (!profile) {
		return <Preloader/>
	}
	return (
		<div>
			<div>
				<img
					src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_400,q_75,w_1366/v1/clients/daytonabeach/Beach_Aeriel_cx_af61e1fd-615c-4c57-8011-9689d196ae6b.jpg"
					alt=""/>
			</div>
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large}/>

				<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

				<p>Статус: {profile.aboutMe}</p>
				<p>facebook: {profile.contacts.facebook}</p>
				<p>работа: {profile.lookingForAJobDescription}</p>
			</div>
		</div>
	)
}
export default ProfileInfo;
