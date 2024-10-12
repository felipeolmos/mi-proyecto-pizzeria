// NavbarPizza.jsx
import React from 'react';
import Container from 'react-bootstrap/Container'; // Importa el contenedor de Bootstrap
import Navbar from 'react-bootstrap/Navbar'; // Importa el componente Navbar de Bootstrap
import Button from 'react-bootstrap/Button'; // Importa el componente Button de Bootstrap
//import './App.css'; // Asegúrate de importar los estilos globales para aplicar el CSS

const NavbarPizza = ({ nombre, home, login, register }) => {
  return (
    // Componente Navbar con clase personalizada para aplicar estilos
    <Navbar expand="lg" className="bg-body-tertiary navbar-custom">
      <Container fluid className="navbar-container"> {/* Contenedor fluido para el contenido del navbar */}
        <Navbar.Brand href="#" className="navbar-brand">{nombre}</Navbar.Brand> {/* Muestra el nombre de la marca */}
        <div className="navbar-buttons"> {/* Contenedor para los botones del navbar */}
          <Button variant="">{home}</Button> {/* Botón Home */}
          <Button variant="">{login}</Button> {/* Botón Login */}
          <Button variant="">{register}</Button> {/* Botón Register */}
          <Button variant="">Menu</Button> {/* Botón Menu */}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarPizza; // Exporta el componente para ser utilizado en otras partes de la aplicación
