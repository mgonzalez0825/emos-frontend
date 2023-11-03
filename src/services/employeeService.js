import axios from 'axios';

const EMPLOYEE_API_BASE_URL = process.env.REACT_APP_API_URL + '/employees';

class EmployeeService {

    getAllEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee)
       
    }

    getEmployeeById(empId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + empId);
    }

    updateEmployee(employee,empId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + empId, employee);
    }

    updateEmployeeDetails(employee,empId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/add-details/' + empId, employee);
    }

    deleteEmployee(empId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + empId);
    }
}

export default new EmployeeService()