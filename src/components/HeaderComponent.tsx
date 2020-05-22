import React from 'react';
import { Typography, AppBar, Box, Toolbar, makeStyles } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';


interface IHeaderProps{
    title: string;
}

const useStyles = makeStyles({
    headerContainer:{
        padding: "10px 0px 10px 0px",
        backgroundColor: "#03071e",
        color: "white",
        fontWeight: "bold",
        align: "center"
        
    }
});

const HeaderComponent = (props: IHeaderProps) => {
    
    const classes = useStyles();
    
    return(
        <>
        <div className={classes.headerContainer}>
        <Typography variant="h1" component="h2" align="center">
        {props.title}
        </Typography>
        </div>
        <div style={{backgroundColor:"#370617"}}><br/></div>
        <div ></div>
        </>
    )

}

export default HeaderComponent;