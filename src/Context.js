import React, { Component } from 'react'

const AdminContext = React.createContext();
class AdminProvider extends Component {
    state = {
        greeting: "hello",
        name : "john"
    };
    render() {
        return (
            <AdminContext.Provider value={this.state}>
                {this.props.children}
            </AdminContext.Provider>
        )
    }
}

const AdminConsumer =  AdminContext.Consumer;

export {AdminProvider, AdminConsumer, AdminContext};
