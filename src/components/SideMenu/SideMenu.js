import React from 'react';
import {SubSideMenu} from '../SideMenu/SubSideMenu';
import './styles.css';
import {Link, Route, Router} from 'react-router-dom';
import {CreateRequestLayout} from '../Layout/CreateRequestLayout'
export class SideMenu extends React.Component {

    render() {
        const btnStyle = {margin: 0, width: '100%',  height: 40, fontWeight: 'bold', fontSize: 18};
        const type_id = 2;
        return(
            //props: user_id => get type of employee(user_id)
        
            <div style={{width: '100%'}} id="sideMenu">
                
                {/*<h2 style={{marginTop: 0, marginLeft:12, color: 'white'}}>REQUEST IT</h2>*/}
                <Link to={"/user/"+ this.props.user_id + "/dashboard/create"}>
                <button style={btnStyle} className="btn btn-default"> 
                <span className="glyphicon glyphicon-plus"></span>   THÊM YÊU CẦU</button>    
                </Link>
            
            <div id="accordion" className="navbar-default sidebar"  > {/*data-spy="affix"*/}
                <div className="sidebar-nav" >          
                    <SubSideMenu user_id={this.props.user_id} type="0" name="Việc tôi yêu cầu"/>
                </div>
                <div className="sidebar-nav">          
                    <SubSideMenu user_id={this.props.user_id} type="1" name="Công việc liên quan"/>
                </div>
                {(type_id == 1) ? 
                <div className="sidebar-nav">          
                    <SubSideMenu user_id={this.props.user_id} type="2" name="Công việc của team"/>
                </div>
                : <div></div>}
                {(type_id == 2) ?
                <div className="sidebar-nav">          
                    <SubSideMenu user_id={this.props.user_id} type="3" name="Công việc của bộ phận IT"/>
                </div>:<div></div>
                }
                {/* /.sidebar-collapse */}
            </div>
          </div>
        );
    }
}