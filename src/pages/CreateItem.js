import axios from 'axios';
import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Form from '../components/Form';
import TextField from '../components/TextField';

export default function CreateItem() {

    const [item,setItem]=useState({});    
    const{name,sku,src}=item;

    const[file,setFile]=useState({img:null});
    const{img}=file;
   
    var apiUrl="http://localhost/api/";
 
   
   
    function handleSubmit(e){
        e.preventDefault();

        const formData = new FormData();
       
        formData.append('image',src);
        formData.append('name',name);
        formData.append('sku',sku);

        console.log(sku+" "+name);        
       
      
      const config = {
        headers: {
            'content-type': 'multipart/form-data'
            //'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      
        axios.post(apiUrl+'create_item.php',formData,config)     
         
          .then((response)=>{          
              console.log(response);            
          }).catch(function (error) {
             console.log(error);
          });        

     
       // URL.revokeObjectURL(src);
    }

   function handleInputChange(e){    
    console.log(e.target.value);
     setItem({...item,[e.target.name]:e.target.value});   

     console.log(item);
     //formData.append(e.target.name,e.target.value); 

   }

  function handleFileChance(e){
   
      //for upload
    setFile({img:e.target.files[0]}); 

    //for preview  
    let imgObj=URL.createObjectURL(e.target.files[0]);
    setItem({src:imgObj}); 
  
   // console.log(file);   
      
  }

    return (

        <>
      
        <Form title="Create Item" type="info" onSubmit={(e)=>handleSubmit(e)} width="600px">
            <TextField label="Name" type="text" name="name" onChange={(e)=>handleInputChange(e)} placeholder="Enter Name" />
            <TextField label="SKU" type="text" name="sku" onChange={(e)=>handleInputChange(e)} placeholder="Enter SKU" />
            
            <TextField label="Photo" name="file" type="file" onChange={(e)=>handleFileChance(e)} />
           
            <TextField label="" type="submit" className="btn btn-info" value="Submit" name="submit"  />
            <img src={src} width="50%" />
            
        </Form>
            
        </>
    )
}
