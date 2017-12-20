import React from 'react';
import ReactDOM from 'react-dom';
import RequestTable from '../RequestTable';
import {Link, Route, Router} from 'react-router-dom';

/** 
  * Components: SubItem
  * In progress
  * Chua xu ly is_new, is_active
  * colorful badge
*/
export class SubItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          //props: index
            status: this.props.status,
            name: this.props.name,
            request_count: this.props.request_count,
            is_new: this.props.is_new, 
            is_active: this.props.is_active
        };
        this.handleClick = this.handleClick.bind(this);
    }
    //cannot found #dashboard
    handleClick() {      
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        ReactDOM.render(<RequestTable user_id={this.props.user_id} status={this.props.index}/>, 
                        document.getElementById("dashboard") );    
    }
    render() {
        //1 - new, 2 - inprogress, 3 - resolved, 4 - feedback, 5 - closed,6 - cancelled
        const icons = [
            {label: "label label-primary", gly: "glyphicon glyphicon-inbox"},   //all
            {label: "label label-success", gly: "glyphicon glyphicon-star-empty"}, //new
            {label: "label label-info", gly: "glyphicon glyphicon-import"},     //inprogress
            {label: "label label-warning", gly: "glyphicon glyphicon-registration-mark"}, //resolved 
            {label: "label label-default", gly: "glyphicon glyphicon-send"}, //feedback
            {label: "label label-disable", gly: "glyphicon glyphicon-remove-sign"}, //closed
            {label: "label label-danger", gly: "glyphicon glyphicon-calendar"} //outofdate
        ];
        //index: 
        //0-Viec toi yeu cau, 1 - Cong viec lien quan, 2-Cong viec duoc giao 3- Công việc của team  4-Công việc của bộ phận IT
        const request_link = ["my", "related", "offered", "team", "dept"];
      
        return(
            <Link to={"/user/"+ this.props.user_id + "/dashboard/"}>
            <button style={{width: 270, marginTop: 0}} onClick={this.handleClick} className="list-group-item">
                <span className={icons[this.props.index].gly}></span> {"  " + this.props.name}
                { (this.props.request_count > 0) ? 
                 <span style={{float: 'right'}} className={icons[this.props.index].label}>{this.props.request_count}</span>
                 : <span></span>
                }
            </button>
            </Link>
        );
    }
}

SubItem.defaultProps = {
    index: 0,
    name: 'Sub',
    request_count: 0,
    is_new: false, 
    is_active: false
};