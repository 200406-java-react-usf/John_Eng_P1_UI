import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SideBarComponentAdmin from './SideBarComponentAdmin';
import AddNewUserComponent from './AddNewUserComponent';
import UpdateUserComponent from './UpdateUserComponent';
import DeleteUserComponent from './DeleteUserComponent';
import AllUserComponent from './AllUserComponent';
import { User } from '../../dtos/user';


interface IAdminProps{
    user: User;
    setUser: (x: User) => void
}

const AdminHomeComponent = (props: IAdminProps)=> {

return(
    <>
    <Router>
    <Grid container >
      <Grid item xs={3}>
      <SideBarComponentAdmin links={'nothing'} name={props.user.username} setUser={props.setUser}/>
      </Grid>
      
      <Grid item xs={9}>
        <Redirect to="/allUser" />
        <Route path='/allUser' render= {() => <AllUserComponent /> }  />
        <Route path='/addUser' render= {() => <AddNewUserComponent /> }  />
        <Route path='/updateUser' render= {() => <UpdateUserComponent /> }  />
        <Route path='/deleteUser' render= {() => <DeleteUserComponent /> }  /> 
      </Grid>
    </Grid>
    
    
    </Router>
    </>
    );
}

export default AdminHomeComponent;