import React from 'react';
import{ Typography, FormControl, InputLabel, Input, Button, makeStyles, createStyles, Theme, Select, MenuItem } from '@material-ui/core';
import { User } from '../../dtos/user';
import { getReimbById } from '../../remote/reimbId-data';


interface IAprRejProps{
    user: User;
    reimb_id: number;
}

const useStyles = makeStyles((theme: Theme)=>

    createStyles({
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}));



const AprRejReimbComponent = (props: IAprRejProps) => {
    
    const classes = useStyles();
    
    let detailReimb1 = async() => {
        let detailReimb1 = await getReimbById(2)
    }

    const [status, setStatus] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatus(event.target.value as string);
    };

    return (
        <div className={classes.loginContainer}>
            <form className={classes.loginForm}>
    <Typography align="center" variant="h4"> EMPLOYEE ID: {props.reimb_id}</Typography>
        <br></br>
    <Typography align="left" variant="h6"> EMPLOYEE NAME: </Typography>
    <Typography align="left" variant="h6"> AMOUNT: </Typography>
    <Typography align="left" variant="h6"> TYPE: </Typography>
    <Typography align="left" variant="h6"> DESCRIPTION: </Typography>
    <Typography align="left" variant="h6"> APPROVE/DENY: </Typography>
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Approve/Deny</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          onChange={handleChange}
        >
          <MenuItem value={'approve'}>APPROVE</MenuItem>
          <MenuItem value={'deny'}>DENY</MenuItem>
        </Select>
      </FormControl>
                <br/><br/>
                <Button className={classes.button}
                    onClick={detailReimb1}
                    variant = "contained"
                    size = "medium">Submit
                </Button>
                <br/><br/>
            </form>
        </div>
    )
}

export default AprRejReimbComponent;