import React from 'react';
import './styles.css';
import { SubItem } from './SubItem';
import {Link} from 'react-router-dom';
/**
 * states: 1 - new, 2 - inprogress, 3 - resolved, 4 - feedback, 5 - closed, 6 - cancelled 
 * different subItems for each sidemenu
 */
export class SubSideMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        all: this.props.all,
        new: this.props.new,
        inprogress: this.props.inprogress,
        resolved: this.props.resolved,
        outdate: this.props.outdate,
        feedback: this.props.feedback,
        closed: this.props.closed
      };
    }

    render() {
      
      return(
          <div style={{width: 300}} className="menu">
            <div id="title">
              {this.props.name}   
            <button className="btn btn-link" data-toggle="collapse" data-target={"#colapse-list" + this.props.type}>
              <span className="glyphicon glyphicon-option-horizontal"></span>
            </button>
            </div>
          
            <div style={{width: 300}} id={"colapse-list" + this.props.type}>
            <ul className="list-group">
                <SubItem user_id={this.props.user_id} index={0} name="All" request_count={this.state.all}/>
                <SubItem user_id={this.props.user_id} index={1} name="New" request_count={this.state.new}/>
                <SubItem user_id={this.props.user_id} index={2} name="Inprocess" request_count={this.state.inprogress}/>
                {(this.props.type > 1) ?  
                <SubItem user_id={this.props.user_id} index={4} name="Feedback" request_count={this.state.feedback}/>
                :<SubItem user_id={this.props.user_id} index={3} name="Resolved" request_count={this.state.resolved}/>}
                <SubItem user_id={this.props.user_id} index={6} name="Out Of Date" request_count={this.state.outdate}/>
                {(this.props.type > 1) ?  
                <SubItem user_id={this.props.user_id} index={5} name="Closed" request_count={this.state.closed}/>
                :<span></span>
                }
            </ul>

            </div>
          </div>
        );
    }
}

SubSideMenu.defaultProps = {
  user_id: 0,
  type: 0, //0-Viec toi yeu cau, 1 - Cong viec lien quan, 2-Cong viec duoc giao 3- Công việc của team  4-Công việc của bộ phận IT
  name: 'Side menu',
  all: 18,
  new: 12,
  inprogress: 5,
  resolved: 0,
  outdate: 1, 
  closed: 5
};