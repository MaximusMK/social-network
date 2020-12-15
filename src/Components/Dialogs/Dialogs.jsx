import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Mesage";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: text};
        props.dispatch(action);
    }
    return (

        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

            <div>
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
            </div>
            <button onClick={addMessage}>Send massage</button>

        </div>
    )
}
export default Dialogs;