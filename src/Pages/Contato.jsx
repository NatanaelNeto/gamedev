import React from 'react';
import resume from '../data/resume.pdf';

class Contato extends React.Component {
  render () {
    return (
      <section className="section-opening contato-section">
        <h1>CONTATO</h1>
        <div className="contato-content">
          <h3>Currículo</h3>
          <a href={ resume } target="_blank" rel="noopener noreferrer">Acesse aqui</a>
        </div>
      </section>
    );
  }
}

export default Contato;
