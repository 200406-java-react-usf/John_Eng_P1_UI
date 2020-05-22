import React, { useState } from 'react';

import{ Typography, FormControl, InputLabel, Input, Button, makeStyles } from '@material-ui/core';
import { addNewUser } from '../../remote/add-user';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    loginContainer:{
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop:30,
        padding: 20,

    },
    loginForm: {
        width: "50%"    
    },
    button: {
        backgroundColor:"#03071e",
        color: "white"
    },


});

const AddNewUserComponent = () => {
    
    const classes = useStyles();

    const [USERNAME, setUsername] = useState('');
    const [PASSWORD, setPassword] = useState('');
    const [FIRST_NAME, setFirstName] = useState('');
    const [LAST_NAME, setLastName] = useState('');
    const [EMAIL, setEmail] = useState('');
    const [ROLE_NAME, setRoleName] = useState('');

    let updateFormField = (e: any ) => {
        switch (e.currentTarget.id){
            case 'USERNAME':
                setUsername(e.currentTarget.value);
                break;
            case 'PASSWORD':
                setPassword(e.currentTarget.value);
                break;
            case 'FIRST_NAME':
                setFirstName(e.currentTarget.value);
                break;
            case 'LAST_NAME':
                setLastName(e.currentTarget.value);
                break;
            case 'EMAIL':
                setEmail(e.currentTarget.value);
                break;
            case 'ROLE_NAME':
                setRoleName(e.currentTarget.value);
                break;  
            default:
                console.warn(`Improper binding detacted on element with id: ${e.currentTarget.id}`);

        }
    }  
    let history = useHistory();
    let addUser = async() => {
        let newUser = await addNewUser(USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, EMAIL, ROLE_NAME)
        history.push('/allUser')
    }
    }

    return (
        <div className={classes.loginContainer}>
            <form className={classes.loginForm}>
                <Typography align="center" variant="h4"> ADD NEW USER</Typography>

                <FormControl margin="normal" fullWidth >
                    <InputLabel htmlFor="USERNAME" >USERNAME</InputLabel>
                    <Input
                        onChange ={updateFormField}
                        value = {USERNAME}
                        id="USERNAME" type="text"
                        placeholder="Enter username" />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="PASSWORD">PASSWORD</InputLabel>
                    <Input
                        onChange = {updateFormField}
                        value = {PASSWORD}
                        id="PASSWORD" type="text"
                        placeholder = "Enter password" />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="FIRST_NAME">FIRST NAME</InputLabel>
                    <Input
                        onChange = {updateFormField}
                        value = {FIRST_NAME}
                        id="FIRST_NAME" type="text"
                        placeholder = "Enter first name" />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="LAST_NAME">LAST NAME</InputLabel>
                    <Input
                        onChange = {updateFormField}
                        value = {LAST_NAME}
                        id="LAST_NAME" type="text"
                        placeholder = "Enter last name" />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="EMAIL">EMAIL</InputLabel>
                    <Input
                        onChange = {updateFormField}
                        value = {EMAIL}
                        id="EMAIL" type="text"
                        placeholder = "Enter email" />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="ROLE_NAME">ROLE NAME</InputLabel>
                    <Input
                        onChange = {updateFormField}
                        value = {ROLE_NAME}
                        id="ROLE_NAME" type="text"
                        placeholder = "Enter role name" />
                </FormControl>
                <br/><br/>
                <Button className={classes.button}
                    onClick={addUser}
                    variant = "contained"
                    size = "medium">ADD USER
                </Button>
                <br/><br/>
            </form>
        </div>
    )
}

export default AddNewUserComponent;