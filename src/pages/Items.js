import React from 'react'

import TopNavbar from '../components/TopNavbar'
import MainSidebar from '../components/MainSidebar'
import Footer from '../components/Footer'
import PageBody from '../components/PageBody'

export default function Items() {
   let breadcrumb=[{id:1,name:"Home",route:"home"},
    {id:2,name:"Items",route:"items"}
   ];

    return (
        <div>
             <TopNavbar />
               <MainSidebar />              
                <PageBody title="Items" breadcrumb={breadcrumb}>
                   
                </PageBody>
               <Footer />   
            
        </div>
    )
}
