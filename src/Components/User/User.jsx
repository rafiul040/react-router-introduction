import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UserDetail2 from '../userDetail2/UserDetail2';

const User = ({ user }) => {
    const [showInfo, setshowinfo] = useState(false)
    const [visitHome, setVisitHome] = useState(false)



    const {id, name, email, phone} = user;

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())




    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }


    if(visitHome){
        return <Navigate to='/'></Navigate>
    }

    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={() => {setshowinfo(!showInfo)}}>{showInfo ? "Hide" : 'Show'} Info</button>
            {
                showInfo && <Suspense fallback={<span>Loading....</span>}>
                    <UserDetail2 userPromise={userPromise}></UserDetail2>
                </Suspense>
            }
            <button onClick={() => setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;