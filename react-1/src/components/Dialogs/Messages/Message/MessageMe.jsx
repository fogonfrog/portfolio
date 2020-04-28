import React from 'react';
import s from './MessageMe.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>{props.text} <img className={s.avatar} src="https://sun9-71.userapi.com/c856028/v856028388/196efa/rmXKVswvsIQ.jpg" alt=""/> </div>
    )
}

export default Message;