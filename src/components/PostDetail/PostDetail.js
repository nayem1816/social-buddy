import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Photo from '../Photo/Photo';

const PostDetail = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState({});
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data));
    }, [id])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/photos?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPhotos(data))
    }, [id])
    return (
        <div>
            <h2>Id: {detail.id}</h2>
            <h3>Title: {detail.title}</h3>
            <p>{detail.body}</p>
            {
                photos.map(photo => <Photo photo = {photo}></Photo>)
            }
        </div>
    );
};

export default PostDetail;