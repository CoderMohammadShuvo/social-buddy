import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router';
import Comments from '../Comments/Comments';
const PostDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setPost(data))
    }, [id])
    const { title, body} = post;
    
    const [ comments, setComment] = useState([]);
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    },[id])
    
    return (
        <div>
            <h1>THis  is post details area: {id}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
            <p>number of comments: {comments.length}</p>
            {
                comments.map(comment => <Comments comment={comment}></Comments>)
            }
        </div>
    );
};

export default PostDetails;
