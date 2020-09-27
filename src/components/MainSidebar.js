import React, { Component } from 'react'


const User=(props)=>{
  return (
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src={`assets/dist/img/${props.photo}`} className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">{props.name}</a>
      </div>
   </div> 
  )
}

const SidebarDropDownLink=(props)=>{

  return(

    <li className="nav-item has-treeview">
      <a href="#" className="nav-link">
        <i className={`nav-icon ${props.classIcon}`}></i>
        <p>
          {props.name}
          <i className="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul className="nav nav-treeview">   
        {      
          props.items.map((item)=>(
                  
            <SidebarLink key={item.id} route={item.route} name={item.name} classIcon={item.classIcon} active={item.active} />

          ))
        }
      </ul>    
  </li>

  )

}

const SidebarLink=(props)=>{

  return(

    <li className="nav-item">
      <a href={props.route} className={`nav-link ${props.active}`}>
        <i className={`nav-icon ${props.classIcon}`}></i>
        <p>
          {props.name}          
        </p>
      </a>     
  </li>

  )

}

export default class MainSidebar extends Component {
   
    constructor(props){
      super(props);
      
      this.home_menu_items=[
        {id:"1",name:"Home",route:"home",classIcon:"far fa-circle nav-icon",active:"active"},
        {id:"2",name:"Contact",route:"/contact",classIcon:"far fa-circle nav-icon",active:""},
        {id:"3",name:"Help",route:"/help",classIcon:"far fa-circle nav-icon",active:""}
      ]

      this.inventory_menu_items=[
        {id:"4",name:"Create Item",route:"items/create-item",classIcon:"far fa-circle nav-icon",active:""},
        {id:"5",name:"Manage Item",route:"items/manage-item",classIcon:"far fa-circle nav-icon",active:""},
       
      ]


      this.sales_menu_items=[
        {id:"4",name:"Create",route:"home",classIcon:"far fa-circle nav-icon",active:""},
        {id:"5",name:"Manage",route:"/contact",classIcon:"far fa-circle nav-icon",active:""},
        {id:"6",name:"Report",route:"/report",classIcon:"far fa-circle nav-icon",active:""}
      ]

      this.system_menu_items=[
         {id:"7",name:"Manage User",route:"/users",classIcon:"far fa-circle nav-icon",active:""},
         
      ]


    }
    render() {
        return (
            <>

  <aside className="main-sidebar sidebar-dark-primary elevation-4">    
    
    <a href="/home" className="brand-link">
      <img src="assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
           style={{opacity:".9"}} />
      <span className="brand-text font-weight-light">SCHOOL</span>
    </a>  

    <div className="sidebar">      
      
     <User name="Md. Jahidul Islam" photo="user2-160x160.jpg" />
      
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <SidebarLink route="/home" name="Home" classIcon="fas fa-th" />

          <SidebarDropDownLink name="Inventory" classIcon="fas fa-tachometer-alt" items={this.inventory_menu_items}  />         
            
          <SidebarDropDownLink name="Sale" classIcon="fas fa-tachometer-alt" items={this.sales_menu_items}  />         
          
          <SidebarDropDownLink name="System" classIcon="fas fa-tachometer-alt" items={this.system_menu_items}  />         
          

          <SidebarLink route="/logout" name="Logout" classIcon="fas fa-th" />

        </ul>
      </nav>   
    </div> 
  </aside>

    </>
        )
    }
}
