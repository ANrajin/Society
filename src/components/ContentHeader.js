import React, { Component } from 'react'

export default class ContentHeader extends Component {
    constructor(props){
      super(props);
    }
    render() {
        return (
            <div>
                <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                    <div className="col-sm-6">
        <h1 className="m-0 text-dark">{this.props.title}</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            {
                                this.props.breadcrumb.map((item)=>(
                                  
                                    <li className="breadcrumb-item" key={item.id}>
                                        <a href={item.route}>{item.name}</a>
                                    </li>

                                ))
                            }
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
