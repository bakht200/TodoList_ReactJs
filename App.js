import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Todos from './components/todos';
import AddForm from './components/addForm';
import React, { useState } from 'react';


function App() {
  const onDelete=(todos)=>{
    console.log("This is Clicker" , todos)
    settodosList(todosList.filter((e)=>{ 
      
      return e!==todos}));
  }
    let sno

    const addTode=(title,desc)=>{
    console.log("This is Added" , title,desc);
    if(todosList.length==0){
       sno =0;
     
    }
    else{
     sno = todosList[todosList.length-1].id+1
   
  }
   const myTodo ={
      id: sno,
      title:title,
      desc:desc
    }
    settodosList([...todosList,myTodo]);
  
  }

  const [todosList, settodosList] = useState([
    {
      id:1,
      title:"Title 1",
      desc:"Description 1",
    },
    {
      id:2,
      title:"Title 2",
      desc:"Description 2",
    },
    {
      id:3,
      title:"Title 3",
      desc:"Description 3",
    }
  ])


  return (
   <>
    <Navbar title = "Todos"  searchBar = {true}/>
    <AddForm addTodo = {addTode}/>
    <Todos todos = {todosList}  delete = {onDelete} />

    <Footer/>
</>

 
  );
}

export default App;
