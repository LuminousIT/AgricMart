import React, {Component} from 'react'
import Navbar from '../layout/Navbar'
import Axios from 'axios';
import {Redirect} from 'react-router-dom'

class Signin extends Component {
    state = {
        data :{
            username: "",
            password: ""
        },
        statusCode : "",
        token: ""   
    }

    handleChange = (e) => {

        this.setState({
            data : {...this.state.data, [e.target.id] : e.target.value }
        })
        
    }
    handleSubmit =(e)=>  {
        e.preventDefault();
        const url = "https://apis.dcptap.website/agricmart/public/v1/admin/login";
        var loginCred = this.state;
        // console.log(loginCred);
        Axios.post(url, loginCred)
        .then((response)=>{
            console.log(response.data);
            this.setState({statusCode: response.data.error.status});
            // this.props.property = response.data.content;
            console.log("status code is ", this.state.statusCode);
            
        }).catch((err)=>{
            console.log("err ", err);
            this.setState({statusCode: "err"});
            console.log(this.state.statusCode);
            return;
        })
        
    }

    render(){
        if (this.state.statusCode === "0"){
            return <Redirect to="/dashboard" />
        }
        // if (this.state.statusCode === "err" ) {
        //     return alert("check network connection");
        // }
        
        return (
            <div>
                 <Navbar />
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <h5 className="grey-text text-darken-3">Sign In</h5>
                        <p></p>
                        <div className="input-field">
                            <label htmlFor="username" className="active">Username</label>
                            <input type="text" id="username" onChange={this.handleChange} required/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="password" className="active">Password</label>
                            <input type="password" id="password" onChange={this.handleChange} required/>
                        </div>

                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Login</button>
                            <div className="red-text">
                                {this.state.statusCode==="1"? <p>Invalid Username / Password </p> : <p></p> } 
                                {this.state.statusCode==="err"? <p>Check Network Connection </p> : <p></p> } 
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signin