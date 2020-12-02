import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				<div className={s.dialog + ' ' + s.active}>
					<NavLink to="/dialogs/1">Dimych</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/2">Max</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/3">Sasha</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/4">Mike</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/5">Kate</NavLink>
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>Hi!</div>
				<div className={s.message}>How is your React learning?</div>
				<div className={s.message}>Good!</div>
			</div>
		</div>
	)
}
export default Dialogs;