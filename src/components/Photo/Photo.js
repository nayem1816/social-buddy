import React from 'react';

const Photo = (props) => {
    const {url} = props.photo;
    return (
        <div>
           <img src={url} alt=""/> 
        </div>
    );
};

export default Photo;