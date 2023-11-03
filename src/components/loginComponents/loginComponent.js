import React, { Component } from 'react';

import { withRouter } from '../withRouter/withRouter';

class  loginComponent extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          
            username:'',
            password : '',
          
        }

        this.changeUserName = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        
    }

    changeUsername = (event) => {
        this.setState({username:event.target.value});
    }

    changePassword = (event) => {
        this.setState({password:event.target.value});
    }
    
    login = (e) => {
        
        e.preventDefault();
        
        //code for login goes here
        } ;
     
    
   
    render() {
       
       return (
            <div className ="container">
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'> Login Page</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label> Username </label>
                                    <input placeholder='Admin email address' name='username' type='text' className='form-control'
                                        value={this.state.username} onChange={this.changeUserName}/>
                                </div>
                                {/* <div className='form-group' style={{fontSize:12,color:"red"}}>{this.state.deptNameError}</div> */}
                                 <div className='form-group'>   
                                    <label> Password </label>
                                    <input placeholder='Password' name='password' className='form-control'
                                        value={this.state.password} onChange={this.changePassword}/>
                                </div>
                                {/* <div style={{fontSize:12,color:"red"}}>{this.state.parentDeptError}</div> */}
                               
                                <div className='form-group'>
                                <button type="button" className='btn btn-success' onClick={this.login}> Login</button>  
                                </div>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default withRouter(loginComponent);