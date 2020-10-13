import React, { Component } from 'react';

class TaskFrom extends Component {
	
render() {
	
	return(
			<div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Add job</h3>
                </div>
                <div className="panel-body">
                   <form >
                       
                       <div className="form-group">
                           <label >Name</label>
                           <input type="text" 
                               className="form-control" 
                               
                               placeholder="Name"
                            />
                       </div>
                       <label >Status</label>
                       <select name="" id="input" className="form-control">
                           <option value="">Yes</option>
                           <option value="">No</option>
                       </select>
                        <br/>
                        <span >
                           <button type="submit" className="btn btn-primary" >Add</button>   &nbsp;
                           <button type="submit" className="btn btn-primary" >Cancel</button>
                        </span>
                   </form>
                </div>
            </div>

		)
	}
}
export default TaskFrom;