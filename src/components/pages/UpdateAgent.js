import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import Axios from 'axios'

export class UpdateAgent extends Component {
    state ={
        agentID : null,
        agentsInfo: [],
        "data":{
            "agent":{
                "fullname":"",
                "email":"",
                "phone":"",
                "password":"",
                "agentID": ""
            }
        }
    }
    componentDidMount(){
        let agentID = this.props.match.params.agent_id;
       
        const headers = {
            'Content-Type': 'application/json',
            'token': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyIwIjp7ImZ1bGxuYW1lIjoiQWtpbm9sYSBFbGlhcyIsInBob25lIjoiMDgxMzUxNDY2MzYiLCJlbWFpbCI6ImVsaWFzLmFraW5AZ21haWwuY29tIiwidXNlcm5hbWUiOiJhZG1pbiIsInB1YmxpY0tleSI6ImtycFExQ3dCdnZ2UCIsInVzZXJ0eXBlIjoiMCJ9LCJpc3MiOiJwYXlyb2xsbW5nciIsImF1ZCI6InBheXJvbGxtbmdyIiwiaWF0IjoxNTgxNDEwNDIxLCJuYmYiOjE1ODE0MTA0MjF9.2oW6vP_PDIMtSpNdiDY5_T969DfCSC0rrZMVksxJkk4'
          }
        const url = "https://apis.dcptap.website/agricmart/public/v1/admin/get/agents";
        Axios.get(url, {headers: headers})
        .then((response)=>{

            this.setState({
                agentID: agentID,
                agentsInfo: [...this.state.agentsInfo, response.data.content.data],         
            })

            //console.log(this.state);
        }).catch((err)=> {
            console.log(err);
        })
        
        
    }
    render() {
       const agents = this.state.agentsInfo;
       const agentsID = this.state.agentID;
       var agent= null;
       agents.forEach(item=>{
           item.map(i=> {
               if (i.agentID=== agentsID) {
                   console.log("match", i.fullname);
                   agent = i;
                   return agent;
               }
               //return;
           })
        });
        console.log(" agent", agent);
        
        
        // this.setState({agent:agent}, ()=>{console.log("agent details: ", this.state.agent);});
       
        // console.log("final match test ", this.state.agent);
  
        return (
            <div>
                <Navbar />
                <h3 className="text-center">Update Agent {this.state.agentID}</h3>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <h5 className="grey-text text-darken-3">Update Agent Record</h5>
                        <div></div>
                        <div className="input-field">
                            <label htmlFor="fullname" className="active">Full Name</label>
                            <input type="text" id="fullname" onChange={this.handleChange} />
                        </div>
                    
                        <div className="input-field">
                            <label htmlFor="email" className="active">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <label htmlFor="phone" className="active">Phone</label>
                            <input type="number" id="phone" onChange={this.handleChange} />
                        </div>
                        
                        <div className="input-field">
                            <label htmlFor="username" className="active">Username</label>
                            <input type="text" id="username" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <label htmlFor="password" className="active">Password</label>
                            <input type="password" id="password" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Submit</button>
                            <div className="red-text">
                                {/* {this.state.statusCode === "200" ? alert("Entry has been created") :<p>Entry Failed</p>}  */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default UpdateAgent
