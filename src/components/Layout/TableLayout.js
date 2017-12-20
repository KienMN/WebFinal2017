import React from 'react';
import HeaderNavbar from '../HeaderNavbar';
import { SideMenu } from '../SideMenu/SideMenu';
import RequestTable from '../RequestTable';
import {
    Route,
    Link,
    Switch,

  } from 'react-router-dom'

  /**
 * Layout having 2 columns A1
 * @va
 */
export class TableLayout extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        
        return(
        <div>  
            <HeaderNavbar />
            <div style={{paddingTop: 70}} className="container-fluid">
                <div className="row">
                <div className="col-lg-3">  
                   <SideMenu user_id={this.props.match.params.user_id} />
                </div>
                <div id="dashboard"className="col-lg-9">
                <Switch>
                    <RequestTable user_id={this.props.match.params.user_id} status={0}/>    
                </Switch>   
                </div>
                </div>
            </div>
            </div>
        );
    }
}