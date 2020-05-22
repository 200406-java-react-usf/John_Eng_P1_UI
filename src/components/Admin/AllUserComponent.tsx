import React, { useState, useEffect } from 'react';
import { ERSuser } from "../../models/ers-user";
import { getAllUser } from "../../remote/user-data";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
      color: "green",
      width: "100%"
    },
  });

const AllUserComponent = ()=> {
    const classes = useStyles();
    
    const [userData1, setUserData1] = useState([] as ERSuser[]);

    const userData = async()=>{
      return await getAllUser();  
    };

    useEffect(()=>{
      userData().then((result)=>setUserData1(result));
    },[]);

    let table = (
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell> ID </TableCell>
          <TableCell align="left">USERNAME</TableCell>
          <TableCell align="left">NAME</TableCell>
          <TableCell align="left">EMAIL</TableCell>
          <TableCell align="left">ROLE</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {userData1.map((row) => (
        <TableRow key={row.ERS_USER_ID}>
          <TableCell component="th" scope="row">
            {row.ERS_USER_ID}
          </TableCell>
          <TableCell align="left">{row.USERNAME}</TableCell>
          <TableCell align="left">{row.FIRST_NAME + ' ' + row.LAST_NAME}</TableCell>
          <TableCell align="left">{row.EMAIL}</TableCell>
          <TableCell align="left">{row.ROLE_NAME}</TableCell>
        </TableRow>
      ))}
       </TableBody>
      </Table>
    </TableContainer>
    )

      let adminLinks=["addNewUser", "deleteUser"]

      return(
        <>
        {table}
        </>
      )
  }

  export default AllUserComponent;