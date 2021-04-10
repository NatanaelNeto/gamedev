import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
          <Link to="/"><li id="menuHome">Home</li></Link>
          <Link to="/projetos"><li id="menuProjetos">Projetos</li></Link>
          <Link to="/contato"><li id="menuContato">Contato</li></Link>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
