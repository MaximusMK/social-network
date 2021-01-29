import React from 'react';
import Profile from "./Profile";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect"; //DO NOT DELETE!!!
import {compose} from "redux";

class ProfileContainer extends React.Component {

	refreshProfile() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
		if (!userId) {
			this.props.history.push("/login");
		}
	}

	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId != prevProps.match.params.userId) {
			this.refreshProfile();
		}

	}

	render() {
		return (
			<Profile {...this.props}
					 profile={this.props.profile}
					 status={this.props.status}
					 updateStatus={this.props.updateStatus}
					 isOwner={!this.props.match.params.userId}
					 savePhoto={this.props.savePhoto} />
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
});

export default compose(
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
	withRouter,
	withAuthRedirect, //DO NOT DELETE!!!
)(ProfileContainer)