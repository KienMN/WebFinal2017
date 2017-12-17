import React from 'react';
import './SubSideMenu.css';
import { SubItem } from './SubItem';
/**
 * Inprogress: 
 * states: 1 - new, 2 - inprogress, 3 - resolved, 4 - feedback, 5 - closed,6 - cancelled 
 * different subItems for each sidemenu
 * toggle
 */
export class SubSideMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: this.props.name,
        all: this.props.all,
        new: this.props.new,
        inprogress: this.props.inprogress,
        resolved: this.props.resolved,
        outdate: this.props.outdate
      };
    }
    
    render() {
  
      return(
          <div className="menu">
            <div id="title">
              {this.state.name} 
              <button className="btn btn-link" data-toggle="collapse" data-target="#colapse-list"><span className="glyphicon glyphicon-option-horizontal"></span>
              </button>
            </div>
            <div style={{width: 300}} id="colapse-list">
              <ul className="list-group">
                <SubItem index="0" name="All" request_count={this.state.all}/>
                <SubItem index="1" name="New" request_count={this.state.new}/>
                <SubItem index="2" name="Inprocess" request_count={this.state.inprogress}/>
                <SubItem index="3" name="Resolved" request_count={this.state.resolved}/>
                <SubItem index="4" name="Out Of Date" request_count={this.state.outdate}/>
              </ul> 
            </div>
          </div>
        );
    }
}

SubSideMenu.defaultProps = {
  name: 'Side menu',
  all: 12,
  new: 0,
  inprogress: 5,
  resolved: 0,
  outdate: 0
};