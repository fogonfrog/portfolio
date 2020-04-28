import React from 'react';
import s from './FriendsSide.module.css';
import Friend from './Friend/Friend';

let FriendsSide = (props) => {
    let arr = [
        Math.floor(Math.random()* (props.friends.length))
    ]
    
    while (arr.length<3){
    let random = Math.floor(Math.random()* (props.friends.length));
        if (!arr.includes(random, 0)) arr.push(random);
    }
   
    let friendsBar = arr.map(item => <Friend img={props.friends[item].avatar}
                name={props.friends[item].name} />
    );


    return(
        <div className={s.friendsSide}>
            
            { friendsBar }
        </div>
    )
}

export default FriendsSide;