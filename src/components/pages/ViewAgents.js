import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export class ViewAgents extends Component {
    state = {
        agentsInfo: []
    }

    componentDidMount() {
        const headers = {
            'Content-Type': 'application/json',
            'token': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyIwIjp7ImZ1bGxuYW1lIjoiQWtpbm9sYSBFbGlhcyIsInBob25lIjoiMDgxMzUxNDY2MzYiLCJlbWFpbCI6ImVsaWFzLmFraW5AZ21haWwuY29tIiwidXNlcm5hbWUiOiJhZG1pbiIsInB1YmxpY0tleSI6ImtycFExQ3dCdnZ2UCIsInVzZXJ0eXBlIjoiMCJ9LCJpc3MiOiJwYXlyb2xsbW5nciIsImF1ZCI6InBheXJvbGxtbmdyIiwiaWF0IjoxNTgxNDEwNDIxLCJuYmYiOjE1ODE0MTA0MjF9.2oW6vP_PDIMtSpNdiDY5_T969DfCSC0rrZMVksxJkk4'
          }
        const url = "https://apis.dcptap.website/agricmart/public/v1/admin/get/agents";
        Axios.get(url, {headers: headers})
        .then((response)=>{
            this.setState({
                agentsInfo: response.data.content.data
            })
            // console.log(response);
        }).catch((err)=> {
            console.log(err);
        })
    }
    render() {
        const {agentsInfo} = this.state;
        // console.log(agentsInfo);
        const agentList = agentsInfo.length ? (
            agentsInfo.map(agentInfo => {
                return (
                    <tr key={agentInfo.agentID}>
                        <td>{agentInfo.fullname}</td>
                        <td> {agentInfo.email} </td>
                        <td>{agentInfo.phone}</td>
                        <td><Link to={'/view/' + agentInfo.agentID}>
                             <button className="btn">Edit</button>
                        </Link></td>
                    </tr>
                
                )
            })
        ) : (
            
            <tr>Loading agents list...</tr>
            
        );
        // console.log(agentsInfo);

        return (
            <div>
                 
            <Navbar />
            <div className="container">
            <h3 className="text-center">List of Agents</h3>
            <div className="row">
                <div className="col s12 ">
                <table>
                    <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Update</th>
                    </tr>
                    </thead>

                    <tbody>
                    {agentList}
                    
                    </tbody>
                </table>
                </div>
            </div>
            </div>
            
            
        
            </div>
        )
    }
}

export default ViewAgents
