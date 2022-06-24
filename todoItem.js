import React from 'react'

export default function todoItem(props) {
  return (
   
     
  <tbody>
    <tr>
      <th scope="row">{props.todos.id}</th>
      <td>{props.todos.title}</td>
      <td>{props.todos.desc}</td>
      <td> <button type="button" className="btn btn-danger" onClick={()=>{ props.delete(props.todos)}} >Delete</button> <button type="button" className="btn btn-primary"  >Update</button></td>
      
    </tr>
   
  </tbody>

  )
}
