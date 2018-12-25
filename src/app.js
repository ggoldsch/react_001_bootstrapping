import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './appsource.scss';

export default class App extends React.Component{
	render(){
        const items = <Jumbotron className="-fluid custom" containerFluid={true}>
	              <h1>Building React.js User Interfaces</h1>
	              <p>with Bootstrap and SASS.</p>
	        <p>
			<Button className="-primary" 
			  href="http://02geek.com/" target="_blank" >Other way</Button>
			<Button className="-danger -sm" label="Discover stuff" />
			</p>
			<Button className="-primary -lg -block" label="Discover things and stuff"/>
         </Jumbotron>;

	 return (<ReactCSSTransitionGroup 
                transitionName="example" 
                transitionEnterTimeout={500} 
                transitionLeaveTimeout={300}>
        {items}
       </ReactCSSTransitionGroup>);
	}	
}	
