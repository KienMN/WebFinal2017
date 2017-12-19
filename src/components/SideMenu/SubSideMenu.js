import React from 'react';
import './styles.css';
import { SubItem } from './SubItem';
/**
 * Inprogress: 
 * states: 1 - new, 2 - inprogress, 3 - resolved, 4 - feedback, 5 - closed,6 - cancelled 
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
        feedback: this.props.feedback
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
                <SubItem index="0" name="All" request_count={this.state.all}/>
                <SubItem index="1" name="New" request_count={this.state.new}/>
                <SubItem index="2" name="Inprocess" request_count={this.state.inprogress}/>
                {(this.props.type > 1) ?  
                <SubItem index="5" name="Feedback" request_count={this.state.feedback}/>
                :<SubItem index="3" name="Resolved" request_count={this.state.resolved}/>}
                <SubItem index="4" name="Out Of Date" request_count={this.state.outdate}/>
            </ul>

            </div>
          </div>
        );
    }
}

SubSideMenu.defaultProps = {
  type: 0, //0-Viec toi yeu cau, 1 - Cong viec lien quan, ...
  name: 'Side menu',
  all: 18,
  new: 12,
  inprogress: 5,
  resolved: 0,
  outdate: 1
};