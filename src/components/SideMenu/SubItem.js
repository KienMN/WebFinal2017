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
        const icons = ["glyphicon glyphicon-inbox", 
        "glyphicon glyphicon-star-empty",  
        "glyphicon glyphicon-import", 
        "glyphicon glyphicon-registration-mark",
        "glyphicon glyphicon-calendar"];
        
        return(
            (this.state.is_show) ? 
            <li className="list-group-item">
                <span className={icons[this.props.index]}></span> {"  " + this.props.name}
                { (this.props.request_count > 0) ? 
                 <span className="badge">{this.props.request_count}</span>
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