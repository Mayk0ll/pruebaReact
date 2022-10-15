import React from 'react'
import {Label} from '../../../elements/elementsForms'

export const TextArea = ({cat, estado, cambioEstado}) => {
    const onChange = (e) =>{
        cambioEstado(e.target.value)
    }

  return (
    <div>
        <Label>{cat}</Label>
        <textarea rows="10" cols="30" style={{display: 'block'}} placeholder={'Observaciones'} value={estado} onChange={onChange} ></textarea>
    </div>
  )
}
