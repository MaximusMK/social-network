import React from 'react';
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				<div className={s.dialog}>
					Dimych
				</div>
				<div className={s.dialog + ' ' + s.active}>
					Max
				</div>
				<div className={s.dialog}>
					Sasha
				</div>
				<div className={s.dialog}>
					Mike
				</div>
				<div className={s.dialog}>
					Kate
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