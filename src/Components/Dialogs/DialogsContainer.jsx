import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// delete in L46 or latter
// const DialogsContainer = () => {
    // debugger;
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().dialogsPage;
//                 let addMessage = () => {
//                     store.dispatch(addMessageActionCreator());
//                 }
//                 let onMessageChange = (text) => {
//                     let action = updateNewMessageTextActionCreator(text)
//                     store.dispatch(action);
//                 }
//
//                 return <Dialogs updateNewMessageText={onMessageChange}
//                                 addMessage={addMessage}
//                                 dialogPage={state}
//                                 newMessageText={state.newMessageText}/>
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    // debugger
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;