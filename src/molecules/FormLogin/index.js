import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ContainerFormSC, ContainerQRCodeSC, FormSC } from "./styles";

export const FormLogin = () => {
  const [values, setValues] = useState({
    usuario: "",
    password: "",
  });

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  return (
    <ContainerFormSC>
      <FormSC>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            name="usuario"
            type="text"
            placeholder="Ingresa tu usuario"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Aceptar
        </Button>
      </FormSC>
      <ContainerQRCodeSC>
        
      </ContainerQRCodeSC>
    </ContainerFormSC>
  );
};
