import React, { useState, useEffect } from 'react';
import { ERSreimb } from "../../models/ers-reimb";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, BrowserRouter, Redirect, useHistory } from 'react-router-dom';
import { User } from '../../dtos/user';
import { getAllReimbByUserName } from '../../remote/reimbUn-data';
import { getReimbById } from '../../remote/reimbId-data';

interface IAllReimbProps{
  user: User;
  reimb_id: number;
  setReimb_id: (x:any)=> void;
  setgetReimb: (x:any)=> void;
}

const useStyles = makeStyles({
    table: {
      color: "green",
      width: "100%"
    },
    button: {
      backgroundColor:"#03071e",
      color: "white"
    },
  });




const AllReimbComponent = (props: IAllReimbProps)=> {
    const classes = useStyles();

     //@ts-ignore
  const [userData1, setUserData1] = useState([] as ERSreimb[]);

    const userData = async()=>{
      return await getAllReimbByUserName(props.user.username);   
    };

    useEffect(()=>{
      userData().then((result)=>setUserData1(result));
    },[]);

    let history = useHistory();

    const redirectDetail =  async (e:any)=>{
      console.log('im in redirect detail function');
      console.log(e.currentTarget.value);
      // let result = await getReimbById(e.currentTarget.value)
      // await props.setgetReimb(result);
      await props.setReimb_id(e.currentTarget.value)
      history.push('/detailReimb')
    }
    
  //   const getUser = async()=>{
  //     return await getReimbById(reimb_id)
  // }

  // useEffect(()=>{
  //     getUser().then((result)=>setGetReimb(result));
  //     console.log("what is getReimb value: ", getReimb);
  //   },[]);

    let myPost: any[] = [];

    let table = (
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell> ID </TableCell>
          <TableCell align="left">AMOUNT</TableCell>
          <TableCell align="left">SUBMITED</TableCell>
          <TableCell align="left">STATUS</TableCell>
          <TableCell align="left">RESOLVED</TableCell>
          <TableCell align="left">DETAILED</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {userData1.map((row) => (
        <TableRow key={row.REIMB_ID}>
          <TableCell component="th" scope="row">
            {row.REIMB_ID}
          </TableCell>
          <TableCell align="left">{row.AMOUNT}</TableCell>
          <TableCell align="left">{row.SUBMITTED}</TableCell>
          <TableCell align="left">{row.REIMB_STATUS}</TableCell>
          <TableCell align="left">{row.RESOLVED}</TableCell>
          <TableCell align="left">
          <Button className={classes.button}
                    onClick={redirectDetail}
                    variant = "contained"
                    value ={row.REIMB_ID}
                    size = "medium">Detail
                </Button>
          </TableCell>
        </TableRow>
      ))}
       </TableBody>
      </Table>
    </TableContainer>
    )
      return (
        <>
        {table}
        </>
      );
  }

  export default AllReimbComponent;