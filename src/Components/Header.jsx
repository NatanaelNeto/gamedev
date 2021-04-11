import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.changeBackground);
  }

  changeBackground() {
    const header = document.getElementById('header');
    const viewport = window.innerHeight;

    header.style.background = window.pageYOffset > viewport
      ? 'linear-gradient(0deg, rgba(20,20,20,0.9) 0%, rgba(20,20,20,1) 100%)'
      : 'linear-gradient(0deg, rgba(20,20,20,0) 0%, rgba(20,20,20,1) 100%)'
  }

  render() {
    return (
      <header id="header">
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
