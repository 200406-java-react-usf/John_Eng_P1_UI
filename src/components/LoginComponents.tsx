import React, { useState } from 'react';
import{ Typography, FormControl, InputLabel, Input, Button, makeStyles } from '@material-ui/core';
import { User } from '../dtos/user';
import { authenticate } from '../remote/auth-service';


interface ILoginProps{
    authUser: User;
    setUser: (user: User) => void;
}

const useStyles = makeStyles({
    loginContainer:{
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop:40,
        padding: 20
    },
    loginForm: {
        width: "50%"    
    },
    button: {
        backgroundColor:"#03071e",
        color: "white"
    }
});

const LoginComponents = (props: ILoginProps) => {
    
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let updateFormField = (e: any ) => {
        switch (e.currentTarget.id){
            case 'username':
                setUsername(e.currentTarget.value);
                break;
            case 'password':
                setPassword(e.currentTarget.value);
                break;
            default:
                console.warn(`Improper binding detacted on element with id: ${e.currentTarget.id}`);

        }
    }   
    let login = async() => {
        console.log('did it get here');
        let auth = await authenticate(username,password);
        console.log(auth)
        props.setUser(auth);
    }

    return (
        <div className={classes.loginContainer}>
            <form className={classes.loginForm}>
                <Typography align="center" variant="h4"> Login to ERS</Typography>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input
                        onChange ={updateFormField}
                        value = {username}
                        id="username" type="text"
                        placeholder="Enter your username" />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        onChange = {updateFormField}
                        value = {password}
                        id="password" type="text"
                        placeholder = "Enter your password" />
                </FormControl>
                <br/><br/>
                <Button className={classes.button}
                    onClick={login}
                    variant = "contained"
                    size = "medium">Login
                </Button>

            </form>
        </div>
    )
}

export default LoginComponents;