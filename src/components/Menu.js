import React from 'react';
import './css/Menu.css';

function Menu(){   
    
    const style=({
      color:'green',fontWeight:'bold'
    });

    const items=[
      {
          name: 'Apple',
          color: 'red'
      },
  
      {
          name: 'Orange',
          color: 'green'
      }
  ]

    const list = (
      <ul className="menu">
        
        <li><a href=""><Item name="Apples"  /></a></li>
        <li><a href=""><Item name="Bananas" color="red"  /></a></li>
        <li><a href=""><Item name="Cherries" color="green" active="bold" /></a></li>
        <li><a href=""><Item name="Orange" /></a></li>
        <li><a href=""><Item name="Mango" color="blue" /></a></li>
      </ul>
    );
    return (
      <div>
         {list}        
      </div>      
      );
  }


  function Item(props){
    
     const style={color:props.color,fontWeight:props.active}
     return <><div style={style}>{props.name}</div></>
  }

  const SubItem = (props) => {
     const style={color:props.color,fontWeight:props.active}
     return <><div style={style}>{props.name}</div></>
  };

  export default Menu;