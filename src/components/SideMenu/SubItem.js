import React from 'react'; 
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
            index: this.props.index,
            name: this.props.name,
            request_count: this.props.request_count,
            is_new: this.props.is_new, 
            is_show: this.props.is_show,
            is_active: this.props.is_active
        };
    }
    
    render() {
  
        const icons = [
            {label: "label label-primary", gly: "glyphicon glyphicon-inbox"}, 
            {label: "label label-success", gly: "glyphicon glyphicon-star-empty"}, 
            {label: "label label-info", gly: "glyphicon glyphicon-import"}, 
            {label: "label label-warning", gly: "glyphicon glyphicon-registration-mark"}, 
            {label: "label label-danger", gly: "glyphicon glyphicon-calendar"}];

        return(
            (this.state.is_show) ? 
            <li className="list-group-item">
                <span className={icons[this.props.index].gly}></span> {"  " + this.props.name}
                { (this.props.request_count > 0) ? 
                 <span style={{float: 'right'}}className={icons[this.props.index].label}>{this.props.request_count}</span>
                 : <span></span>
                }
            </li> 
            : <span></span>
        );
    }
}

SubItem.defaultProps = {
    index: 0,
    name: 'Sub',
    request_count: 0,
    is_new: false, 
    is_show: true,
    is_active: false
};