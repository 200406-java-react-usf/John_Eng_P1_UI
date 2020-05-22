import React, { useEffect } from 'react';
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
import { BrowserRouter as Router, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { User } from '../../dtos/user';
import { getAllReimb } from '../../remote/reimb-data';

interface IAllReimbProps{
  user: User;
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

  let userData1: ERSreimb[] = [];

const AllReimbComponentFin = (props: IAllReimbProps)=> {
    const classes = useStyles();

    const userData = async()=>{
        console.log('im in userData function')
      userData1 = await getAllReimb();   
    };

    useEffect(()=>{userData();});

    const redirectDetail = ()=>{
      console.log('im in redirect detail function');
      return <Redirect to="/detailReimb" />
    }

    let table = (
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell> ID </TableCell>
          <TableCell align="left">EMPLOYEE NAME</TableCell>
          <TableCell align="left">AMOUNT</TableCell>
          <TableCell align="left">TYPE</TableCell>
          <TableCell align="left">STATUS</TableCell>
          <TableCell align="left">DETAILED</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {userData1.map((row) => (
        <TableRow key={row.REIMB_ID}>
          <TableCell component="th" scope="row">
            {row.REIMB_ID}
          </TableCell>
          <TableCell align="left">{row.AUTHOR_FIRST_NAME + " " + row.AUTHOR_LAST_NAME}</TableCell>
          <TableCell align="left">{row.AMOUNT}</TableCell>
          <TableCell align="left">{row.REIMB_TYPE}</TableCell>
          <TableCell align="left">{row.REIMB_STATUS}</TableCell>
          <TableCell align="left">
          <Button className={classes.button}
                    onClick={redirectDetail}
                    variant = "contained"
                    size = "medium">Detail
                </Button> 
          </TableCell>

        </TableRow>
      ))}
       </TableBody>
      </Table>
    </TableContainer>
    )
      return(
        <>
        {table}
        </>
      )
  }

  export default AllReimbComponentFin;