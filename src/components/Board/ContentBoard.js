import React from 'react';
import {Comment} from './Comment'
import {Editor} from '../Form/Editor'
import './ContentBoard.css'

/**
 * In progress
 */
export class ContentBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            request_id : this.props.request_id
        };
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }
    handleEditorChange(text) {
        this.setState({
            content: text
        });
    }
    render() {
        
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                <h4> <span class="glyphicon glyphicon-folder-close"></span> Nội Dung</h4>
                </div>
                <div className="panel-body">

                    <div className="box-header with-border">
                        <div className="user-block">
                            <img style={{maxHeight: 70, maxWidth: 70}} className="img-thumbnail" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="User Image"/><br/>
                            <span className="username"><a href="#">Jonathan Burke Jr.</a></span>
                            <span className="text-muted"><em>Shared publicly - 7:30 PM Today</em></span>
                        </div>
                    </div>

                    <div className="box-body">
                        <p>Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind
                            texts. Separated they live in Bookmarksgrove right at
                            the coast of the Semantics, a large language ocean.
                            A small river named Duden flows by their place and supplies
                            it with the necessary regelialia. It is a paradisematic
                            country, in which roasted parts of sentences fly into
                            your mouth.</p>
                        <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share" /> Share</button>
                        <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up" /> Like</button>
                        <span className="pull-right text-muted">45 likes - 2 comments</span>
                    </div>

                    <div className="box-footer box-comments">
                        <Comment />
                        <Comment />
                        <div className="editor-comments">
                            <Editor onChange={this.handleEditorChange}/>
                            <button className="btn btn-primary">Comment</button>
                        </div>

                    </div>
                </div> 
            </div>
        ); 
    }
}