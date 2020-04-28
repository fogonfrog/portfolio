import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink 
                to={`/dialogs/${props.info.id}`} 
                activeClassName={s.active}>
                    <img src={props.info.avatar} className={s.avatar} alt=""/>
                    {props.info.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;