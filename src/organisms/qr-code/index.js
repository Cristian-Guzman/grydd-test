import React from 'react'
import { FormComponent } from '../../molecules/FormQr'
import { ContainerSC, SubtitleSC, TitleSC } from './styles'

export const Athentication = () => {
  return (
    <>
    <ContainerSC>
        <TitleSC>Confirmar sesión</TitleSC>
        <SubtitleSC>Por favor confirma tu información para poder continuar.</SubtitleSC>
        <FormComponent/>
    </ContainerSC>
    </>
  ) 
}
