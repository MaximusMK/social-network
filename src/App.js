import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ProfileContainer from './Components/Profile/ProfileContainer';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
// import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {BrowserRouter, Route, withRouter, Switch, Redirect} from "react-router-dom";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));

class App extends React.Component {
	catchAllUnhandledErrors = (reason, promise) => {
		alert("Some error occured");
		console.error(promise);
	}

	componentDidMount() {
		this.props.initializeApp();
		window.addEventListener("unhundledrejection", this.catchAllUnhandledErrors)
	}

	componentWillUnmount() {
		window.removeEventListener("unhundledrejection", this.catchAllUnhandledErrors);
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
					<Switch>
						<Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>

						<Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
						<Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
						<Route path='/users' render={withSuspense(UsersContainer)}/>
						<Route path='/news' render={() => <News/>}/>
						<Route path='/music' render={() => <Music/>}/>
						<Route path='/settings' render={() => <Settings/>}/>
						<Route path='/login' render={() => <LoginPage/>}/>

						<Route path='*' render={() => <Redirect to={"/profile"}/>} />

					</Switch>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

let AppContainer =  compose(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
	return  <BrowserRouter>
		<React.StrictMode>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</React.StrictMode>
	</BrowserRouter>
}
export default SamuraiJSApp;