import React from 'react';
import HeaderNavbar from '../HeaderNavbar';
import { SideMenu } from '../SideMenu/SideMenu';
import { ContentBoard } from '../Board/ContentBoard';

  /**
 * Layout having 2 columns A1
 * @va
 */
export class ContentLayout extends React.Component {
    render() {
        return(
        <div>  
            <HeaderNavbar />
            <div style={{paddingTop: 70}} className="container-fluid">
                <div className="row">
                <div className="col-lg-3">  
                   <SideMenu user_id={this.props.match.params.user_id} />
                </div>
                <div id="dashboard" className="col-lg-9">
                    <ContentBoard />
                </div>
                </div>
            </div>
            </div>
        );
    }
}