
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import EmployeeComponent from './components/employeeComponents/EmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import DashboardComponent from './components/dashboardComponents/DashboardComponent';
import DepartmentComponent from './components/departmentComponents/DepartmentComponent'
import JobsComponent from './components/jobsComponent/JobsComponent';
import CreateJobComponent from './components/jobsComponent/CreateJobComponent';
import UpdateJobComponent from './components/jobsComponent/UpdateJobComponent';
import ViewJobComponent from './components/jobsComponent/ViewJobComponent';
import UpdateEmployeeComponent from './components/employeeComponents/UpdateEmployeeComponent';
import CreateEmployeeComponent from './components/employeeComponents/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/employeeComponents/ViewEmployeeComponent';
import CreateDepartmentComponent from './components/departmentComponents/CreateDepartmentComponent';
import UpdateDepartmentComponent from './components/departmentComponents/UpdateDepartmentComponent';
import ViewDepartmentComponent from './components/departmentComponents/ViewDepartmentComponent';
import AddEmployeeDetailsComponent from './components/employeeComponents/AddEmployeeDetailsComponent';

// import LoginComponent from './components/loginComponents/loginComponent';
import SchedulerComponent from './components/schedulerComponents/schedulerComponent';
import AddEventComponent from './components/schedulerComponents/AddEventComponent';
import AddEventComponentDash from './components/dashboardComponents/AddEventComponentDash';

function App(){
return (
  <div>
    
      <div className='container'>
       <HeaderComponent/>
          <div className="container">
            <Router>
            <Routes>
              {/* <Route path = '/*' element = {<DashboardComponent/>}></Route> */}
               <Route path = '/admin/dashboard' element = {<DashboardComponent/>}></Route>
               <Route path = '/admin/departments' element = {<DepartmentComponent/>}></Route>
               <Route path = '/admin/departments/add-department' element = {<CreateDepartmentComponent/>}></Route>
               <Route path = '/admin/departments/update-department/:deptNo' element = {<UpdateDepartmentComponent/>}></Route>
               <Route path = '/admin/departments/view-department/:deptNo' element = {<ViewDepartmentComponent/>}></Route>
               <Route path = 'admin/jobs' element = {<JobsComponent/>}></Route>
               <Route path = '/admin/jobs/add-job' element = {<CreateJobComponent/>}></Route>
               <Route path = '/admin/jobs/update-job/:jobId' element = {<UpdateJobComponent/>}></Route>
               <Route path = '/admin/jobs/view-job/:jobId' element = {<ViewJobComponent/>}></Route>
               <Route path = '/admin/employees' element = {<EmployeeComponent/>}></Route>
               <Route path = '/admin/employees/add-employee' element = {<CreateEmployeeComponent/>}></Route>
               <Route path = '/admin/employees/update-employee/:empId' element = {<UpdateEmployeeComponent/>}></Route>
               <Route path = '/admin/employees/view-employee/:empId' element = {<ViewEmployeeComponent/>}></Route>
               <Route path = '/admin/employees/add-employee-details/:empId' element = {<AddEmployeeDetailsComponent/>}></Route>
               <Route path = '/admin/scheduler' element = {<SchedulerComponent/>}></Route>
               <Route path = '/admin/scheduler/add-event' element = {<AddEventComponent/>}></Route>
               <Route path = '/admin/dashboard/add-event' element = {<AddEventComponentDash/>}></Route>
          </Routes>
          </Router>  
          </div>
        <FooterComponent/>
      </div>
    
     </div>
);
}


export default App;
