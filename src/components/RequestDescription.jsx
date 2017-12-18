import React from "react";
import AssignedEmployeeSuggest from './AssignedEmployeeSuggest.jsx';
import RelatersSuggest from './RelatersSuggest.jsx';
import DayPickerInput from 'react-day-picker/DayPickerInput';
// import './css/day-picker.css';

class RequestDescription extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			subject: "Sửa bàn phím",
			data: {
				"created_by": "Phạm Tuấn Anh",
				"status": "1",
				"priority": "2",
				"created_at": "2017/12/20 14:00:00",
				"deadline": "2017/12/20 16:00:00",
				"dept_id": "2",
				"assigned_to": "NA",
				"relaters": ["KienMN", "MNKien"]
			},
			tmpData: {
				"created_by": "Phạm Tuấn Anh",
				"status": "1",
				"priority": "2",
				"created_at": "2017/12/20 14:00:00",
				"deadline": "2017/12/20 16:00:00",
				"dept_id": "2",
				"assigned_to": "NA",
				"relaters": ["KienMN", "MNKien"]
			},
			availableStatus: [0, 0, 0, 0, 0, 1],
			setOfStatus: ["New", "In progress", "Resolved", "Feedback", "Closed","Cancelled"]
		}
		this.handleDeptChange = this.handleDeptChange.bind(this);
		this.handleSubmitDeptChange = this.handleSubmitDeptChange.bind(this);
		this.resetDept = this.resetDept.bind(this);
		
		this.handlePriorityChange = this.handlePriorityChange.bind(this);
		this.handleReasonChange = this.handleReasonChange.bind(this);
		this.handleSubmitPriorityChange = this.handleSubmitPriorityChange.bind(this);
		this.resetPriority = this.resetPriority.bind(this);

		this.handleDayChange = this.handleDayChange.bind(this);

		// this.handleAssignedEmployeeChange = this.handleAssignedEmployeeChange.bind(this);
		this.handleSubmitAssignedEmployeeChange = this.handleSubmitAssignedEmployeeChange.bind(this);

		this.handleStatusChange = this.handleStatusChange.bind(this);
		this.handleSubmitStatusChange = this.handleSubmitStatusChange.bind(this);
		this.resetStatus = this.resetStatus.bind(this);

	}

	// Handle change dept
	handleDeptChange(event) {
    	let new_dept_id = event.target.value;
    	this.setState((prevState, props) => {
    		let {dept_id, ...others} = prevState.tmpData;
    		return {tmpData: {dept_id: new_dept_id, ...others}}
    	});
  	}

  	handleSubmitDeptChange(event) {
  		let new_dept_id = this.state.tmpData.dept_id;
  		this.setState((prevState, props) => {
  			let {dept_id, ...others} = prevState.data;
  			return {data: {dept_id: new_dept_id, ...others}};
  		});
  	}

  	resetDept(event) {
		let old_dept_id = this.state.data.dept_id;
		this.setState((prevState, props) => {
			let {dept_id, ...others} = prevState.tmpData;
			return {tmpData: {dept_id: old_dept_id, ...others}};
		});
	}

	// Handle change priority
	handlePriorityChange(event) {
		let newPriority = event.target.value;
    	this.setState((prevState, props) => {
    		let {priority, ...others} = prevState.tmpData;
    		return {tmpData: {priority: newPriority, ...others}}
    	});
	}

	handleReasonChange(event) {
		if (event.target.value.length != 0) {
			document.getElementById("changePriorityButton").className = "btn btn-primary";
		} else {
			document.getElementById("changePriorityButton").className = "btn btn-primary disabled";
		}
	}

	handleSubmitPriorityChange(event) {
		let newPriority = this.state.tmpData.priority;
		alert(document.getElementById("reason").value);
    	this.setState((prevState, props) => {
    		let {priority, ...others} = prevState.data;
    		return {data: {priority: newPriority, ...others}};
    	});
	}

	resetPriority(event) {
		let oldPriority = this.state.data.priority;
    	this.setState((prevState, props) => {
    		let {priority, ...others} = prevState.tmpData;
    		return {tmpData: {priority: oldPriority, ...others}}
    	});
	}

	// Handle change deadline
	handleDayChange(date) {
		console.log(date);
	}

	// Handle change relaters

	// Handle change assigned employee
	// handleAssignedEmployeeChange(event) {
	// 	alert();
	// }

	// Handle change assigned employee
	handleSubmitAssignedEmployeeChange(event) {
		let newAssignedEmployee = document.getElementById("newAssignedEmployee").value;
		this.setState((prevState, props) => {
			let {assigned_to, ...others} = prevState.data;
			return {data: {assigned_to: newAssignedEmployee, ...others}};
		});
		this.setState((prevState, props) => {
			let {assigned_to, ...others} = prevState.tmpData;
			return {tmpData: {assigned_to: newAssignedEmployee, ...others}};
		});
	}

	// Handle change status
	handleStatusChange(event) {
    	let newStatus = event.target.value;
    	this.setState((prevState, props) => {
    		let {status, ...others} = prevState.tmpData;
    		return {tmpData: {status: newStatus, ...others}}
    	});
  	}

  	handleSubmitStatusChange(event) {
  		let newStatus = this.state.tmpData.status;
  		this.setState((prevState, props) => {
  			let {status, ...others} = prevState.data;
  			return {data: {status: newStatus, ...others}};
  		});
  	}

  	resetStatus(event) {
		let oldStatus = this.state.data.status;
		this.setState((prevState, props) => {
			let {status, ...others} = prevState.tmpData;
			return {tmpData: {status: oldStatus, ...others}};
		});
	}

	render() {
		let deptName = "Đà Nẵng - IT";
		if (this.state.data.dept_id == "1") {
			deptName = "Hà Nội - IT";
		}

		let priority = this.state.data.priority;
		if (priority == "1") {
			priority = "Thấp";
		} else if (priority == "2") {
			priority = "Bình thường";
		} else if (priority == "3") {
			priority = "Cao";
		} else {
			priority = "Khẩn cấp"
		}

		let status = this.state.data.status;
		if (status == "1") {
			status = "New";
		} else if (status == "2") {
			status = "In progress";
		} else if (status == "3") {
			status = "Resolved";
		} else if (status == "4") {
			status = "Feedback";
		} else if (status == "5") {
			status = "Closed";
		} else {
			status = "Cancelled";
		}
		
		return (
			<div id="page-wrapper">
				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-default">
							<div className="panel-heading">
								{this.state.subject}
							</div>
							<div className="break-line">
								<p className="text-center">
									<button type="button" className="btn btn-default" data-toggle="modal" data-target="#deptChangeModal"><i className="fa fa-users" aria-hidden="true"></i> Thay đổi bộ phận IT</button>
									<button type="button" className="btn btn-default" data-toggle="modal" data-target="#priorityChangeModal"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Thay đổi mức độ ưu tiên</button>
									<button type="button" className="btn btn-default" data-toggle="modal" data-target="#deadlineChangeModal"><i className="fa fa-calendar" aria-hidden="true"></i> Thay đổi deadline</button>
									<button type="button" className="btn btn-default" data-toggle="modal" data-target="#relatersChangeModal"><i className="fa fa-user" aria-hidden="true"></i> Thay đổi người liên quan</button>
									<button type="button" className="btn btn-default" data-toggle="modal" data-target="#assignedEmployeeChangeModal"><i className="fa fa-hand-o-right" aria-hidden="true"></i> Assign</button>
									<button type="button" className="btn btn-default" data-toggle="modal" data-target="#statusChangeModal"><i className="fa fa-exchange" aria-hidden="true"></i> Thay đổi trạng thái <b className="caret"></b></button>
								</p>
							</div>
							<div className="panel-body">
								<div className="dataTable_wrapper">
									<table className="table table-borderless" id="testTable">
										<tbody>
											<tr>
												<td><span><strong>Ngày tạo:</strong></span></td>
												<td>{this.state.data.created_at}</td>
												<td><span><strong>Ngày hết hạn:</strong></span></td>
												<td>{this.state.data.deadline}</td>
												<td></td>
												<td></td>
											</tr>
											<tr>
												<td><span><strong>Người yêu cầu:</strong></span></td>
												<td>{this.state.data.created_by}</td>
												<td><span><strong>Người thực hiện:</strong></span></td>
												<td>{this.state.data.assigned_to}</td>
												<td><span><strong>Bộ phận IT:</strong></span></td>
												<td>{deptName}</td>
											</tr>
											<tr>
												<td><span><strong>Mức độ ưu tiên:</strong></span></td>
												<td>{priority}</td>
												<td><span><strong>Trạng thái:</strong></span></td>
												<td>{status}</td>
												<td><span><strong>Người liên quan:</strong></span></td>
												<td>
													{this.state.data.relaters.map((person, i) => person + " ")}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- Dept Change Modal -->*/}
				<div className="modal fade" id="deptChangeModal" role="dialog">
					<div className="modal-dialog">
						{/*<!-- Modal content-->*/}
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal">&times;</button>
								<h4 className="modal-title">Thay đổi bộ phận IT</h4>
							</div>
							<div className="modal-body">
								<p>Chọn bộ phận IT</p>
								<select className="form-control" onChange={this.handleDeptChange} value={this.state.tmpData.dept_id}>
									<option value="1">Hà Nội - IT</option>
									<option value="2">Đà Nẵng - IT</option>
								</select>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmitDeptChange}>Xác nhận</button>
								<button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.resetDept}>Huỷ</button>
							</div>
						</div>
					</div>
				</div>

				{/*<!-- Priority Change Modal -->*/}
				<div className="modal fade" id="priorityChangeModal" role="dialog">
					<div className="modal-dialog">
						{/*<!-- Modal content-->*/}
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal">&times;</button>
								<h4 className="modal-title">Thay đổi mức độ ưu tiên</h4>
							</div>
							<div className="modal-body">
								<label>Chọn mức độ</label>
								<select className="form-control" onChange={this.handlePriorityChange} value={this.state.tmpData.priority}>
									<option value="1">Thấp</option>
									<option value="2">Bình thường</option>
									<option value="3">Cao</option>
									<option value="4">Khẩn cấp</option>
								</select>
								<br/>
								<label>Lý do thay đổi mức độ (bắt buộc)</label>
								<textarea className="form-control" onChange={this.handleReasonChange} id="reason" />
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary disabled" data-dismiss="modal" onClick={this.handleSubmitPriorityChange} id="changePriorityButton">Xác nhận</button>
								<button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.resetPriority}>Huỷ</button>
							</div>
						</div>
					</div>
				</div>

				{/*<!-- Deadline Change Modal -->*/}
				<div className="modal fade" id="deadlineChangeModal" role="dialog">
					<div className="modal-dialog">
						{/*<!-- Modal content-->*/}
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal">&times;</button>
								<h4 className="modal-title">Thay đổi deadline</h4>
							</div>
							<div className="modal-body">
								<label>Chọn deadline</label>
								<DayPickerInput onDayChange={this.handleDayChange} />
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary" data-dismiss="modal">Xác nhận</button>
								<button type="button" className="btn btn-default" data-dismiss="modal">Huỷ</button>
							</div>
						</div>
					</div>
				</div>

				{/*<!-- Relaters Change Modal -->*/}
				<div className="modal fade" id="relatersChangeModal" role="dialog">
					<div className="modal-dialog">
						{/*<!-- Modal content-->*/}
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal">&times;</button>
								<h4 className="modal-title">Thay đổi người liên quan</h4>
							</div>
							<div className="modal-body">
								<label>Danh sách người liên quan</label>
								{this.state.tmpData.relaters.map((person, index) => <RelatersSuggest key = {index} relater = {person}/>)}
								<RelatersSuggest relater=""/>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmitRelatersChange}>Xác nhận</button>
								<button type="button" className="btn btn-default" data-dismiss="modal">Huỷ</button>
							</div>
						</div>
					</div>
				</div>

				{/*<!-- Assigned Employee Change Modal -->*/}
				<div className="modal fade" id="assignedEmployeeChangeModal" role="dialog">
					<div className="modal-dialog">
						{/*<!-- Modal content-->*/}
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal">&times;</button>
								<h4 className="modal-title">Thay đổi người thực hiện</h4>
							</div>
							<div className="modal-body">
								<label>Nhập tên người thực hiện</label>
								<AssignedEmployeeSuggest assignedEmployee={this.state.data.assigned_to} buttonId="changeAssignedEmployeeButton" />
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary disabled" data-dismiss="modal" onClick={this.handleSubmitAssignedEmployeeChange} id="changeAssignedEmployeeButton">Xác nhận</button>
								<button type="button" className="btn btn-default" data-dismiss="modal">Huỷ</button>
							</div>
						</div>
					</div>
				</div>
				
				{/*<!-- Status Change Modal -->*/}
				<div className="modal fade" id="statusChangeModal" role="dialog">
					<div className="modal-dialog">
						{/*<!-- Modal content-->*/}
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal">&times;</button>
								<h4 className="modal-title">Thay đổi trạng thái</h4>
							</div>
							<div className="modal-body">
								<label>Lựa chọn trạng thái</label>
								<select className="form-control" onChange={this.handleStatusChange} value={this.state.tmpData.status}>
									{/*<option value="1">New</option>
									<option value="2">In progress</option>
									<option value="3">Resolved</option>
									<option value="4">Feedback</option>
									<option value="5">Closed</option>
									<option value="6">Cancelled</option>*/}
									{this.state.availableStatus.map((val, i) => (val == 0) ? <option value={i + 1} key={i} disabled>{this.state.setOfStatus[i]}</option> : <option value={i + 1} key={i}>{this.state.setOfStatus[i]}</option>)};
								</select>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmitStatusChange}>Xác nhận</button>
								<button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.resetStatus}>Huỷ</button>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default RequestDescription;