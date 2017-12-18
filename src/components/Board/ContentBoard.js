import React from 'react';
import {Comment} from './Comment'
import {Editor} from '../Form/Editor'
import './ContentBoard.css'
import ReactDOM from 'react-dom'
/**
 * Show Request's content and comments
 * @va
 */
export class ContentBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content,
            comments: [], 
            editor_change: ''
        };
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleEditorChange(text) {
        this.setState({
            editor_change: text
        });
    }

    handleSubmit() {
        const new_comment = {request_id: this.props.id, employee_name: "vananh", content: this.state.editor_change,
            type: 0, //0 hoặc null comment bình thường, 1 - comment đánh giá, 2 - comment thay đổi mức độ ưu tiên, 3 - comment hay đổi deadline
            note: "note gì không", create_at: 0, update_at: 0};
        var cmt_arr = this.state.comments.slice();
        cmt_arr.push(new_comment);
        this.setState ({
            comments: cmt_arr, 
            editor_change: ""
        });   
    }

    componentDidMount() {
        const comment_info = {
            request_id: 1,
            employee_name: "vananh", 
            content: "Nội dung bình luận",
            type: 0, //0 hoặc null comment bình thường, 1 - comment đánh giá, 2 - comment thay đổi mức độ ưu tiên, 3 - comment hay đổi deadline
            note: "note gì không", 
            create_at: 0, 
            update_at: 0 
        };
        const tmp_comments = [comment_info, comment_info];
        {this.setState({comments: tmp_comments})}
    }
    
    render() {
        const tmp_content=<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>;    
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                <h4> <span className="glyphicon glyphicon-folder-close"></span> Nội Dung</h4>
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
                        <span>{tmp_content}</span>
                        <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share" /> Share</button>
                        <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up" /> Like</button>
                        <span className="pull-right text-muted">45 likes - 2 comments</span>
                    </div>

                    <div className="box-footer box-comments">
                        {this.state.comments.map((_comment, index) => <Comment key={index} {..._comment} />)}
                        
                        {/*Create a new comment*/}
                        <div className="editor-comments">
                            <Editor change={this.state.editor_change} onChange={this.handleEditorChange}/>
                            <button className="btn btn-primary" onClick={this.handleSubmit}>Comment</button>
                        </div>

                    </div>
                </div> 
            </div>
        ); 
    }
}

ContentBoard.defaultProps = {
    id: 1, //request_id
    created_by: 1, //employee_id
    content: "This is a request"
};