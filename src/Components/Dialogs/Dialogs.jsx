import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Mesage";

const Dialogs = (props) => {
    // debugger

    let state = props;

    let dialogsElements = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
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
                <textarea placeholder={'Send your message...'} onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
            </div>
            <button onClick={addMessage}>Send massage</button>
        </div>
    )
}
export default Dialogs;