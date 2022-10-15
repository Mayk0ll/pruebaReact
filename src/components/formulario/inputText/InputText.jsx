import React from 'react'
import {Label, InputTitulo} from '../../../elements/elementsForms'

export const InputText = ({cat, estado, cambioEstado}) => {
    const onChange = (e) => {
        cambioEstado(e.target.value)
    }
    return (
        <div>
            <Label>{cat}</Label>
            <InputTitulo type="text" placeholder='Titulo' value={estado} onChange={onChange} />
        </div>
    )
}
