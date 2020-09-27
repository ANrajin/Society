import React from 'react'

export default function FileField() {
    return (
        <div>
              <div className="form-group row">
                    <label htmlFor={this.props.name} className="col-sm-3 col-form-label">{this.props.label}
                    </label>
                    <div className="col-sm-9">
                      <input className="form-control"  {...this.props} />
                    </div>
                 </div>  
        </div>
    )
}
