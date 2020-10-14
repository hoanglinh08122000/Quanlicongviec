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
            tasks : [],
            isDisplayFrom:false,
            taskEditing: null
        }
    }

    componentWillMount(){ // gọi lại
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks:tasks
            });
        }
    }

    onAutoAdd = () =>{
        var tasks = [
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
            tasks : tasks
        });
        localStorage.setItem(tasks, JSON.stringify(tasks));


    }
     
    randomID(){
        var randomString = require('random-string');
        var x = randomString();
        return x;
    }
    
    getId(){
        return this.randomID();
    };

    onFromAdd = ()=>{
        if(this.state.isDisplayFrom && this.state.taskEditing !== null){
            this.setState({
                isDisplayFrom:true,
                taskEditing: null
            })
           
        } else {
            this.setState({
                isDisplayFrom : !this.state.isDisplayFrom,
                taskEditing: null
            })
        }
        
    };
    onCloseFrom = () =>{
        this.setState({
            isDisplayFrom:false
        })
    };
    showEditing = () =>{
        this.setState({
            isDisplayFrom:true
        })
    };
    getDataFrom = (data)=>{
        var {tasks}=this.state;
        if(data.id === ''){
             data.id = this.randomID();
            tasks.push(data);
        }else{
            var index = this.findIndex(data.id);
            tasks[index]=data;
        }
       

        this.setState({
            tasks:tasks,
            taskEditing: null
        });
        localStorage.setItem('tasks', JSON.stringify(tasks)); 
        this.onCloseFrom();
    };
    onUpdateStatus = (id) =>{
         var {tasks}=this.state;
         var index = this.findIndex(id);// tạo function
         if(index !== -1){
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks:tasks
            })
            localStorage.setItem('tasks', JSON.stringify(tasks)); 
         }
        
    };
   

    findIndex=(id)=>{   // tìm kiếm ,kiểm tra xem id có tồn tại hay k
        var {tasks}=this.state;
        var result = -1;
        tasks.forEach((task, index)=> {
            if(task.id === id){
                // console.log(index);
                result = index;
            }
        });
        return result;
    };

    onDelete = (id) =>{
         var {tasks}=this.state;
         var index = this.findIndex(id);// tạo function
         if(index !== -1){
            tasks.splice(index, 1);
            this.setState({
                tasks:tasks
            })
            localStorage.setItem('tasks', JSON.stringify(tasks)); 
         }
         this.onCloseFrom();
    };

    onUpdate = (id) =>{
        var {tasks}=this.state;
        var index = this.findIndex(id);
        var taskEditing = tasks[index];
        this.setState({
            taskEditing : taskEditing
        });

        this.showEditing();
    }

   
    render() {
            //B1: lấy dữ liệu của tasks
         var tasks = this.state.tasks; // var tasks = this.state.tasks 
         var isDisplayFrom = this.state.isDisplayFrom;
         var taskEditing = this.state.taskEditing;
         var elmDisplayFrom = isDisplayFrom ? <TaskFrom 
                                                    onCloseFrom={this.onCloseFrom} 
                                                    getDataFrom={this.getDataFrom} 
                                                    taskEditing={taskEditing} 
                                               /> : '';
    return(
        <div className="container-fluid mg-50">
            <h1 id="mid">Quản lí công việc</h1>
            <hr/>
            <div className="row " id="abc">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                   { elmDisplayFrom }
                </div>
                <div className={isDisplayFrom ? 'col-xs-6 col-sm-6 col-md-6 col-lg-6' : 'col-xs-10 col-sm-10 col-md-10 col-lg-10'} >
                
                    <button type="button" className="btn btn-primary">
                        <span 
                            className="fa fa-plus mr-5"
                            onClick={this.onFromAdd}
                        >
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
                    <TaskList tasks = { tasks } onUpdateStatus ={this.onUpdateStatus} onDelete={this.onDelete} onUpdate={this.onUpdate} />
                </div>
                
                
            </div>
           
            
        </div>
    
    
    
    )
  }
}
export default App;
                                
                               