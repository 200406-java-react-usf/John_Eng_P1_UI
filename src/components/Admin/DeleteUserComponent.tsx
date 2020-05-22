import React, { useState } from 'react';
import{ Typography, FormControl, InputLabel, Input, Button, makeStyles } from '@material-ui/core';
import { deleteUser } from '../../remote/delete-user';
import { useHistory } from "react-router-dom";

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

const DeleteUserComponent = () => {
    
    const classes = useStyles();

    const [ERS_USER_ID, setERSuserId] = useState('');

    let updateFormField = (e: any ) => {
        switch (e.currentTarget.id){
            case 'ERS_USER_ID':
                setERSuserId(e.currentTarget.value);
                break;
            default:
                console.warn(`Improper binding detacted on element with id: ${e.currentTarget.id}`);

        }
    }  
    let history = useHistory();
     
    let deleteUser1 = async() => {
        await deleteUser(+ERS_USER_ID)
        history.push('/allUser')
    }

    return (
        <div className={classes.loginContainer}>
            <form className={classes.loginForm}>
                <Typography align="center" variant="h4"> DELETE USER</Typography>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="ERS_USR_ID">ID</InputLabel>
                    <Input
                        onChange ={updateFormField}
                        value = {ERS_USER_ID}
                        id="ERS_USER_ID" type="text"
                        placeholder="Enter user id" />
                </FormControl>

                <br/><br/>
                <Button className={classes.button}
                    onClick={deleteUser1}
                    variant = "contained"
                    size = "medium">Delete
                </Button>
                <br/><br/>
            </form>
        </div>
    )
}

export default DeleteUserComponent;