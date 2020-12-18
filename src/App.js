import React, { Component } from 'react';
import './App.css';
// import './style.css';

import Home from "./pages/Home";
// import Errors from "./pages/Error";
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
// import Page1 from './pages/Page1';
// import Page2 from './pages/Page2';
import AuthWrapper from "./pages/AuthWrapper";
import PrivateRoute from "./pages/PrivateRoute";
// import Login from './pages/Login';
// import Page3 from './pages/Page3';
// import Page4 from './pages/Page4';
import About  from './pages/About';
import Maintenance from './pages/Maintenance';


class App extends Component {
	 render() {
	 	return(
			<AuthWrapper>
				<Navbar />
				<Switch>
					 <PrivateRoute path="/" exact={true}>
						<Home />
					</PrivateRoute>

					{/* <Route path="/page1">
						<Page2/>
					</Route>
					<Route path="/page2">
						<Page1/>
					</Route>
					<Route path="/page3">
						<Page3/>
					</Route>
					<Route path="/page4">
						<Page4/>
					</Route>
					<Route path="/login">
						<Login/>
					</Route> 
					*/}

					<Route path="/about">
						<About/>
					</Route> 
					{/* <Route component={Errors} /> */}
					<Route component={Maintenance} />
				</Switch>
			</AuthWrapper>			

  		);
	}
}

export default App;

