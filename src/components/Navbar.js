import React, { Component } from 'react';
import logo from '../images/svgnds.png';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
// import styled from 'styled-components';

class Navbar extends Component {
	state = {
		isOpen:false,
		active: 'home',
	}


	handleToggle = () =>{
	this.setState({isOpen:!this.state.isOpen})
	}

	componentDidMount(){
		let url = window.location.pathname;
		// console.log(url)
		switch(url){
			case '/': 
				this.setState({active: 'home'})
			break;
			case '/music': 
				this.setState({active: 'page1'})
			break;
			case '/weather': 
				this.setState({active: 'page2'})
			break;
			case '/chat': 
				this.setState({active: 'page3'})
			break;
			case '/retrille': 
				this.setState({active: 'retrille'})
			break;
			case '/about': 
				this.setState({active: 'about'})
			break;
			default:
				break;
		}
	}


	 render() {

	 	return(
	 		<nav className="navbar">
				<div className="nav-center">
	 				<div className="nav-header">
	 					<Link to="/">
	 						<img style={{maxHeight: "2.4rem", maxWidth: "2.4rem"}} className="logoApp" src={logo} alt="Beach Resort" />
	 					</Link>
	 					<button type="button" 
	 						className="nav-btn"
							onClick={this.handleToggle}
						>
	 					<FaAlignRight className="nav-icon" />
	 					</button>
	 				</div>
					<ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
						<li className={(this.state.active === 'home') ? 'active' : null }>
							<Link onClick={() => this.setState({active: 'home'})} to="/">Home</Link>
						</li>
						<li className={(this.state.active === 'page1') ? 'active' : null }>
							<Link  onClick={() => this.setState({active: 'page1'})} to="/page1">Music</Link>
						</li>
						<li className={(this.state.active === 'page2') ? 'active' : null }>
							<Link  onClick={() => this.setState({active: 'page2'})} to="/page2">Weather</Link>
						</li>
						<li className={(this.state.active === 'page3') ? 'active' : null }>
							<Link  onClick={() => this.setState({active: 'page3'})} to="/page3">Chat</Link>
						</li>
						<li className={(this.state.active === 'retrille') ? 'active' : null }>
							<Link  onClick={() => this.setState({active:'retrille'})} to="/page4">ReTrille</Link>
						</li>
						<li className={(this.state.active === 'about') ? 'active' : null }>
							<Link  onClick={() => this.setState({active: 'about'})} to="/about">About</Link>
						</li>
					</ul>
	 			</div>
	 		</nav>

	 		);
	 }
};

export default Navbar;