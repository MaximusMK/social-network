import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Mesage";

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
	let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

	let newMassageElement = React.createRef();

	let addMassage = () => {
		let massage = newMassageElement.current.value;
		alert(massage);

	}
	return (

		<div className={s.dialogs}>

			<div>
				<textarea ref={newMassageElement}></textarea>
			</div>
			<button onClick={addMassage}>Add massage</button>

			<div className={s.dialogItems}>
				{ dialogsElements }
			</div>
			<div className={s.messages}>
				{ messagesElements }
			</div>
		</div>
	)
}
export default Dialogs;