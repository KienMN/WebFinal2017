import React from 'react';
/**
 * Lam sao de tu employee_id -> name va
 * @va
 */
export class Comment extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        /* temp*/  
        const duration = 10;
        const types = [
          {label: "label label-primary", name: "Bình thường"},
          {label: "label label-success", name: "Đánh giá"},
          {label: "label label-warnming", name: "Thay đổi ưu tiên"},
          {label: "label label-danger", name: "Thay đổi deadline"}
        ];
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
                      {(this.props.type > 3) ? 
                      <span style={{float: 'right'}} className={types[this.props.type].label}>{types[this.props.type].name}</span>
                      : <span style={{float: 'right'}} className={types[0].label}>{types[0].name}</span>
                      }
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
  request_id: 1,
  employee_name: "vananh", 
  content: "Nội dung bình luận",
  type: 0, //0 hoặc null comment bình thường, 1 - comment đánh giá, 2 - comment thay đổi mức độ ưu tiên, 3 - comment hay đổi deadline
  note: "note gì không", 
  create_at: 0, 
  update_at: 0    
};