import React, { Component } from 'react'

export default class Message extends Component {
   
   constructor(props){
      super(props);
      this.state={name:'Jahid',message:'Hello'}

   }
   
   messageHandler=()=>{
      this.setState({name:'Mamun',message:'Hi'});
   }

   nameChangeHandler=(event)=>{
    //console.log(event.target.name);
    this.setState({name:event.target.value,message:'How are you?'});
   }

    render() {
        return (
            <>
              <h2> {this.state.message}, {this.state.name}</h2>
              <input name='txtName' type="text" onChange={this.nameChangeHandler} />
              <textarea name='txtAddress' onChange={this.nameChangeHandler} />
              <button onClick={this.messageHandler}>Change Message</button>
            </>
        )
    }
}


