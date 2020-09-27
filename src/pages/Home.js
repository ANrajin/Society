import React, { Component } from 'react'

import TopNavbar from '../components/TopNavbar'
import MainSidebar from '../components/MainSidebar'
import Footer from '../components/Footer'


import  Card  from '../components/Card'
import PageBody from '../components/PageBody'

function Layout(props) {
    return (
      <div className="layout">
        <div className="top">{props.top}</div>
        <div className="left">{props.left}</div>
        <div className="center">{props.center}</div>
      </div>
    );
  }
export default class Home extends Component {
 
    constructor(props){
        super(props);

        this.breadcrumb=[{ id:1,name:"Home",route:"home"},
                {id:2,name:"Dashboard",route:"dashboard"}
               ];

               let user=JSON.parse(sessionStorage.user);
               console.log(user.username+" "+user.role_id);


            }

   


    render() {

        

        return (
            <>                         
               <TopNavbar />
               <MainSidebar /> 
              
/>             
                 <PageBody title="Dashboard" breadcrumb={this.breadcrumb}>
                    <div class="row">

                    <div class="col-lg-6">

                    <Card title="Attendance" type="danger">                     
                        <table className="table">
                        <tbody>
                            <tr>
                            <th>ID</th><th>Name</th>
                            </tr>
                            <tr>
                            <td>1</td>
                            <td>Jahid</td>
                            </tr>
                        </tbody>                          
                        </table>                
                    </Card> 

                    <Card title="Payment" type="success">                     
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>                     
                    </Card>                    
                    </div>

                    <div class="col-lg-6">

                    <Card title="Rotine" type="primary">                     
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>                     
                    </Card> 

                    <Card title="Result" type="warning">                     
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>                     
                    </Card> 

                    </div>

                    </div>
                </PageBody>              
               <Footer />                  
            </>
        )
    }
}
