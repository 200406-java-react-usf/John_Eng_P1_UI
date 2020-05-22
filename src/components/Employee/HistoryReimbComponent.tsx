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
import { User } from '../../dtos/user';
import { getAllReimbByUserName } from '../../remote/reimbUn-data';

interface IHistoryProps{
    user: User;
}

const useStyles = makeStyles({
    table: {
      color: "green",
      width: "100%"
    },
  });

  let userData1: ERSreimb[] = [];

const HistoryReimbComponent = (props: IHistoryProps)=> {
    const classes = useStyles();

    const userData = async()=>{
      userData1 = await getAllReimbByUserName(props.user.username);  
    };
    
    useEffect(()=>{userData();});
    
    let priorCheck = (x: ERSreimb) => {
        return ((x.REIMB_STATUS == "DENIED") || (x.REIMB_STATUS == "APROVED"));
    } 

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
        {userData1.filter(priorCheck).map((row) => 
            (
                <TableRow key={row.REIMB_ID}>
                <TableCell component="th" scope="row">
                    {row.REIMB_ID}
                </TableCell>
                <TableCell align="left">{row.AMOUNT}</TableCell>
                <TableCell align="left">{row.SUBMITTED}</TableCell>
                <TableCell align="left">{row.REIMB_STATUS}</TableCell>
                <TableCell align="left">{row.RESOLVED}</TableCell>
                <TableCell align="left">detail</TableCell>
                </TableRow>
            )
        )}
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

  export default HistoryReimbComponent;