import React, { Component } from 'react';

class Size extends Component {
    updateSize(value){
        this.props.onUpdateSize(value);
    }
     
render() {
	return(
		<div className="col-xs-54 col-sm-4 col-md-45 col-lg-54">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Size = {this.props.fontSize}px</h3>
                    </div>
                    <div className="panel-body">
                        <button type="submit" className="btn btn-success" onClick={() => this.updateSize(2)}>Tăng</button>
                        <button type="submit" className="btn btn-success" onClick={() => this.updateSize(-2)}>Giảm</button> 
                    </div>
                </div>
               
            </div>

		)
	}
}
export default Size;