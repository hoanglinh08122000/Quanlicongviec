import React, { Component } from 'react';

class TaskFrom extends Component {
constructor(props){
    super(props);
    this.state={
        name : '',
        status : true
    }
}



onChange = (event) =>{
    var target = event.target;
    var name = target.name;
    var value=target.value;
    if (name === 'status'){
        value = target.value === 'true' ? true : false;
    };
    this.setState({
        [name] : value
    })
}
onCloseFrom = ()=>{
    this.props.onCloseFrom();
}
onSubmit = (event)=>{
    event.preventDefault();
    this.props.getDataFrom(this.state);
    // console.log(this.state);
}
onClear = () =>{
    this.setState({
        name:'',
        status:true
    })
}
render() {
	
	return(
			<div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Add job
                        <span className="fas fa-times right"onClick={this.onCloseFrom} ></span>
                    </h3>

                </div>
                <div className="panel-body">
                   <form onSubmit={this.onSubmit}>
                       
                       <div className="form-group">
                           <label >Name</label>
                           <input type="text" 
                               className="form-control" 
                               placeholder="Name"
                               name ="name"
                               onChange={this.onChange}
                            />
                       </div>
                       <label >Status</label>
                       <select name="status" onChange={this.onChange} className="form-control">
                           <option value={true}>Yes</option>
                           <option value={false}>No</option>
                       </select>
                        <br/>
                        <span >
                           <button type="submit" className="btn btn-primary" >Add</button>   &nbsp;
                           <button type="reset" className="btn btn-success" onClick={ this.onClear } >Cancel</button>
                        </span>
                   </form>
                </div>
            </div>

		)
	}
}
export default TaskFrom;