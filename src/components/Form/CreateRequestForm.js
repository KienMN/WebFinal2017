import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import './CreateRequestForm.css';
import { Editor } from './Editor';

/**
 * Chua ro mot so muc 
 * data-flow???
 * Chuyen deadline tu Date -> millis
 * Them mot so chu y// Lam sau  
 * submit chua lam
 * @va
 */

export class CreateRequestForm extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            employee_id: '', assigned_to: '',
            team_id: '', subject: '',
            content: '', priority: '',
            deadline: 0, relaters: '', image: '',

            content_set: false, content_st:'', sub_st:'', 
            deadline_set: false, deadline_st: ''
        }
        this.handleDayChange = this.handleDayChange.bind(this);
        this.validate = this.validate.bind(this);
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }
    handleDayChange(date) {
        this.setState({
          deadline: date, 
          deadline_set: true
        });
      }
    handleEditorChange(text) {
        this.setState({
            content: text,
            content_set: true
        });
    }
    validate() {
        (this.state.subject.trim() === "") ? this.setState({sub_st: "has-error"}) : this.setState({sub_st: ""})   
        !(this.state.deadline_set) ? this.setState({deadline_st: "has-error"}) : this.setState({deadline_st: ""}) 
        !(this.state.content_set) ? this.setState({content_st: "has-error"}) : this.setState({content_st: ""})   
    }
    render() {
        const dept_info = [
            {    dept_id: "0",
                dept_name: "Hà Nội - IT",
            }, 
            {
                dept_id: "1",
                dept_name: "Đà Nẵng IT"
            }    
        ];

        const priority_arr = [
            {id: 1, name: "Thấp"},
            {id: 2, name: "Bình thường"},
            {id: 3, name: "Cao"},
            {id: 4, name: "Khẩn cấp"}
        ];

        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    Thêm Công Việc
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={"form-group " + this.state.sub_st}>
                                <label>Tên công việc</label>
                                <input className="form-control" placeholder="Enter text" onBlur={(e) => this.setState({
                                    subject: e.target.value
                                })} />
                            </div>
                        </div>           
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Mức độ ưu tiên</label>
                                <select className="form-control" onChange={(e) => this.setState({
                                        priority: e.target.value
                                    })}>
                                        {priority_arr.map((prior, index) => (
                                            <option key={index} value={prior.id}>{prior.name}</option>
                                        ))}
                                      
                                </select>
                            </div>      
                            <div className="form-group">
                                <label>Bộ phận IT</label>
                                    <select className="form-control" onChange={(e) => this.setState({
                                        dept_id: e.target.value
                                    })}>
                                        {dept_info.map((dept, index) => (
                                            <option key={index} value={dept.dept_id}>{dept.dept_name}</option>
                                        ))}
                                      
                                    </select> 
                            </div>         
                        </div>
                        <div className="col-lg-6">
                            <div className={"form-group " + this.state.deadline_st}>
                                <label>Ngày hết hạn</label>
                                <DayPickerInput     
                                    onDayChange={this.handleDayChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Người liên quan</label>
                                <input className="form-control" placeholder="Enter text" onBlur={(e) => this.setState({
                                    relaters: e.target.value
                                })} />
                            </div>
                        </div>
                    </div>
               
                    <div className="row" >
                         <div className="col-lg-12">
                            <label>Nội dung</label>
                            <Editor onChange={this.handleEditorChange}/>
                            <div className="form-group">
                                <label>Choose file to upload</label>
                                <input type="file" />
                            </div>
                         </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onClick={this.validate}>Submit Button</button>
                </div>    
            </div>
        );
    
    }
}