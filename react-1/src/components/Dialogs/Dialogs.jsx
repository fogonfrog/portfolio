import React from 'react';
import s from './Dialogs.module.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Messages from './Messages/Messages';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

    let arrayDialogNames = props.messagesPage.dialogs.map(
        (item) => <DialogItem
            info = {item} />
    );

    let DialogRoutes = props.messagesPage.dialogs.map(
        (element, index) => <Route
            path={`/dialogs/${element.id}`}
            render={() => <Messages
                messages={props.messagesPage.messages[index]}
                avatar={props.messagesPage.dialogs[element.id-1].avatar} />} />)

    return (
        <BrowserRouter>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { arrayDialogNames }
                </div>
                <div>
                    { DialogRoutes }
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Dialogs;