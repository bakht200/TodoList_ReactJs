
import React, { useState } from 'react';


export default function AddForm(props) {
    const [title , setTitle]=useState("");
    const [desc , setDesc]=useState("");

    const Submit = (e)=>{
            e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank")
        }
        else{
            props.addTodo(title,desc);
        }
    }
    
  return (
    <div className="container my-3">
        <h2>Add Todo</h2>
        <form onSubmit={Submit}>
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}}  id="title" aria-describedby="emailHelp"/>
  
  </div>
  <div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <input type="text" class="form-control"  value={desc} onChange={(e)=>{setDesc(e.target.value)}}  id="description"/>
  </div>
 
  <button type="submit" class="btn btn-success">Submit</button>
</form>
      
    </div>
  )
}
