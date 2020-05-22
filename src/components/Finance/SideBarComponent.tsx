import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core';
import { invalidateSession } from '../../remote/auth-service';
import { User } from '../../dtos/user';


interface ISideBarProps {
    links: string;
    name: string;
    setUser: (x: User)=> void;

}

const useStyles = makeStyles({
    sideBar: {
        backgroundColor: "#6a040f",
        height: "100vh",
        width: '100%',
        top: "0",
        left: "0",
        paddingTop:"20px"
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '150%',
        fontWeight: 'bold',
        float: 'left'
        }
    });

const SideBarComponentFin = (props: ISideBarProps) => {
   
    const logout = async() => {
        await invalidateSession();

        //@ts-ignore
        props.setUser(null as User)
    }

    const classes = useStyles();

    return(
        <div className={classes.sideBar}>
            <br/><br/>
            <ul style={{listStyleType: "none", display: "grid", padding: "10px"}}>
            <li><NavLink to='/allReimb' activeStyle={{color:'#03071e'}} className={classes.link}>All Reimbursement</NavLink></li>
            <li><NavLink to='/pendingReimb' activeStyle={{color:'#03071e'}} className={classes.link}>Pending Reimbursement</NavLink></li>
            <li><NavLink to='/historyReimb' activeStyle={{color:'#03071e'}} className={classes.link}>History Reimbursement</NavLink></li>
            <li><NavLink to='/aprRejReimb' activeStyle={{color:'#03071e'}} className={classes.link}>Approve/Deny Reimbursement</NavLink></li>
            <li><NavLink to='/login' activeStyle={{color:'#03071e'}} className={classes.link} onClick={logout}>Logout</NavLink></li>
            </ul>
        </div>
    )
    }
    export default SideBarComponentFin;
