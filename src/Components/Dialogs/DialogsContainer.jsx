import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    // debugger;
    let state = props.store.getState().dialogsPage;
    // debugger

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action);
    }

    return <Dialogs updateNewMessageText={onMessageChange}
                    addMessage={addMessage}
                    dialogPage={state}
                    newMessageText={state.newMessageText}/>
}
export default DialogsContainer;