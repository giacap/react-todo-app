import React from 'react'

function Form( { setInput, setTodos, todos, input } ){


    function prendiInput(e){
        setInput(e.target.value)
    }

    function aggiungiTodo(e){
        e.preventDefault()
        setTodos([
            ...todos, {testo: input, completato: false, id: Math.random() * 1000}
        ])
        setInput('')
    }

    return(

        <form className='form'>
            <input type="text" className='input' onChange={prendiInput} value={input} />
            <button type='submit' className='submit-btn' onClick={aggiungiTodo}>
                ADD
            </button>
        </form>

    )


}



export default Form