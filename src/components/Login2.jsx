import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado.
import { Form, Button, Alert, Container } from 'react-bootstrap'; // Importa los componentes de React Bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap.



const Login2 = () => {
  // Estado para almacenar los valores de los inputs (email y password).
  const [inputValues, setInputValues] = useState({
    email: '',  // Inicializa el campo de email vacío.
    password: '' // Inicializa el campo de contraseña vacío.
  });
  
  const [error, setError] = useState(''); // Estado para manejar los mensajes de error.
  const [success, setSuccess] = useState(false); // Estado para gestionar si el login fue exitoso.

  // Función específica para manejar los cambios en los inputs.
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Obtiene el nombre del input y su valor.
    
    // Actualiza el estado correspondiente del input basado en el nombre (name) del campo.
    setInputValues({
      ...inputValues, // Mantiene los valores actuales de otros inputs.
      [name]: value   // Actualiza solo el campo que cambió.
    });
  };

  // Función que se ejecuta cuando se envía el formulario.
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene que el formulario recargue la página.

    // Validación simple.
    if (!inputValues.email || !inputValues.password) {
      setError('Por favor, complete ambos campos.');
      return;
    }

    // Simulación de autenticación sin servidor.
    const mockEmail = 'usuario@correo.com'; // Email de prueba.
    const mockPassword = 'password123'; // Contraseña de prueba.

    // Verifica si las credenciales son correctas.
    if (inputValues.email === mockEmail && inputValues.password === mockPassword) {
      setSuccess(true); // Si las credenciales son correctas, establece el éxito.
      setError(''); // Limpia los errores si los había.
    } else {
      setError('Email o contraseña incorrectos.'); // Si las credenciales no coinciden, muestra un mensaje de error.
      setSuccess(false); // Establece el éxito en falso.
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}> {/* Contenedor centrado */}
      <h2 className="text-center mb-4">Iniciar sesión</h2> {/* Título centrado */}

      <Form onSubmit={handleSubmit}> {/* Manejador de envío de formulario */}

        <Form.Group controlId="formEmail" className="mb-3"> {/* Grupo del campo de email */}
          <Form.Label>Correo electrónico</Form.Label> {/* Etiqueta */}
          <Form.Control
            type="email"
            name="email" // Nombre del input, usado para identificarlo en la actualización.
            placeholder="Ingresa tu correo"
            value={inputValues.email} // El valor del input viene del estado 'inputValues.email'.
            onChange={handleInputChange} // Llama a la función para actualizar el estado cuando cambie.
            isInvalid={error && !inputValues.email} // Aplica estilo de error si es necesario.
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3"> {/* Grupo del campo de contraseña */}
          <Form.Label>Contraseña</Form.Label> {/* Etiqueta */}
          <Form.Control
            type="password"
            name="password" // Nombre del input, usado para identificarlo en la actualización.
            placeholder="Ingresa tu contraseña"
            value={inputValues.password} // El valor del input viene del estado 'inputValues.password'.
            onChange={handleInputChange} // Llama a la función para actualizar el estado cuando cambie.
            isInvalid={error && !inputValues.password} // Aplica estilo de error si es necesario.
          />
        </Form.Group>

        {/* Si hay un error, lo muestra */}
        {error && <Alert variant="danger">{error}</Alert>} {/* Alerta de error */}

        {/* Si el login es exitoso, muestra un mensaje de éxito */}
        {success && <Alert variant="success">¡Inicio de sesión exitoso!</Alert>} {/* Alerta de éxito */}

        <Button 
          variant="primary" 
          type="submit" 
          disabled={!inputValues.email || !inputValues.password} // Deshabilita el botón si faltan campos.
          className="w-100" // Botón que ocupa el 100% del ancho del contenedor.
        >
          Iniciar sesión
        </Button>
      </Form>
    </Container>
  );
};

export default Login2;
