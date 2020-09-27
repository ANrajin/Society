import React from 'react'

export default function Form(props) {
    return (
        <>
         <div className={`card card-${props.type}`} style={{width:props.width}}>
              <div className="card-header">
                <h3 className="card-title">{props.title}</h3>
              </div>

              
               <div className="card-body">
                    <form onSubmit={props.onSubmit} className="form-horizontal">
                        
                        {props.children}

                    </form>
                </div>

          </div> 
        </>
    )
}
