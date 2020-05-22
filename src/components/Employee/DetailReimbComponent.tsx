import React, { useState, useEffect } from 'react';

import{ Typography, FormControl, InputLabel, Input, Button, makeStyles } from '@material-ui/core';
import { Redirect, useLocation } from 'react-router';
import { getReimbById } from '../../remote/reimbId-data';
import { ERSreimb } from '../../models/ers-reimb';
import { deleteReimb } from '../../remote/delete-reimb';


interface IDetailProps{
    getReimb: ERSreimb;
    reimb_id: any;
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

const DetailReimbComponent = (props: IDetailProps) => {
    
    const classes = useStyles();

    // //@ts-ignore
    // const [getReimb, setGetReimb] = useState(null as ERSreimb);

    const [AMOUNT, setAmount] = useState('');
    const [SUBMITTED, setSubmitted] = useState('');
    const [STATUS, setStatus] = useState('');
    const [RESOLVED, setResolved] = useState('');
    const [TYPE, setType] = useState('');
    const [DESCRIPTION, setDescription] = useState('');

    let updateFormField = (e: any ) => {
        switch (e.currentTarget.id){
            case 'AMOUNT':
                setAmount(e.currentTarget.value);
                break;
            case 'SUBMITTED':
                setSubmitted(e.currentTarget.value);
                break;
            case 'STATUS':
                setStatus(e.currentTarget.value);
                break;
            case 'RESOLVED':
                setResolved(e.currentTarget.value);
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
    
    let deleteReimb1 = async() => {
        await deleteReimb(props.reimb_id)
    }
    
    const location = useLocation();

    console.log('im in detail reimb:', props.getReimb);

    //props.getReimb!=null doesn't really work
    return ( 
        <div className={classes.loginContainer}>
            <form className={classes.loginForm}>
    <Typography align="center" variant="h4"> EMPLOYEE ID: {props.reimb_id}</Typography>

                <FormControl margin="normal" fullWidth >
                    <InputLabel htmlFor="AMOUNT" >AMOUNT</InputLabel>
                    <Input
                        onChange ={updateFormField}
                        value = {AMOUNT}
                        id="AMOUNT" type="text"
                        placeholder="Enter Amount" />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="TYPE">SUBMITTED</InputLabel>
                    <Input
                        onChange = {updateFormField}
                        value = {SUBMITTED}
                        id="SUBMITTED" type="text"
                        placeholder = "Enter submitted" />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="STATUS">STATUS</InputLabel>
                    <Input
                        onChange = {updateFormField}
                        value = {STATUS}
                        id="STATUS" type="text"
                        placeholder = "Enter Status" />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="RESOLVED">RESOLVED</InputLabel>
                    <Input
                        onChange = {updateFormField}
                        value = {RESOLVED}
                        id="RESOLVED" type="text"
                        placeholder = "Enter Resolved" />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="TYPE">TYPE</InputLabel>
                    <Input
                        onChange = {updateFormField}
                        value = {TYPE}
                        id="TYPE" type="text"
                        placeholder = "Enter Type" />
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
                    onClick={deleteReimb1}
                    variant = "contained"
                    size = "medium">Delete
                </Button>
            </form>
        </div>
    )
}

export default DetailReimbComponent;