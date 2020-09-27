import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div className={`card card-${this.props.type} card-outline`}>
                <div className="card-header">
                   <h5 className="m-0">{this.props.title}</h5>
                </div>
                <div className="card-body">
                   {this.props.children}
                </div>
          </div>
        )
    }
}
