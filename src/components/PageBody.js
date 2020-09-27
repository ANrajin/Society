import React, { Component } from 'react'
import ContentHeader from '../components/ContentHeader';
import ContentBody from '../components/ContentBody';
export default class PageBody extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                 <div className="content-wrapper"> 
                   <ContentHeader title={this.props.title} breadcrumb={this.props.breadcrumb} />
                    <ContentBody>
                        {this.props.children}
                    </ContentBody>
                </div>
            </>
        )
    }
}
