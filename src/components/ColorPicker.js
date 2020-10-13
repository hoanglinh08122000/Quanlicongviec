import React, { Component } from 'react';

class ColorPicker extends Component {
	constructor(props){
		super(props);
		this.state = {
			colors : ['red','blue','yellow','black']
		};
	}
	showColor(color){
		return {
			background : color,
		};
	}
	setColor(color){
		this.props.onReceiveColor(color);
	}
render() {
	var isColor = this.state.colors.map((color, index) => {
		return <span 
						className = { this.props.color === color ? 'active' : ''} 
						key = {index} 
						style={this.showColor(color)}
						onClick = {() => this.setColor(color)}
				>
	               		
	           </span> 
	});
	return(
			 <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
               <div className="panel panel-primary">
	                <div className="panel-heading">
	                    <h3 className="panel-title">Color Picker</h3>
	                </div>
	                <div className="panel-body"> 
	                	      {isColor}
	                	      
	                </div>
	            </div>
            </div>

		)
	}
}
export default ColorPicker;