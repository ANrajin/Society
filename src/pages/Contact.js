import React, { Component } from 'react'
import TopNavbar from '../components/TopNavbar'
import MainSidebar from '../components/MainSidebar'
import Footer from '../components/Footer'
import ContentHeader from '../components/ContentHeader';
import ContentBody from '../components/ContentBody';
import PageBody from '../components/PageBody';

export default class Contact extends Component {
    breadcrumb=[{id:1,name:"Home",route:"home"},
                {id:2,name:"Contact",route:"contact"}
               ];
            
    render() {
        return (
            <div>
                <TopNavbar/>               
                <MainSidebar />                
                   <PageBody title="Contact" breadcrumb={this.breadcrumb}>                    
                        sdjlfdjsa fsal flsa
                  </PageBody>               
                <Footer />
            </div>
        )
    }
}
