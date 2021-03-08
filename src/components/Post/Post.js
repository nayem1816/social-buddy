import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const handelBtn = (id) => {
        const url = `/post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h2>id: {id} - {title}</h2>
            <p>{body}</p>
            {/* <Link to={`/post/${id}`}><button>Show Details</button></Link> */}
            <button onClick={() => handelBtn(id)}>Show Details</button>
        </div>
    );
};

export default Post;