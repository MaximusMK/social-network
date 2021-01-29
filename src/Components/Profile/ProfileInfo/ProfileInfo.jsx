import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user1.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

	let [editMode, setEditMode] = useState(false);

	if (!profile) {
		return <Preloader/>
	}
	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	const onSubmit = (formData) => {
		saveProfile(formData).then(() => {
				setEditMode(false);
			}
		);
	}

	return (
		<div>
			{/*<div>*/}
			{/*	<img*/}
			{/*		src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_400,q_75,w_1366/v1/clients/daytonabeach/Beach_Aeriel_cx_af61e1fd-615c-4c57-8011-9689d196ae6b.jpg"*/}
			{/*		alt=""/>*/}
			{/*</div>*/}

			<div className={s.descriptionBlock}>
				<img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
				{isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

				{editMode
					? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
					: <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}

				<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
			</div>

		</div>
	)
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
	return <div>
			{isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
		<div>
			<b>Full name:</b> {profile.fullName}
		</div>

		<div>
			<b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
		</div>
		{profile.lookingForAJob &&
		<div>
			<b>My Professional skills:</b> {profile.lookingForAJobDescription}
		</div>
		}
		<div>
			<b>About me:</b> {profile.aboutMe}
		</div>
		<div>
			<b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
			return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
		})}
		</div>
	</div>
}

const Contact = ({contactTitle, contactValue}) => {
	return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
