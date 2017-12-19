import React from 'react';
import HeaderNavbar from '../HeaderNavbar';
import { ContentBoard } from '../Board/ContentBoard';
import {CreateRequestForm} from '../Form/CreateRequestForm'
import { SideMenu } from '../SideMenu/SideMenu';
/**
 * Layout having 2 columns A1
 * @va
 */
export class MenuLayout extends React.Component {
    render() {
        return(
        <div>
            <HeaderNavbar />
            <div style={{paddingTop: 70}} className="container-fluid">
                <div className="row">
                <div className="col-lg-3">  
                   <SideMenu />
                </div>
                <div className="col-lg-9">
                    <CreateRequestForm />
                </div>
                </div>
            </div>
            </div>
        );
    }
}