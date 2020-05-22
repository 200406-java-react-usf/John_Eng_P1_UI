import React, { useState } from 'react';

import{ Typography, FormControl, InputLabel, Input, Button, makeStyles } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { ERSuser } from '../../models/ers-user';
import { Redirect, useHistory } from 'react-router';
import { submitReimb } from '../../remote/submit-reimb';
import { User } from '../../dtos/user';


interface ISubmitProps{
    user: User;
}

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

const SubmitReimbComponent = (props: ISubmitProps) => {
    
    const classes = useStyles();

    const [AMOUNT, setAmount] = useState('');
    const [TYPE, setType] = useState('');
    const [DESCRIPTION, setDescription] = useState('');

    let updateFormField = (e: any ) => {
        switch (e.currentTarget.id){
            case 'AMOUNT':
                setAmount(e.currentTarget.value);
                break;
            case 'TYPE':
                setType(e.currentTarget.value);
                break;
            case 'DESCRIPTION':
                setDescription(e.currentTarget.value);
                break;
            default:
                console.warn(`Improper binding detacted on element with id: ${e.currentTarget.id}`);

        }
    }   
    let history = useHistory();
    let submitReimb1 = async() => {
        let submitReimb1 = await submitReimb(AMOUNT, new Date(), DESCRIPTION, "none", props.user.username, 'PENDING', TYPE)
        // props.setUserName(auth);
        history.push('/allReimb')
    }

    return (
        // props.authUser ? <Redirect to="/home" />:
        <div className={classes.loginContainer}>
            <form className={classes.loginForm}>
                <Typography align="center" variant="h4"> ADD NEW USER</Typography>

                <FormControl margin="normal" fullWidth >
                    <InputLabel htmlFor="AMOUNT" >AMOUNT</InputLabel>
                    <Input
                        onChange ={updateFormField}
                        value = {AMOUNT}
                        id="AMOUNT" type="text"
                        placeholder="Enter Amount" />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="TYPE">TYPE</InputLabel>
                    <Input
                        onChange = {updateFormField}
                        value = {TYPE}
                        id="TYPE" type="text"
                        placeholder = "Enter TYPE" />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="DESCRIPTION">DESCRIPTION</InputLabel>
                    <Input
                        onChange = {updateFormField}
                        value = {DESCRIPTION}
                        id="DESCRIPTION" type="text"
                        placeholder = "Enter Description" />
                </FormControl>
                
                <br/><br/>
                <Button className={classes.button}
                    onClick={submitReimb1}
                    variant = "contained"
                    size = "medium">Submit
                </Button>
                <br/><br/>
            </form>
        </div>
    )
}

export default SubmitReimbComponent;