import React from 'react';
import $ from 'jquery';

import '../styles/css/dataTables/dataTables.bootstrap.css';
import '../styles/css/dataTables/dataTables.responsive.css';

$.DataTable = require('datatables.net');

class RequestTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.title,
		
			tableHeads: ["Tên công việc", "Mức độ ưu tiên", "Người yêu cầu", "Người thực hiện", "Ngày hết hạn", "Trạng thái"],
			tableData: 
				[
					["Sửa bàn phím", "Cao", "Phạm Tuấn Anh", "PTA", "2017-12-18 20:00:00", 2],
					["Active window", "Trung bình", "Phạm Tuấn Anh", "PTA", "2017-12-17 20:00:00", 3],
					["Active window", "Trung bình", "Phạm Tuấn Anh", "PTA", "2017-12-17 20:00:00", 6]
				]	
		}
	}
	/*
	componentDidMount() {
		fetch('http://localhost:3001/api/v1/requests/2/my',{
			method: 'GET',
			mode: 'no-cors',
			headers: {
				sessionkey: 'f3821424b2ad64f99caa7009917164e37e0d21144ba83288b55f7a65dc859577edb2bef7d9c80ee0c6d036d0796a510623731c063f04e67312c0e118c2eccada'
			}
		}).then(result => {return result.json;
		}).then(data => {
			console.log(data.result)
		});
	}
	*/
	//get tableData
	//props: status, user_id
	//status:0 - all, 1 - new, 2 - inprogress, 3 - resolved, 4 - feedback, 5 - closed, 6 - cancelled 

	/*
	componentDidMount() {
		const s = document.createElement('script');
		const s2 = document.createElement('script');
		
		s.type = 'text/javascript';
		s2.type = 'text/javascript';
		
		s.src = "jquery.dataTables.min.js";
		s2.src = "dataTables.bootstrap.min.js";

		document.body.appendChild(s);
		document.body.appendChild(s2);
	}
	*/
	componentWillMount() {
		$(document).ready(function() {
			$('#dataTables-example').DataTable({
			         responsive: true
			        });
			      });
			      $(document).ready(function() {
			        var t = $('#requestTable').DataTable( {
			          responsive: true,
			          "columnDefs": [ {
			            "searchable": false,
			            "orderable": false,
			            "targets": 0
			          } ],
			          "order": [[ 1, 'asc' ]]
			        } );
			
			        t.on( 'order.dt search.dt', function () {
			          t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
			            cell.innerHTML = i+1;
			          } );
			        } ).draw();
				  });
	
		
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
												{this.state.tableHeads.map((tableHead, index) => <th key={index}>{tableHead}</th>)}
											</tr>
										</thead>
										<tbody>
											 {this.state.tableData.map((request, index) =>  
											 (request[5] === this.props.status || this.props.status === 0) 
											 ? <TableRow key = {index} data = {request} /> : <div></div>)}
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
		this.setState({isRead: true});
	}
	//data-href={"/user/" + this.props.user_id + "/dashboard/requests/" + 3}
	render() {
		var markRead = "unread";
		if (this.state.isRead) {
			markRead = "";
		}
		const status_arr = ["All", "New", "Inprogress", "Resolved", "Feedback", "Closed", "Cancelled"];
		
		return (
	
			<tr onClick={this.select} className={markRead}>
				<td></td>
				<td>{this.props.data[0]}</td>
				<td>{this.props.data[1]}</td>
				<td>{this.props.data[2]}</td>
				<td>{this.props.data[3]}</td>
				<td>{this.props.data[4]}</td>
				<td>{status_arr[this.props.data[5]]}</td>
			</tr>
			
		
		);
	}
}

export default RequestTable;