import React from 'react';

function Perdidos() { 
    return (
        <div className='contenedot-testimonio'>
            <img 
            className='imagen-testimonio'
            src={require('../imagenes/perro1.jpg')}
            alt='Foto de Perro1'/>
            <div className='contenedor-perro-perdido'>
                <p className='nombre-perro'>Max</p>
                <p className='raza-perro'>Golden Retriever</p>
                <p className='descrpcion-perro'>Se perdió en la colonia Villa de las Flores, lleva collar rojo, y es jugueton</p>
                <p className='fecha-perdida'>22 de Septiembre</p>
            </div>
        </div>
    );
}

export default Perdidos;
