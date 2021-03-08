import React from 'react'
import Todo from './Todo'


function ListaTodo({ todos, setTodos, todosFiltrati}){


    return(

        <div>
            <ul>
                

                {todosFiltrati.map(function(todo){
                   return  <Todo testo={todo.testo} key={todo.id} todos={todos} setTodos={setTodos} todo={todo}/>
                })}


            </ul>
        </div>

    )
}



export default ListaTodo