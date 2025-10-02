import React, { use } from 'react';

const UserDetail2 = ({userPromise}) => {

    const {name, username} = use(userPromise)

    return (
        <div>
            <p><small>user Name : {username}</small></p>
            <p><small>Name : {name}</small></p>
        </div>
    );
};

export default UserDetail2;