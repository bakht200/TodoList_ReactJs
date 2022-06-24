import React from 'react'
import TodoItem from './todoItem';


export default function todos(props) {
  return (
    <div className= "container">

       
        
    <h3 className="my-3">Todos List</h3>
    {props.todos.length==0?'No Todos List':
     <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>

     
    </tr>
  </thead>
    {
  
      props.todos.map((e)=>{
       return <TodoItem todos={e} delete={props.delete} key={e.id} />
      })
  
    }
  </table>
  
           
          
    }
   
    
      
    </div>
  )
}
