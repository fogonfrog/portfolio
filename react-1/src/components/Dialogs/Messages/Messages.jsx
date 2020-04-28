import React from 'react';
import s from './Messages.module.css';
import MessageMe from './Message/MessageMe';
import MessageSomeOne from './Message/MessageSomeone';


const Messages = (props) => {
let messages = props.messages.map( message => {
switch(message.from){
case 'me': 
    return <MessageMe text={message.text}/>
case 'someOne': 
    return <MessageSomeOne text={message.text} avatar={props.avatar}/>}
})

    return(
            <div className={s.messages}>
                { messages }
            </div>
    )
}

export default Messages;