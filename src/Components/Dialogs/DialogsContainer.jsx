import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    // debugger;
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage;
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }
                let onMessageChange = (text) => {
                    let action = updateNewMessageTextActionCreator(text)
                    store.dispatch(action);
                }

                return <Dialogs updateNewMessageText={onMessageChange}
                                addMessage={addMessage}
                                dialogPage={state}
                                newMessageText={state.newMessageText}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;