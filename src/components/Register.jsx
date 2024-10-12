import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap'; // Importa los componentes de React Bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap.

const Register = () => {
  // Estado para almacenar los valores de los inputs (nombre, usuario, email y password).
  const [inputValues, setInputValues] = useState({
    name: '',       // Inicializa el campo de nombre vacío.
    username: '',   // Inicializa el campo de nombre de usuario vacío.
    email: '',      // Inicializa el campo de email vacío.
    password: ''    // Inicializa el campo de contraseña vacío.
  });

  const [error, setError] = useState(''); // Estado para manejar los mensajes de error.
  const [success, setSuccess] = useState(false); // Estado para gestionar si el registro fue exitoso.

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

    // Validación para asegurar que todos los campos estén completos.
    const { name, username, email, password } = inputValues;
    if (!name || !username || !email || !password) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    // Simulación de registro exitoso.
    // Aquí puedes implementar lógica para enviar datos a un backend.
    setSuccess(true); // Registro exitoso.
    setError(''); // Limpia cualquier error anterior.
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}> {/* Contenedor centrado */}
      <h2 className="text-center mb-4">Registro</h2> {/* Título centrado */}

      <Form onSubmit={handleSubmit}> {/* Manejador de envío de formulario */}

        <Form.Group controlId="formName" className="mb-3"> {/* Grupo del campo de nombre */}
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name" // Nombre del input, usado para identificarlo en la actualización.
            placeholder="Ingresa tu nombre"
            value={inputValues.name} // El valor del input viene del estado 'inputValues.name'.
            onChange={handleInputChange} // Llama a la función para actualizar el estado cuando cambie.
          />
        </Form.Group>

        <Form.Group controlId="formUsername" className="mb-3"> {/* Grupo del campo de nombre de usuario */}
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="text"
            name="username" // Nombre del input, usado para identificarlo en la actualización.
            placeholder="Ingresa tu nombre de usuario"
            value={inputValues.username} // El valor del input viene del estado 'inputValues.username'.
            onChange={handleInputChange} // Llama a la función para actualizar el estado cuando cambie.
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3"> {/* Grupo del campo de email */}
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email" // Nombre del input, usado para identificarlo en la actualización.
            placeholder="Ingresa tu email"
            value={inputValues.email} // El valor del input viene del estado 'inputValues.email'.
            onChange={handleInputChange} // Llama a la función para actualizar el estado cuando cambie.
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3"> {/* Grupo del campo de contraseña */}
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password" // Nombre del input, usado para identificarlo en la actualización.
            placeholder="Ingresa tu contraseña"
            value={inputValues.password} // El valor del input viene del estado 'inputValues.password'.
            onChange={handleInputChange} // Llama a la función para actualizar el estado cuando cambie.
          />
        </Form.Group>

        {/* Si hay un error, lo muestra */}
        {error && <Alert variant="danger">{error}</Alert>} {/* Alerta de error */}

        {/* Si el registro es exitoso, muestra un mensaje de éxito */}
        {success && <Alert variant="success">¡Registro exitoso!</Alert>} {/* Alerta de éxito */}

        <Button 
          variant="primary" 
          type="submit" 
          className="w-100" // Botón que ocupa el 100% del ancho del contenedor.
        >
          Registrarse
        </Button>
      </Form>
    </Container>
  );
};

export default Register;


