import React, { Component } from 'react';
import './App.css';
import TaskFrom from './components/taskfrom';
import Control from './components/control';
import TaskList from './components/TaskList';
// import Size from './components/size';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            task : [],
        }
    }

    componentWillMount(){ // gọi lại
        if(localStorage && localStorage.getItem('task')){
            var task = JSON.parse(localStorage.getItem('task'));
            this.setState({
                task:task
            });
        }
    }

    onAutoAdd = () =>{
        var task = [
            {
                id: this.getId(),
                name: 'PHP',
                status : true,
            },
            {
                id:this.getId(),
                name: 'NodeJs',
                status : false,
            },
            {
                id:this.getId(),
                name: 'Java',
                status : true,
            }
        ];
        this.setState({
            task : task
        });
        localStorage.setItem(task, JSON.stringify(task));


    }  
     
    randomID(){
        var randomString = require('random-string');
        var x = randomString();
        return x;
    }
    
    getId(){
        return this.randomID();
    }


    render() {
        //B1: lấy dữ liệu của task
         var tasks = this.state.task; // var task = this.state.task 
    return(
        <div className="container-fluid mg-50">
            <h1 id="mid">Quản lí công việc</h1>
            <hr/>
            <div className="row " id="abc">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <TaskFrom />
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <button type="button" className="btn btn-primary">
                        <span className="fa fa-plus mr-5">
                            Add Job
                        </span>
                    </button>
                    <button type="button" className="btn btn-success ml-5" onClick={this.onAutoAdd}>
                        <span className="fa fa-plus mr-5">
                            AutoAdd
                        </span>
                    </button>

                    <Control />
                    
                   {/* B2: gửi dữ liệu qua tasklist*/}
                    <TaskList tasks = { tasks } />
                </div>
                
                
            </div>
           
            
        </div>
    
    
    
    )
  }
}
export default App;
                                
                               