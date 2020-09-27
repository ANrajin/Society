import React from 'react';
import './css/Header.css';

class Header extends React.Component{

   constructor(props){
     super(props);
   }

   render(){
       return(
           <>            
             <div className="header-wrap" style={{backgroundColor:this.props.bgcolor,color:this.props.textcolor}}>
                <div className="clearfix">
                    <img style={{float:"left",marginRight:"10px"}} src={this.props.logo} height="50" />
                    <strong style={{float:"left",lineHeight:"45px"}}>{this.props.title}</strong>
                </div>
             
             </div>            

           </>
       );

   }//end render


}//end class

export default Header;

