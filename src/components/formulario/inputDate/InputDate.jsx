import React from 'react'
import {Label, InputTitulo} from '../../../elements/elementsForms'

export const InputDate = ({cat, estado, cambioEstado}) => {
    const onChange = (e) => {
        cambioEstado(e.target.value);
    }
    return (
        <div>
            <Label>{cat}</Label>
            <InputTitulo type="date" name="date" id="date" onChange={onChange} />
        </div>
    )
}
