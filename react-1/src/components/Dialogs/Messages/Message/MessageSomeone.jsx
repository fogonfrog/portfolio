import React from 'react';
import s from './MessageSomeone.module.css';

const Message = (props) => {
    return (
        <div className={s.message}> <img className={s.avatar} src={props.avatar} alt=""/> {props.text}</div>
    )
}

export default Message;