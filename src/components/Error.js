import React, {Component} from 'react';

class Error extends Component{
    render(){
        return(
            <div className="jumbotron text-center">
                <h1>Error !!!</h1>
                <p className="lead">The page you search, not exist</p>
            </div>
        );
    }
}

export default Error;