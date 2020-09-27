import React, { Component } from 'react'
import TopNavbar from '../components/TopNavbar'
import MainSidebar from '../components/MainSidebar'
import Footer from '../components/Footer'
import PageBody from '../components/PageBody'


export default class Help extends Component {

    breadcrumb=[{id:1,name:"Home",route:"home"},
    {id:2,name:"Help",route:"help"}
   ];

    render() {
        return (
            <>
               <TopNavbar />
               <MainSidebar />              
                <PageBody title="Help" breadcrumb={this.breadcrumb}>
                   <p>sfdasfas</p>
                </PageBody>
               <Footer />           
            </>
        )
    }
}
