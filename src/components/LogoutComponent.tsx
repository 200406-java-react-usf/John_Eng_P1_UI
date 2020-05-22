import React, { useState } from 'react';
import { invalidateSession } from '../remote/auth-service';
import { User } from '../dtos/user';
import { Redirect } from 'react-router';

interface ILoginProps{
    authUser: User;
    setUserName: (user: User) => void;
}

const logout = async() => {
    await invalidateSession();

} 

logout();

let user = new User(0,"","","");
// props.setUserName(user)

const LogoutComponent = (props: ILoginProps) => {
   


    return(
        // (props.authUser.id = 0) ? <Redirect to="/login" />:
        <div>
            <h1>hello</h1>
            {console.log(props.authUser)}
        </div>
        )
}

export default LogoutComponent;