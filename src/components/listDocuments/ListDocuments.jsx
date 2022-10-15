import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ItemDocument } from './itemDocument/ItemDocument'

export const ListDocuments = () => {
    
    const [allDocuments, setAllDocuments] = useState([])

    function cargar () {
        axios('http://localhost:1234/docs/documento')
        .then(res => setAllDocuments(res.data))
    }

    useEffect(()=> {
        cargar()
    },[]) 
    return (
        <div>
            <button onClick={cargar}>cargar</button>
            {console.log(allDocuments)}
            {allDocuments&&allDocuments.map(elem => <ItemDocument key={elem.id} titulo={elem.titulo} area={elem.area} sede={elem.sede} n1={elem.n1} n2={elem.n2} n3={elem.n3} anio={elem.anio} fechaVencimiento={elem.fechavencimiento}observaciones={elem.observaciones} enlace={elem.enlace} />)}
        </div>
    )
}
