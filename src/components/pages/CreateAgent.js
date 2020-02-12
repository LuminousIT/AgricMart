import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import Axios from 'axios'
import {AdminContext} from "../../Context"

class CreateAgent extends Component {
    static contextType = AdminContext;
    state = {
        "data":{
            "agent":{
                "fullname":"",
                "email":"",
                "phone":"",
                "username":"",
                "password":""
            }
        },
        "statusCode": ""
    }

    handleChange = (e) => {
        this.setState({
            data: {
                agent: {
                    ...this.state.data.agent,
                    [e.target.id] : e.target.value
                }
            }
        })
        // console.log(e.target.value);
       // console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
            'token': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyIwIjp7ImZ1bGxuYW1lIjoiQWtpbm9sYSBFbGlhcyIsInBob25lIjoiMDgxMzUxNDY2MzYiLCJlbWFpbCI6ImVsaWFzLmFraW5AZ21haWwuY29tIiwidXNlcm5hbWUiOiJhZG1pbiIsInB1YmxpY0tleSI6ImtycFExQ3dCdnZ2UCIsInVzZXJ0eXBlIjoiMCJ9LCJpc3MiOiJwYXlyb2xsbW5nciIsImF1ZCI6InBheXJvbGxtbmdyIiwiaWF0IjoxNTgxNDEwNDIxLCJuYmYiOjE1ODE0MTA0MjF9.2oW6vP_PDIMtSpNdiDY5_T969DfCSC0rrZMVksxJkk4'
          }
        const url = "https://apis.dcptap.website/agricmart/public/v1/admin/create/agent";
        var agentData = this.state;
        Axios.post(url, agentData, {headers: headers})
        .then((response) => {
            // console.log("Here is response ", response)
            this.setState({statusCode: response.data.success.status});
            
        })
        .catch((err) => {
            console.log("error msg: ", err);
        })
        // console.log(this.state);
    }

    render() {
        // const value = this.context;
        // console.log(value);
        return (
            <div>
                 <Navbar />
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <h5 className="grey-text text-darken-3">Create New Agent</h5>
                        <div></div>
                        <div className="input-field">
                            <label htmlFor="fullname" className="active">Full Name</label>
                            <input type="text" id="fullname" onChange={this.handleChange} required />
                        </div>
                    
                        <div className="input-field">
                            <label htmlFor="email" className="active">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} required />
                        </div>

                        <div className="input-field">
                            <label htmlFor="phone" className="active">Phone</label>
                            <input type="number" id="phone" onChange={this.handleChange} required />
                        </div>
                        
                        <div className="input-field">
                            <label htmlFor="username" className="active">Username</label>
                            <input type="text" id="username" onChange={this.handleChange} required/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="password" className="active">Password</label>
                            <input type="password" id="password" onChange={this.handleChange} required/>
                        </div>

                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Submit</button>
                            <div className="red-text">
                                {this.state.statusCode === "200" ? alert("Entry has been created") :<p></p>} 
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateAgent
