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
			  href="http://02geek.com/" target="_blank" />
			<Button className="btn-secondary" />
			<Button className="btn-danger-outline btn-sm" 
			  href="http://02geek.com/" />
			</p>
			<Button className="btn-primary-outline btn-lg btn-block" />
	            </div>
	        </div>;
	}	
}	
