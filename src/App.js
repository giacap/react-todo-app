import React, { useState, useEffect } from 'react'
import './App.css';
import Titolo from './components/Titolo'
import Form from './components/Form'
import Filtro from './components/Filtro'
import ListaTodo from './components/ListaTodo'



function App() {

  
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const [statoFiltro, setStatoFiltro] = useState('all')
  const [todosFiltrati, setTodosFiltrati] = useState([])

  
  useEffect(function(){
    filtraTodos()
  }, [todos, statoFiltro])



  function filtraTodos(){
    if(statoFiltro === 'completed'){
      setTodosFiltrati(todos.filter(function(item){
        return item.completato === true; 
      }))
    } else if (statoFiltro === 'uncompleted'){
      setTodosFiltrati(todos.filter(function(item){
        return item.completato === false;
      }))
    } else {
      setTodosFiltrati(todos)
    }
  }




  return (

    <div className="app">
      
      <Titolo />

      <Form setInput={setInput} setTodos={setTodos} todos={todos} input={input} />
      
      <Filtro setStatoFiltro={setStatoFiltro} />

      <ListaTodo todos={todos} setTodos={setTodos} todosFiltrati={todosFiltrati} />

    </div>

  );
}




export default App;
