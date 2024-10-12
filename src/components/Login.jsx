import React, { useState } from 'react'; // Importa React y el hook useState para gestionar el estado de los inputs.
import './Login.css'; // Importa los estilos CSS específicos para el componente de login.

const Login = () => {
  // Estados para almacenar los valores ingresados en los inputs y gestionar los errores.
  const [inputEmail, setInputEmail] = useState(''); // Estado para almacenar el valor del campo de email.
  const [inputPassword, setInputPassword] = useState(''); // Estado para almacenar el valor del campo de contraseña.
  const [error, setError] = useState(''); // Estado para almacenar y mostrar mensajes de error.
  const [success, setSuccess] = useState(false); // Estado para gestionar el estado de éxito del login.

  // Función que se ejecuta cuando el formulario es enviado.
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene que el formulario recargue la página cuando es enviado.

    // Validación para asegurar que ambos campos (email y contraseña) estén llenos.
    if (!inputEmail || !inputPassword) {
      setError('Por favor, complete ambos campos.'); // Si falta un campo, se muestra un mensaje de error.
      return; // Termina la ejecución de la función si hay un error.
    }

    // Simulación de una autenticación sin servidor.
    const mockEmail = 'usuario@correo.com'; // Email simulado para validación.
    const mockPassword = 'password123'; // Contraseña simulada para validación.

    // Verifica si las credenciales ingresadas coinciden con las simuladas.
    if (inputEmail === mockEmail && inputPassword === mockPassword) {
      setSuccess(true); // Si las credenciales son correctas, se establece el éxito.
      setError(''); // Limpia cualquier error anterior.
    } else {
      setError('Email o contraseña incorrectos.'); // Si las credenciales no coinciden, muestra un mensaje de error.
      setSuccess(false); // Asegura que el estado de éxito sea falso.
    }
  };

  // Función que se ejecuta cuando se hace clic en el botón (puedes añadir lógica adicional aquí).
  const handleClick = () => {
    console.log('Botón de iniciar sesión ha sido clicado'); // Muestra un mensaje en la consola al hacer clic en el botón.
    // Aquí puedes añadir cualquier otra acción que desees realizar cuando el botón sea clicado.
  };

  return (
    <div className="login-container"> {/* Contenedor principal del formulario de login */}
      <form onSubmit={handleSubmit} className="login-form"> {/* Formulario con el evento onSubmit para manejar el envío */}
        <h2>Iniciar sesión</h2> {/* Título del formulario */}

        <input
          type="email" // Input de tipo email.
          placeholder="Correo electrónico" // Texto de marcador de posición para el campo de email.
          value={inputEmail} // El valor del input es el estado 'inputEmail'.
          onChange={(e) => setInputEmail(e.target.value)} // Actualiza el estado 'inputEmail' cuando el usuario escribe.
          className={error && !inputEmail ? 'error' : ''} // Aplica una clase de error si el campo está vacío y hay un mensaje de error.
        />

        <input
          type="password" // Input de tipo contraseña.
          placeholder="Contraseña" // Texto de marcador de posición para el campo de contraseña.
          value={inputPassword} // El valor del input es el estado 'inputPassword'.
          onChange={(e) => setInputPassword(e.target.value)} // Actualiza el estado 'inputPassword' cuando el usuario escribe.
          className={error && !inputPassword ? 'error' : ''} // Aplica una clase de error si el campo está vacío y hay un mensaje de error.
        />

        {/* Si hay un mensaje de error, se muestra aquí en un párrafo */}
        {error && <p className="login-error">{error}</p>} 

        {/* Si el login es exitoso, se muestra un mensaje de éxito */}
        {success && <p className="login-success">¡Inicio de sesión exitoso!</p>}

        <button 
          type="submit" 
          onClick={handleClick} // Se añade el evento onClick que ejecuta la función handleClick.
          disabled={!inputEmail || !inputPassword} // El botón se deshabilita si faltan los campos email o password.
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
