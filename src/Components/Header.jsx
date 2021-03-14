import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li id="menuHome"><Link to="/">Home</Link></li>
            <li id="menuProjetos"><Link to="/projetos">Projetos</Link></li>
            <li id="menuContato"><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
