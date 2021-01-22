import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ProfileContainer from './Components/Profile/ProfileContainer';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {Route, withRouter} from "react-router-dom";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<div className='app-wrapper'>
				<HeaderContainer/>
				<Navbar/>
				<div className='app-wrapper-content'>
					<Route path='/dialogs' render={() => <DialogsContainer/>}/>
					<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
					<Route path='/users' render={() => <UsersContainer/>}/>
					<Route path='/news' render={() => <News/>}/>
					<Route path='/music' render={() => <Music/>}/>
					<Route path='/settings' render={() => <Settings/>}/>
					<Route path='/login' render={() => <LoginPage/>}/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default compose(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App);