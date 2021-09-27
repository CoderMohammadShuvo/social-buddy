import React from 'react';

const Comments = (props) => {
    const {name, email, body} = props.comment;
    return (
        <div>
            <h2>Most Relavant Comments</h2>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Comments;