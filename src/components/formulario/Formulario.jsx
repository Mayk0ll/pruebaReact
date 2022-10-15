import React, { useState } from 'react'
import {Form, ContenedorA, ContenedorB, ContenedorC} from '../../elements/elementsForms'
import { InputDate } from './inputDate/InputDate'
import { InputFile } from './inputFile/InputFile'
import { InputSelect } from './InputSelect/InputSelect'
import { InputText } from './inputText/InputText'
import { TextArea } from './textArea/TextArea'
import {uploadFile} from '../../firebase/config.js'
import axios from 'axios';

export const Formulario = () => {

    const [url, setUrl] = useState('')
    const [document, setDocument] = useState('')
    const [titulo, setTitulo] = useState('')
    const [area, setArea] = useState('')
    const [sede, setSede] = useState('')
    const [N1, setN1] = useState('')
    const [N2, setN2] = useState('')
    const [N3, setN3] = useState('')
    const [anio, setAnio] = useState('')
    const [fechaVencimiento, setFechaVencimiento] = useState('');
    const [observaciones, setObservaciones] = useState('')
    const [error, setError] = useState(false)
    


    const areas = ['Sistemas','Gerencia','Contabilidad']
    const sedes = ['Bello','Medellin','Envigado','Sabaneta']
    const n1 = ['Nivel 1', 'Nivel 2', 'Nivel 3']
    
    let n2 = []
    if(N1 === 'Nivel 1') n2 = ['Informe','Reporte'] 
    else if(N1 === 'Nivel 2') n2 = ['Dato','Premisa'] 
    else if(N1 === 'Nivel 3') n2 = ['Justificacion','Encuesta']

    let n3 = []
    if(N2 === 'Informe') n3=['Declaracion', 'Justificacion']
    else if(N2 === 'Reporte') n3=['Registro', 'Escalabilidad']
    else if(N2 === 'Dato') n3=['Exponencial', 'Extra']
    else if(N2 === 'Premisa') n3=['Infografía', 'Biografía']
    else if(N2 === 'Justificación') n3=['Bibliografía', 'Gestion']
    else if(N2 === 'Encuesta') n3=['Estadística', 'Recopilación']

    const onSubmit = async (e) => {
        e.preventDefault()
        
        if(titulo === '' || area=== '' || sede === '' || N1 === '' || N2 === '' || N3 === '' || anio === '' || fechaVencimiento === ''){
            setError(true)
        } else {
            setError(false)
            await getUrl(`${titulo}`);
            const obj = {
                titulo,
                area,
                sede,
                N1,
                N2,
                N3,
                anio,
                fechaVencimiento, 
                observaciones,
                enlace: url
            }
            setTimeout(() => {
                axios.post('http://localhost:1234/docs/create', obj).then(res => console.log(res))
            }, 3000);

        }
    }

    const getUrl = async (name) => {
        setUrl(await uploadFile(document, name))
    }

    return (
        <Form action="" onSubmit={onSubmit}>
            <InputFile info={setDocument}/>
            <ContenedorA>
                <InputText cat='Titulo' estado={titulo} cambioEstado={setTitulo} />
                <InputSelect info={areas} cat='Area' estado={area} cambioEstado={setArea}/>
                <InputSelect info={sedes} cat='Sede' estado={sede} cambioEstado={setSede}/>
            </ContenedorA>
            <ContenedorB>
                <InputSelect info={n1} cat='N1' estado={N1} cambioEstado={setN1} cambioEstado2={setN2} cambioEstado3={setN3}/>
                <InputSelect info={n2} cat='N2' estado={N2} cambioEstado={setN2} cambioEstado2={setN3}/>
                <InputSelect info={n3} cat='N3'  estado={N3} cambioEstado={setN3}/>
            </ContenedorB>
            <ContenedorC>
                <InputDate cat='Año...' estado={anio} cambioEstado={setAnio}/>
                <InputDate cat='Fecha Vencimiento' estado={fechaVencimiento} cambioEstado={setFechaVencimiento}/>
                <TextArea cat='Observaciones' estado={observaciones} cambioEstado={setObservaciones}/>
            </ContenedorC>
            <div>
                <button type='onSubmit'>Enviar</button>
                {error&&<h2 style={{color: 'red'}}>Complete toda la informacion</h2>}
            </div>
            
        </Form>
    )
}


