import React from 'react';
import {Link} from 'react-router-dom';

class HeaderNavbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "Kien Mai Ngoc"
		}
	}
	render() {
		return (
			<div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
				<div className="navbar-header">
					<a href="#" className="navbar-brand">IT Supporter</a>
				</div>

				<ul className="nav navbar-right navbar-top-links">
					<li className="dropdown">
						<a style={{height:50}} className="btn btn-link dropdown-toggle" data-toggle="dropdown">
							 {this.state.username} <b className="caret"></b>
						</a>
						<ul className="dropdown-menu dropdown-user">
							<li>
								<a href="#"><i className="glyphicon glyphicon-user"></i> User Profile</a>
							</li>
							<li>
								<a href="#"><i className="glyphicon glyphicon-wrench"></i> Settings</a>
							</li>
							<li className="divider"></li>
							<li>
								<Link to="/login"><i className="glyphicon glyphicon-log-out"></i> Logout</Link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		);
	}
}

export default HeaderNavbar;