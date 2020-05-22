import React, { useEffect, useState } from 'react';
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
import { getAllReimb } from '../../remote/reimb-data';

interface IAllReimbProps{
  user: User;
  setReimb_id: (x:any)=> void;
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


const AllReimbComponentFin = (props: IAllReimbProps)=> {
    const classes = useStyles();

  //@ts-ignore
  const [reimbData1, setReimbData1] = useState([] as ERSreimb[])

    const reimbData = async()=>{
      return await getAllReimb();   
    };

    useEffect(()=>{
      reimbData().then((result)=>setReimbData1(result))
    },[]);

    let history = useHistory();

    const redirectDetail =  async (e:any)=>{
      await props.setReimb_id(e.currentTarget.value)
      history.push('/aprRejReimb')
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
        {reimbData1.map((row) => (
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
                    value = {row.REIMB_ID}
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