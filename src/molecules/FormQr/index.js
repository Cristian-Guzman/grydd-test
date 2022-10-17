import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Authenticate, LogAuth } from '../../atoms/Authentication';

export const FormComponent = () => {
  const [user, setUser] = useState('')
  const [ubicacion, setUbicacion] = useState('');
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    const handleAddres = () => {
       navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLongitude(longitude)
          setLatitude(latitude)
          const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDvS3_rBwM7RJYjDOnPzquTpJVlskDs7nI`
          const getUbicacion = async() => {
              const data = await fetch(url);
              const { results } = await data.json();
              setUbicacion(results[6].formatted_address);
          }
          getUbicacion()
      })}
      handleAddres()
  }, [])
  
  const handleSubmit = (e) => {
    Authenticate(user)
    e.preventDefault(e)
  }
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu usuario" onChange={(e) => setUser(e.target.value)} value={user}/>
      </Form.Group>
      <h4>
        Latitude: {latitude && latitude}
      </h4>
      <h4>
        Longitud: {longitude && longitude}
      </h4>
      <h4>
        Location: {ubicacion && `${ubicacion.split(',')[0]}, ${ubicacion.split(',')[1]}`}
      </h4>
      <Button variant="primary" type="submit">
        Aceptar
      </Button>
    </Form>
  );
}
