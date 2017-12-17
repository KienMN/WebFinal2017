import React from 'react';
/**
 * Lam sao de tu employee_id -> name va anh
 */
export class Comment extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        ;
        const duration = 10;
        return(
            <div className="box-comment">
                <div className="row">
                <div className="col-sm-1">
                  <div className="thumbnail">
                    <img className="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                  </div>
                </div>{/* /col-sm-1 */}
                <div className="col-sm-11">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <strong>{this.props.employee_name}</strong> <span className="text-muted">commented {duration} days ago</span>
                    </div>
                    <div className="panel-body">
                      {this.props.content}
                    </div>{/* /panel-body */}
                  </div>{/* /panel panel-default */}
                </div>{/* /col-sm-5 */}
              </div>
              
            </div>                 
        );
    }
}
Comment.defaultProps = {
    employee_name: "vananh",
    type: "",
    content: "this is a comment",
    note: "",
    created_at: 0,
    updated_at: 0
};