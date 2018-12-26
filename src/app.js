import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './appsource.scss';

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
        this.state = {click:0, labels:[]};
    }
    onClick(e){
        let labels = this.state.labels.concat([this.state.click]);
        this.setState({click:this.state.click+1, labels:labels});
        console.log("hello btn", this.state.click);
        //console.log(this);
    }

	render(){
        let buttons = this.state.labels.map((value, i)=>{    // returns an array of values
            return <Button key={value} className="-secondary" >{value}</Button>;
        });
        const items = <Jumbotron className="-fluid custom" containerFluid={true}>
	              <h1>Building React.js User Interfaces</h1>
	              <p>with Bootstrap and SASS.</p>
	        <p>
			<Button className="-primary" 
			  href="http://02geek.com/" target="_blank" >Other way</Button>
			<Button className="-danger -sm" label="Discover stuff" />
			</p>

			<Button onClick={this.onClick} className="-primary -lg -block">{this.state.click}</Button>

            {buttons}
         </Jumbotron>;

	 return (<ReactCSSTransitionGroup 
                transitionName="example" 
                transitionAppear={true}
                transitionAppearTimeout={500} 
                transitionEnterTimeout={500} 
                transitionLeaveTimeout={300}>
        {items}
       </ReactCSSTransitionGroup>);
	}	
}	
