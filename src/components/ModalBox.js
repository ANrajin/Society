import React, { Component } from 'react'

export default class ModalBox extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
              <div className="modal" id={this.props.id}>
        <div className={`modal-dialog modal-${this.props.size}`}>
          <div className="modal-content">
            <div className="modal-header">
        <h4 className="modal-title">{this.props.title}</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
            
          


          </div>
          
        </div>
      
      </div>
              
            </>
        )
    }
}
