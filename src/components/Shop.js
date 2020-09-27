import React from 'react';
import './css/Shop.css';
class Shop extends React.Component{

   constructor(props){
     super(props);
   }

   render(){
       return(
           <>
            <ul className="products-row clearfix">
                {
                    this.props.data.map((item)=>{
                      return <li className="item" key={item.id}>
                          <div className="photo">
                             <img src={item.photo}  />
                          </div>                         
                          <div className="desc">
                            <div><strong>{item.name}</strong></div>
                            <div>
                              Price: ${item.price}
                            </div> 
                          </div>  
                        </li>
                    })
                }               
            </ul>
           </>
       );

   }//end render


}//end class

export default Shop;

