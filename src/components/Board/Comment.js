import React from 'react';

export class Comment extends React.Component {
    render() {
        return(
            <div className="box-comment">
                
                <img className="img-circle img-sm" src="#img-link" alt="User Image" />
                <div className="comment-text">
                <span className="username">
                    Maria Gonzales
                    <span className="text-muted pull-right">8:03 PM Today</span>
                </span>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                </div>
                {/* /.comment-text */}
            </div>                 
        );
    }
}
