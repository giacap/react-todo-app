import React from 'react'


function Todo({ testo, todos, setTodos, todo }){


    function completaTodo(){
        setTodos(todos.map(function(item){
            if(item.id === todo.id){
                if(item.completato === false){
                    return {...item, completato: true}
                } else {
                    return {...item, completato: false}
                }
            }
            return item;
        }))
    }



    function eliminaTodo(){
        setTodos(todos.filter(function(item){
            return item.id !== todo.id
        }))
    }



    return(

        <div className='todo-container'>
            <div>
                <li className={todo.completato ? 'todo-completato' : ''}>{testo}</li>
            </div>
            
            <div>
                <button className='completaTodo-btn' onClick={completaTodo}>V</button>
                <button className='eliminaTodo-btn' onClick={eliminaTodo}>X</button> 
            </div>
            
        </div>
    )
}




export default Todo