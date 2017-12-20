import React from 'react';
import {SubSideMenu} from '../SideMenu/SubSideMenu';
import './styles.css';
import {Link, Route, Router} from 'react-router-dom';
import {CreateRequestLayout} from '../Layout/CreateRequestLayout'
export class SideMenu extends React.Component {

    render() {
        const btnStyle = {marginTop: 0, marginLeft: 10, marginBottom:12, 
                          width: 300,  height: 50, fontWeight: 'bold', fontSize: 18};
       
        return(
            //props: user_id => get type of employee(user_id)
            <div style={{width: 310}} id="sideMenu">
            
                {/*<h2 style={{marginTop: 0, marginLeft:12, color: 'white'}}>REQUEST IT</h2>*/}
                <Link to={"/user/"+ this.props.user_id + "/dashboard/create"}>
                <button style={btnStyle} className="btn btn-danger"> 
                <span className="glyphicon glyphicon-plus"></span>   THÊM YÊU CẦU</button>    
                </Link>
            <div className="navbar-default sidebar "  > {/*data-spy="affix"*/}
                <div className="sidebar-nav navbar-collapse" >          
                    <SubSideMenu user_id={this.props.user_id} type="0" name="Việc tôi yêu cầu"/>
                </div>

                <div className="sidebar-nav navbar-collapse">          
                    <SubSideMenu user_id={this.props.user_id} type="1" name="Công việc liên quan"/>
                </div>
                
                {/* /.sidebar-collapse */}
            </div>
          </div>
        );
    }
}