import React from 'react';

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
						<a href="" className="dropdown-toggle" data-toggle="dropdown">
							<i className="fa fa-user fa-fw"></i> {this.state.username} <b className="caret"></b>
						</a>
						<ul className="dropdown-menu dropdown-user">
							<li>
								<a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
							</li>
							<li>
								<a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
							</li>
							<li className="divider"></li>
							<li>
								<a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		);
	}
}

export default HeaderNavbar;