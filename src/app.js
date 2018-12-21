import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';

export default class App extends React.Component{
	render(){
	 return <Jumbotron className="-fluid text-sm-center"
	         style={{backgroundImage:'url(img/fall-1072821_1920.jpg)', color:'white'}} containerFluid={true}>
	              <h1>Building React.js User Interfaces</h1>
	              <p>with Bootstrap and SASS.</p>
	              <p>
			<Button className="-primary" 
			  href="http://02geek.com/" target="_blank" disabled />
			<Button className="-danger-outline -sm" disabled />
			</p>
			<Button className="-primary-outline -lg -block" disabled />
	        </Jumbotron>;
	}	
}	
