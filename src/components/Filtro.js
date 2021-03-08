import React from 'react'


function Filtro( { setStatoFiltro } ){

    function cambiaFiltro(e){
        setStatoFiltro(e.target.value)
    }

    return(
        <div className='select-container'>
            <select name="" id="" className='select' onChange={cambiaFiltro}>
                <option value="all">ALL</option>
                <option value="completed">COMPLETED</option>
                <option value="uncompleted">UNCOMPLETED</option>
            </select>
        </div>
    )


}



export default Filtro