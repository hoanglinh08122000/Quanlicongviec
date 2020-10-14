import React, { Component } from 'react';

class TaskFrom extends Component {
constructor(props){
    super(props);
    this.state={
        id:'',
        name : '',
        status : true
    }
}

componentWillMount(){

  if(this.props.taskEditing){
    this.setState({
      id : this.props.taskEditing.id,
      name : this.props.taskEditing.name,
      status : this.props.taskEditing.status,
    });
   
  }
}

componentWillReceiveProps(nextProps){
    if (nextProps && nextProps.taskEditing) {
        this.setState({
            id : nextProps.taskEditing.id,
            name : nextProps.taskEditing.name,
            status : nextProps.taskEditing.status,


        }) 
        }else if(!nextProps.taskEditing){
            this.setState({
                id:'',
                name : '',
                status : true
            })
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
	var {id} = this.state;

	return(
			<div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id !== '' ? 'Update' : 'Add Job'}
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