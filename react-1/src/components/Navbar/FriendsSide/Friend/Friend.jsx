import React from 'react';
import s from './Friend.module.css'
let Friend = (props) => {
    return(
        <div className={s.main}>
            <img className={s.avatar} src={props.img} alt=""/>
            {props.name}
        </div>
    )
}

export default Friend;