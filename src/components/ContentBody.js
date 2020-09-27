import React, { Component } from 'react'


export default class ContentBody extends Component {
    render() {
        return (
            <>
              <div class="content">
                <div class="container-fluid">                  
                   {this.props.children} 
                </div>                
              </div>   
            </>
        )
    }
}
