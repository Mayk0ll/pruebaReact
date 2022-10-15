import React from 'react'
import {Campo} from '../../../elements/elementsForms'

export const ItemDocument = ({titulo,area,sede,n1,n2,n3,anio,fechaVencimiento, observaciones, enlace}) => {
  return (
    <Campo>
        <p>{titulo}</p>
        <p>{area}</p>
        <p>{sede}</p>
        <p>{n1}</p>
        <p>{n2}</p>
        <p>{n3}</p>
        <p>{anio}</p>
        <p>{fechaVencimiento}++</p>
        <p>{observaciones}</p>
        <a href={enlace} target="_blank">descargar</a>
    </Campo>
  )
}
