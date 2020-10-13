import React, { Component } from 'react';

class Reset extends Component {
onReset = () => {
	this.props.onReset(true);
}
render() {
	return(
			<button type="submit" className="btn btn-danger" onClick={this.onReset}>Reset</button>
		)
	}
}
export default Reset;