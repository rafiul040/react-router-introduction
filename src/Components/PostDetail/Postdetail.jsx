import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const Postdetail = () => {

    const post = useLoaderData();
    const navigate = useNavigate()




    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => {navigate(-1)}}>Go Back</button>
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    );
};

export default Postdetail;