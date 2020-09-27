import React, { Component } from 'react'
import ContentHeader from './ContentHeader'
import ContentBody from './ContentBody'

export default class ContentWrapper extends Component {
    constructor(props){
         super(props);
    }
    render() {
        return (
            <div>
                 <div class="content-wrapper">                    
                    <ContentHeader title={this.props.title} breadcrumb={this.props.breadcrumb} />
                    <ContentBody>
                          <div className="row">
                               <div className="col">
                                   afjasfjasl
                               </div>
                          </div>
                   </ContentBody>
                 </div>
            </div>
        )
    }
}
