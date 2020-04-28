import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let posts = props.posts.map( (post) => <Post message={post.message} likeCounts={post.likesCounts}/>)

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                {
                    posts
                }
            </div>
        </div>
    )
}


export default MyPosts;