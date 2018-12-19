import React from 'react';
import Button from './bootstrap/button';

export default class App extends React.Component{
	render(){
	 return <div className="jumbotron jumbotron-fluid text-sm-center"
	         style={{backgroundImage:'url(img/fall-1072821_1920.jpg)', color:'white'}}>
	            <div className="container">
	              <h1>Building React.js User Interfaces</h1>
	              <p>with Bootstrap and SASS.</p>
	              <p>
			<Button className="btn-primary" 
			  href="http://02geek.com/" target="_blank" disabled />
			<Button className="-secondary" disabled />
			<Button className="-danger-outline -sm" 
			  href="http://02geek.com/" disabled />
			</p>
			<Button className="-primary-outline -lg -block" disabled />
	            </div>
	        </div>;
	}	
}	
