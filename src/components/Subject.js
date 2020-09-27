import React, { Component } from 'react'
import axios from 'axios'


export default class Subject extends Component {

    constructor(props){
        super(props);
        this.state={subjects:[],isLoaded:false,error:null}
    }
    
    componentDidMount(){    

        this.loadJSONSubject();
    }
     
    loadJSONSubject(){      
         fetch("http://vcampus.co/android/menu_by_grade_json.php?grade=2")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result.subject);
            this.setState({isLoaded:true,subjects:result.subject});            
          },       
          (error) => {
            this.setState({isLoaded: true,error});
          }
        )
    }

    async postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'no-cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'omit', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            //'Content-Type': 'application/x-www-form-urlencoded'
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }


    saveHandler=()=>{     
        this.postData("http://localhost/api/api.php",{name:"Rasel"}).then(data => {
            //console.log(data); // JSON data parsed by `data.json()` call
           // alert(data);
        });

        /*
      let  header={
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
       }

         const formData = new FormData(); 
        formData.append('name','Rasel'); 
        //or
      let data={
        name:'Rasel'           
      }
        
      axios.post('http://localhost/api/api.php',data,header);
      */
        
    }
   

    updateHandler(){


    }

    deleteHandler(){


    }

    render() {

     if(this.state.isLoaded){

        return (
            <div>     
                <button onClick={this.saveHandler} className="btn btn-primary">Save</button>
                 {this.state.isLoaded && this.state.subjects[0].name}  
                           
                 <ul>
                {this.state.subjects.map(item => (
                     <li key={item.id}>
                        
                        {item.id} {item.name}
                        <ul>
                           {   
                              item.chapter.map(chap=>{
                                  return <li key={chap.id}>{chap.name}</li>
                              })
                           }
                       </ul>
                    </li>                    
                ))}
                </ul>
            </div>
        )
        
       }else{

            return (
                <div>
                    Subjects not found
                </div>
            )

        }



    }
}
