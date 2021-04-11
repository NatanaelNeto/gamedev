import React from 'react';
import resume from '../data/resume.pdf';

class Contato extends React.Component {
  render () {
    const insta = 'https://www.instagram.com/nesn.gamedev/';
    const github = 'https://github.com/natanaelneto';
    const whats = ' https://wa.me/5581998433904/?text=Ol%C3%A1%21%20Vi%20seu%20curr%C3%ADculo%20e%20quero%20entrar%20em%20contato%20com%20voc%C3%AA%21';
    return (
      <section className="section-opening contato-section">
        <h1>CONTATO</h1>
        <div className="contato-content">
          <div className="contato-row">
            <h3>Currículo</h3>
            <a href={ resume } target="_blank" rel="noopener noreferrer">download aqui</a>
          </div>
          <div className="contato-row">
            <h3>Instagram</h3>
            <a href={ insta } target="_blank" rel="noopener noreferrer">@nesn.gamedev</a>
          </div>
          <div className="contato-row">
            <h3>Github</h3>
            <a href={ github } target="_blank" rel="noopener noreferrer">NatanaelNeto</a>
          </div>
          <div className="contato-row">
            <h3>WhatsApp</h3>
            <a href={ whats } target="_blank" rel="noopener noreferrer">(81) 998-433-904</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Contato;
