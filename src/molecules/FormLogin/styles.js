import { Form } from "react-bootstrap";
import styled from "styled-components";

export const ContainerFormSC = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
`

export const FormSC = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`