import React from 'react';

export class ContentBoard extends React.Component {
    render() {
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <span class="glyphicon glyphicon-folder-close"></span>  Nội Dung
                </div>
                <div className="panel-body">
                    <div className="user-block">
                    <img className="img-circle" src="../dist/img/user1-128x128.jpg" alt="User Image"/>
                    <span className="username"><a href="#">Jonathan Burke Jr.</a></span>
                    <span className="description">Shared publicly - 7:30 PM Today</span>
                    </div>
                </div> 
            </div>
        ); 
    }
}