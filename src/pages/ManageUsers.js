import React, { Component } from 'react'
import {Link,Outlet,useParams } from "react-router-dom";
import Footer from '../components/Footer';
import TopNavbar from '../components/TopNavbar';
import MainSidebar from '../components/MainSidebar';
import PageBody from '../components/PageBody';
import ModalBox from '../components/ModalBox';

import axios from 'axios';
import TextField from '../components/TextField';

export default class ManageUsers extends Component {

    constructor(props){
        super(props);

        this.breadcrumb=[{ id:1,name:"Home",route:"home"},
                {id:2,name:"Manage Users",route:"users"}
               ];

        this.state={users:[]};

        this.apiUrl="http://localhost/api/";

        //this.loadUsers();
    }

    componentDidMount(){

        this.loadUsers();

       // console.log(this.state.params);
    }

    loadUsers(){
      axios.get(this.apiUrl+"get_users_json.php").then((res) => {
        
         //console.log(res.data); 
         this.setState({users:res.data});       
        
      });

    }

    handleDelete=(e,id)=>{

        if(window.confirm("Are you sure?")){
            //console.log(id);
            let json={'id':id};
            //JSON.stringify()
            //JSON.parse()
                axios.post(this.apiUrl+"delete_user.php",json).then((res) => {       
                // console.log(res);

                this.loadUsers();
                });
        }

    }

    handleEdit=(e,item)=>{
       // console.log(item);

        //let id=item.id;      
       console.log(this.state);
        this.setState({id:item.id,username:item.username,email:item.email,mobile:item.mobile});
       
       
    }

    handleEditSubmit=(e)=>{
        e.preventDefault();
         console.log(this.state.id);
        //console.log(this.state.username);
        //console.log(this.state.email);

        let username= this.state.username;
        let email=this.state.email;

         let $errors={}

          if(!(/^[a-zA-Z .]{3,}$/.test(username))){
              $errors={"username":"Invalid Username"};
          }

          if(!(/^[a-zA-Z]+[a-zA-Z0-9]*[.]?[a-zA-Z0-9]+[@][a-zA-Z0-9]*[.][a-z]{2,3}$/.test(email))){
             $errors={...$errors,"email":"Invalid Email"};
          }


        let json={'id':this.state.id,'username':username,'email':email}

        if(Object.keys($errors).length==0){
            axios.post(this.apiUrl+"update_user.php",json).then((res) => {       
                console.log(res);
    
                this.loadUsers();
            });

        }else{
            console.log($errors);
        }
      

    }

    handleView=(e,item)=>{
        //console.log(item);
        this.setState({id:item.id,username:item.username,email:item.email});
    }
   
    handleNewSubmit=(e)=>{
        e.preventDefault();
        //let name=this.state.name;      

    }    
    handleTextChange=(e)=>{
       let name=e.target.name;
       let value=e.target.value;      

       this.setState({[name]:value});
       
    }

    handleClickTest=(e)=>{
        alert();
    }
    render() {
        return (
            <>
             
              <TopNavbar />
              <MainSidebar />
              <PageBody title="Manage User" breadcrumb={this.breadcrumb}>
                

                <ModalBox title="New User" id="modal-new-user" size="lg">
                    New User
                </ModalBox>
                <ModalBox title="Edit User" id="modal-user-edit" size="">
                    <form className="form-horizontal" onSubmit={this.handleEditSubmit}>                                             
                     
                    <TextField type="text" label="Username" value={this.state.username || ''} name="username" onChange={this.handleTextChange} placeholder="Enter Username" />                                      
                    <TextField type="text" label="Email" value={this.state.email || ''} name="email" onChange={this.handleTextChange} placeholder="Enter Email" />                                        
                    <TextField type="text" label="Mobile" value={this.state.mobile || ''} name="mobile" onChange={this.handleTextChange} placeholder="Enter Mobile" />
                    
                     
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <input type="submit" className="btn btn-primary" value="Save Change" />
                    </div>
                    </form>
                
                </ModalBox>  
              
                <ModalBox title="Details" id="modal-user-details">                   
                   {this.state.id}<br/>
                   {this.state.email}<br/>
                   {this.state.username}
                </ModalBox>

                <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modal-new-user">
                  New User
                </button>

                <table className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>                        
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.users.length>0?(

                        this.state.users.map((item)=>(
                         <tr key={item.id}>
                             <td>{item.username}</td>
                             <td>{item.email}</td>
                             <td>             

                               <div className="btn-group">
                                <button type="button" onClick={(e)=>this.handleDelete(e,item.id)} className="btn btn-default btn-sm"><i className="fas fa-trash text-danger" ></i></button>
                                <button type="button" onClick={(e)=>this.handleEdit(e,item)} className="btn btn-default btn-sm"><i className="fas fa-edit text-success" data-toggle="modal" data-target="#modal-user-edit" ></i></button>
                                <button type="button" onClick={(e)=>this.handleView(e,item)} className="btn btn-default btn-sm" data-toggle="modal" data-target="#modal-user-details"><i className="fas fa-folder text-info"></i></button>
                                 
                              </div>
                             </td>
                         </tr>
                        ))

                         ):(

                           <div>
                               No records found
                           </div>
                         )
                    }
                    </tbody>
                </table>
                
               
             </PageBody>
               <Footer /> 
            </>
        )
    }
}
