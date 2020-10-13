import React, { Component } from 'react';

class Result extends Component {
	setStyle(){
		return {
			color : this.props.color,
			borderColor : this.props.color,
			fontSize: this.props.fontSize
		}
	};
render() {
	return(
			<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
	            <p>color : {this.props.color} - Size ={this.props.fontSize}
	            	</p>
	                <div id="content" style={this.setStyle()} >
	                   abcd
	                </div>
            </div>	
        )
	}
}
export default Result;