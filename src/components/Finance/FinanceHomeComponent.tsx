import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { User } from '../../dtos/user';
import SideBarComponentFin from './SideBarComponent';
import AllReimbComponentFin from './AllReimbComponentFin';
import PendingReimbComponent from './PendingReimbComponent';
import HistoryReimbComponentFin from './HistoryReimbComponentFin';
import AprRejReimbComponent from './AprRejReimbComponentFin';

interface IFinanceProps{
    user: User;
    setUser: (x: User) => void
}

const useStyles = makeStyles({
    sidebar: {
      backgroundColor: "blue"

    },
  });

  const FinanceHomeComponent = (props: IFinanceProps)=> {
    const classes = useStyles();

     //@ts-ignore
     const [reimb_id, setReimb_id] = useState(null as number);

    return(
        <>
        <Router>
        <Grid container >
          <Grid item xs={2}>
          <SideBarComponentFin links={'nothing'} name={props.user.username} setUser={props.setUser}/>
          </Grid>
          <Grid item xs={10}>
           <Redirect to="/allReimbFin" />
           <Route path='/allReimbFin' render= {() => <AllReimbComponentFin user={props.user} setReimb_id={setReimb_id}/>}  />
           <Route path='/pendingReimb' render= {() => <PendingReimbComponent user={props.user}/> }  />
           <Route path='/historyReimb' render= {() => <HistoryReimbComponentFin user={props.user}/> }  />
           <Route path='/aprRejReimb' render= {() => <AprRejReimbComponent user={props.user} reimb_id={reimb_id}/> }  />
          </Grid>
        </Grid>
        
        </Router>
        </>
        );
    }
    
    export default FinanceHomeComponent;