import React, { Component } from 'react';
import './App.css';
// import ColorPicker from './components/ColorPicker';
// import Result from './components/result';
// import Reset from './components/reset';
// import Size from './components/size';

class App extends Component {
    
  
  render() {
    return(
        <div className="container-fluid mg-50">
            <h1 id="mid">Quản lí công việc</h1>
            <hr/>
            <div className="row " id="abc">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <h3 className="panel-title">Add job</h3>
                        </div>
                        <div className="panel-body">
                           <form action="" method="POST" role="form">
                               
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
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <button type="button" className="btn btn-primary">
                        <span className="fa fa-plus mr-5">
                            Add Job
                        </span>
                    </button>
                    <div className="row mt-15">
                       <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Nhập từ khóa..." />
                                <span className="input-group-btn">
                                            <button className="btn btn-primary" type="button">
                                            <span className="fa fa-search mr-5"></span>Tìm
                                </button>
                                </span>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li>
                                        <a role="button">
                                                    <span className="fa fa-sort-alpha-asc pr-5">
                                                        Tên A-Z
                                                    </span>
                                                </a>
                                    </li>
                                    <li>
                                        <a role="button">
                                                    <span className="fa fa-sort-alpha-desc pr-5">
                                                        Tên Z-A
                                                    </span>
                                                </a>
                                    </li>
                                    <li role="separator" className="divider"></li>
                                    <li><a role="button">Trạng Thái Kích Hoạt</a></li>
                                    <li><a role="button">Trạng Thái Ẩn</a></li>
                                </ul>
                            </div>
                        </div>

                     </div>
                     <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">STT</th>
                                    <th className="text-center">Tên</th>
                                    <th className="text-center">Trạng Thái</th>
                                    <th className="text-center">Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" className="form-control" />
                                    </td>
                                    <td>
                                        <select className="form-control">
                                            <option value="-1">Tất Cả</option>
                                            <option value="0">Ẩn</option>
                                            <option value="1">Kích Hoạt</option>
                                        </select>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Học lập trình</td>
                                    <td className="text-center">
                                        <span className="label label-success">
                                                    Kích Hoạt
                                                </span>
                                    </td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-warning">
                                            <span className="fa fa-pencil mr-5"></span>Sửa
                                        </button>
                                        &nbsp;

                                        <button type="button" className="btn btn-danger">
                                            <span className="fa fa-trash mr-5"></span>Xóa
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
                
                
            </div>
           
            
        </div>
    
    
    
    )
  }
}
export default App;
                                
                               