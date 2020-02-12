import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import {Link} from 'react-router-dom'

export class Dashboard extends Component {

    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                 <div>
            
            <Navbar />
            <div className="container">
            <div className="row ">
                <h2 className="text-center welcome">Welcome, Admin</h2>
                <div className="col m6 ">
                    <div className="card z-depth-1 ">
                    <div className="card-content grey-text text-darken-3">
                        <Link to="/create">
                        <span className="card-title "> Create Agent Profile </span>
                        </Link>
                        
                        
                    </div>
                    </div>
                </div>

                <div className="col m6 ">
                    <div className="card z-depth-1 ">
                    <div className="card-content grey-text text-darken-3">
                        <Link to="/view">
                            <span className="card-title "> View Agents </span>
                        </Link>
                        
                        
                    </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
            </div>
        )
    }
}

export default Dashboard
