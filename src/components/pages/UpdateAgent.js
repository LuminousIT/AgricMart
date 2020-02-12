import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import Axios from 'axios'

export class UpdateAgent extends Component {
    state ={
        agentID : null,
        agentsInfo: [],
        specAgent: "",
        "data":{
            "agent":{
                "fullname":"",
                "email":"",
                "phone":"",
                "password":"",
                "agentID": ""
            }
        },
        statusCode: ""
    }
    componentDidMount(){
        let agentID = this.props.match.params.agent_id;
        let agentsObject = null;
        let specificID = null;
        let specificAgent = null;
       
        const headers = {
            'Content-Type': 'application/json',
            'token': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyIwIjp7ImZ1bGxuYW1lIjoiQWtpbm9sYSBFbGlhcyIsInBob25lIjoiMDgxMzUxNDY2MzYiLCJlbWFpbCI6ImVsaWFzLmFraW5AZ21haWwuY29tIiwidXNlcm5hbWUiOiJhZG1pbiIsInB1YmxpY0tleSI6ImtycFExQ3dCdnZ2UCIsInVzZXJ0eXBlIjoiMCJ9LCJpc3MiOiJwYXlyb2xsbW5nciIsImF1ZCI6InBheXJvbGxtbmdyIiwiaWF0IjoxNTgxNDEwNDIxLCJuYmYiOjE1ODE0MTA0MjF9.2oW6vP_PDIMtSpNdiDY5_T969DfCSC0rrZMVksxJkk4'
        }

        const url = "https://apis.dcptap.website/agricmart/public/v1/admin/get/agents";
        
        Axios.get(url, {headers: headers})
        .then((response)=>{
            //grabs the agentID as a prop from the previous state
            //connect with api to get all agents list
            this.setState({
                agentID: agentID,
                agentsInfo: [...this.state.agentsInfo, response.data.content.data],         
            })
        }).then((res)=>{
            //to find the matching agentId and store the specific agent details as an object in specificAgent
            agentsObject = this.state.agentsInfo;
            specificID = this.state.agentID;
            // console.log(agentsObject);
            // console.log(specificID);
            // console.log("state", this.state);
            agentsObject.forEach(item=>{
                item.map(i=> {
                    if (i.agentID=== specificID) {
                        console.log("match", i.fullname);
                        specificAgent = i;
                        // console.log("specific agent", specificAgent);
                        return;
                    }
                    //return;
                })
            });
            this.setState((prevState)=>({
                ...prevState,
                specAgent : specificAgent
            }))
                //  console.log("all state", this.state);
        })
        .catch((err)=> {
            console.log(err);
        })
        
        
    }

    handleChange = (e) =>{
        this.setState({
            "data":{
                "agent":{
                    ...this.state.data.agent,
                    "agentID": this.state.specAgent.agentID,
                    [e.target.id] : e.target.value,
                    
                }
            }
        })
        //console.log(e.target.value);
    }

    handleSubmit = (e) => {
        // Update Agent Details
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
            'token': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyIwIjp7ImZ1bGxuYW1lIjoiQWtpbm9sYSBFbGlhcyIsInBob25lIjoiMDgxMzUxNDY2MzYiLCJlbWFpbCI6ImVsaWFzLmFraW5AZ21haWwuY29tIiwidXNlcm5hbWUiOiJhZG1pbiIsInB1YmxpY0tleSI6ImtycFExQ3dCdnZ2UCIsInVzZXJ0eXBlIjoiMCJ9LCJpc3MiOiJwYXlyb2xsbW5nciIsImF1ZCI6InBheXJvbGxtbmdyIiwiaWF0IjoxNTgxNDEwNDIxLCJuYmYiOjE1ODE0MTA0MjF9.2oW6vP_PDIMtSpNdiDY5_T969DfCSC0rrZMVksxJkk4',
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            // "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS"

          }
        const url = "https://apis.dcptap.website/agricmart/public/v1/admin/update/agent";
        var agentData = this.state;
        Axios.put(url, agentData, {headers: headers})
        .then((response) => {
            console.log(response);
             console.log("Here is update response ", response.status);
            this.setState({statusCode: response.status});
            console.log(this.state.statusCode);
            alert("Update object parsed successfully. Although, changes may not reflect as API is still limited ");
        })
        .catch((err) => {
            console.log("error msg: ", err);
            alert("CORS-issue",err);
        })
        // console.log(this.state);
    }

    render() {
        
  
        return (
            <div>
                {/* {console.log("rendered state", this.state)} */}
                <Navbar />
                <div className="container">
                    {/* <h3 className="text-center">Update Agent {this.state.specAgent.fullname}</h3> */}
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <h5 className="grey-text text-darken-3">Update Agent {this.state.specAgent.fullname} Details</h5>
                            <div></div>
                            <div className="input-field">
                                <label htmlFor="fullname" className="active">Full Name</label>
                                <input type="text" id="fullname" onChange={this.handleChange} placeholder={this.state.specAgent.fullname} />
                            </div>
                        
                            <div className="input-field">
                                <label htmlFor="email" className="active">Email</label>
                                <input type="email" id="email" onChange={this.handleChange} placeholder={this.state.specAgent.email}/>
                            </div>

                            <div className="input-field">
                                <label htmlFor="phone" className="active">Phone</label>
                                <input type="number" id="phone" onChange={this.handleChange} placeholder={this.state.specAgent.phone} />
                            </div>
                            
                    
                            <div className="input-field">
                                <label htmlFor="password" className="active">Password</label>
                                <input type="password" id="password" onChange={this.handleChange} placeholder={this.state.specAgent.password}/>
                            </div>

                            <div className="input-field">
                                <button className="btn pink lighten-1 z-depth-0">Submit</button>
                                <div className="red-text">
                                    {this.state.statusCode === "200" ? alert("update successful") :<p></p>} 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default UpdateAgent
