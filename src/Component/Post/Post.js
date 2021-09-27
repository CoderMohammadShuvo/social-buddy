import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title, body} = props.post;
    const postStyle = {
        border:'2px solid purple',
        margin:'50px',
        borderRadius:'20px',
        padding:'10px'
    }

    const history = useHistory();
    const showComment = (id) => {
        const url =`post/${id}`;
        history.push(url);
    }
    return (
        <div style={postStyle}>
            <h2>ID: {id}</h2>
            <h1>{title}</h1>
            <p>{body}</p>
            <button onClick={()=>showComment(id)}  >SHow Comments</button>
        </div>
    );
};

export default Post;