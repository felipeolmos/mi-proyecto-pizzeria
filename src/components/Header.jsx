import React from "react";

const Header = ({titulo, descripcion}) => {
 return (
  <header className="header-banner">
      <div className="header-content">
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
      </div>
    </header>
 );
};

export default Header;