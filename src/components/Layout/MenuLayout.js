import React from 'react';
import HeaderNavbar from '../HeaderNavbar';
import {SubSideMenu} from '../SideMenu/SubSideMenu';
import { ContentBoard } from '../Board/ContentBoard';
import './Layout.css';
import { SideMenu } from '../examples/SideMenu';
import {CreateRequestForm} from '../Form/CreateRequestForm'
/**
 * Layout having 2 columns A1
 * @va
 */
export class MenuLayout extends React.Component {
    render() {
        return(
        <div>
            <HeaderNavbar />
            <div className="body container-fluid">
                <div className="row">
                <div className="col-lg-3">  
                   <SideMenu />
                </div>
                <div className="col-lg-9">
                   {/*<ContentBoard />*/}
                   <CreateRequestForm />
                   
                </div>
                </div>
            </div>
            </div>
        );
    }
}