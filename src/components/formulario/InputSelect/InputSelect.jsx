import React from 'react'
import {Label, Select} from '../../../elements/elementsForms'

export const InputSelect = ({info, cat, cambioEstado, cambioEstado2, cambioEstado3}) => {
    const onChange = (e) => {
        cambioEstado(e.target.value)

        if(cambioEstado2){
            cambioEstado2('')
        }
        if(cambioEstado3){
            cambioEstado3('')
        }
    }
    return (
        <div>
            <Label>{cat}</Label>
            <Select name={cat} id={cat} required onChange={onChange}>
                <option value="" >Selecciona un valor</option>
                {info && info.map(elemet => <option key={elemet} value={elemet}>{elemet}</option>)}
            </Select>
        </div>
    )
}
