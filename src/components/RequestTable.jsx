import React from 'react';

class RequestTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Danh sách công việc liên quan",
			tableHeads: ["Tên công việc", "Mức độ ưu tiên", "Người yêu cầu", "Người thực hiện", "Ngày hết hạn", "Trạng thái"],
			tableData: 
				[
					["Sửa bàn phím", "Cao", "Phạm Tuấn Anh", "PTA", "2017-12-18 20:00:00", "In progress"],
					["Active window", "Trung bình", "Phạm Tuấn Anh", "PTA", "2017-12-17 20:00:00", "In progress"]
				]

		}
	}

	render() {
		return (
			<div id="page-wrapper">
			<div className="row">
				<div className="col-lg-12">
					<div className="panel panel-default">
						<div className="panel-heading">
							{this.state.title}
						</div>
						<div className="panel-body">
							<div className="dataTable_wrapper">
								<table className="table table-striped table-bordered table-hover" id="requestTable">
									<thead>
										<tr>
											<th>STT</th>
											{this.state.tableHeads.map((tableHead, index) => <th>{tableHead}</th>)}
										</tr>
									</thead>
									<tbody>
										{this.state.tableData.map((request, index) => <TableRow key = {index} data = {request} />)}
									</tbody>
								</table>

							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		);
	}
}

class TableRow extends React.Component {
	constructor(props) {
		super(props);
		this.select = this.select.bind(this);
		this.state = {
			isRead: false
		}
	}

	select() {
		alert("OK");
		this.setState({isRead: true});
	}
	render() {
		var markRead = "unread";
		if (this.state.isRead) {
			markRead = "";
		}
		return (
			<tr onClick={this.select} className={markRead}>
				<td></td>
				<td>{this.props.data[0]}</td>
				<td>{this.props.data[1]}</td>
				<td>{this.props.data[2]}</td>
				<td>{this.props.data[3]}</td>
				<td>{this.props.data[4]}</td>
				<td>{this.props.data[5]}</td>
			</tr>
		);
	}
}

export default RequestTable;