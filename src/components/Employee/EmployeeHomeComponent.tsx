import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { User } from '../../dtos/user';
import SideBarComponentEmp from './SideBarComponentEmp';
import AllReimbComponent from './AllReimbComponent';
import HistoryReimbComponent from './HistoryReimbComponent';
import SubmitReimbComponent from './SubmitReimbComponent';
import DetailReimbComponent from './DetailReimbComponent';
import { getReimbById } from '../../remote/reimbId-data';
import UpdateReimbComponent from './UpdateReimbComponant';

interface IEmployeeProps{
    user: User;
    setUser: (x: User) => void

}

const useStyles = makeStyles({
    sidebar: {
      backgroundColor: "blue"

    },
  });

  const EmployeeHomeComponent = (props: IEmployeeProps)=> {
    const classes = useStyles();

    //@ts-ignore
    const [reimb_id, setReimb_id] = useState(null as number);
    //@ts-ignore
    const [getReimb, setgetReimb] = useState(null as ERSreimb)
    
    // const getUser = async()=>{
    //     return await getReimbById(reimb_id)
    // }

    // useEffect(()=>{
    //     getUser().then((result)=>setGetReimb(result));
    //     console.log("what is getReimb value: ", getReimb);
    //   },[]);


    return(
        <>
        <Router>
        <Grid container >
          <Grid item xs={3}>
          <SideBarComponentEmp links={'nothing'} name={props.user.username} setUser={props.setUser}/>
          </Grid>      
          <Grid item xs={9}>
           <Redirect to="/allReimb" />
           <Route path='/allReimb' render= {() => <AllReimbComponent user={props.user} reimb_id = {reimb_id} setReimb_id={setReimb_id} setgetReimb={setgetReimb}/>  }  />
           <Route path='/historyReimb' render= {() => <HistoryReimbComponent user={props.user}/> }  />
          <Route path='/submitReimb' render = {() => <SubmitReimbComponent user={props.user}/>} />
          <Route path='/detailReimb' exact render = {() => <DetailReimbComponent reimb_id={reimb_id} getReimb={getReimb}/>} />
          <Route path='/updateReimb' exact render = {() => <UpdateReimbComponent reimb_id={reimb_id} getReimb={getReimb}/>} />
          </Grid>
        </Grid>
        
        
        </Router>
        </>
        );
    }
    
    export default EmployeeHomeComponent;