import React from 'react';
import {SubSideMenu} from '../SideMenu/SubSideMenu';
import './styles.css';

export class SideMenu extends React.Component {
    
    render() {
        const btnStyle = {marginTop: 0, marginLeft: 10, marginBottom:12, 
                          width: 330,  height: 50, fontWeight: 'bold', fontSize: 18};
        return(
            <div id="sideMenu">
                {/*<h2 style={{marginTop: 0, marginLeft:12, color: 'white'}}>REQUEST IT</h2>*/}
                <button style={btnStyle} className="btn btn-danger">
                <span className="glyphicon glyphicon-plus"></span>   THÊM YÊU CẦU</button>    
            
            <div className="navbar-default sidebar "  > {/*data-spy="affix"*/}
                <div className="sidebar-nav navbar-collapse" >          
                    <SubSideMenu type="0" name="Việc tôi yêu cầu"/>
                </div>

                <div className="sidebar-nav navbar-collapse">          
                    <SubSideMenu type="1" name="Công việc liên quan"/>
                </div>
                
                <div className="sidebar-nav navbar-collapse">          
                    <SubSideMenu type="2" name="Việc tôi được giao"/>
                </div>
                {/* /.sidebar-collapse */}
            </div>
          </div>
        );
    }
}