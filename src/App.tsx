import React, { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { User } from './dtos/user'
import EmployeeHomeComponent from './components/Employee/EmployeeHomeComponent';
import FinanceHomeComponent from './components/Finance/FinanceHomeComponent';
import AdminHomeComponent from './components/Admin/AdminHomeComponent';
import LoginComponents from './components/LoginComponents';
import HeaderComponent from './components/HeaderComponent';

function App() {

  //@ts-ignore
  const [user, setUser] = useState(null as User);
  
  return (
    <div className="App">
      <Router>
      {
       !user ? <LoginComponents authUser={user} setUser={setUser} />:
        <>
          <HeaderComponent title={user?.role} name={user?.username}/>
          {user.role == 'ADMIN' ? <AdminHomeComponent user={user} setUser={setUser}/>:
         user.role == 'EMPLOYEE' ? <EmployeeHomeComponent user={user} setUser={setUser}/>:
         user.role == 'FINANCE MANAGER' ? <FinanceHomeComponent user={user} setUser={setUser}/>:         
           <></>
          }
       </>
      }
      </Router>
    </div>
  );
}

export default App;
