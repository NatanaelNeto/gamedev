import React from 'react';
import CardProject from '../Components/CardProject';
import { projects } from '../data';

class Projetos extends React.Component {
  render () {
    return (
      <div>
        <section className="section-opening project-opening">
          <h1>PROJETOS</h1>
        </section>
        <h2 className="project-title">JavaScript</h2>
        <p className="project-p">Ao longo dos anos, dediquei-me a aprender a fundo sobre JavaScript. Hoje, como desenvolvedor front-end, é a linguagem que mais tenho prática</p>
        <section className="project-container">
          { projects.filter((p) => p.type === 'js' && !p.disabled).map((p) => (
            <CardProject project={ p } />
          ))}
        </section>
        <h2 className="project-title">Game Design</h2>
        <p className="project-p">Apaixonado por jogos desde os 7 anos, comecei a estudar e a desenvolver alguns protótipos, tanto físicos quanto digitais</p>
        <section className="project-container">
          { projects.filter((p) => p.type === 'game' && !p.disabled).map((p) => (
            <CardProject project={ p } />
          ))}
        </section>
        <h2 className="project-title">Sound Maker</h2>
        <p className="project-p">Sou apaixonado pelo estilo retrowave. Por ter bom conhecimento musical graças ao piano, comecei a criar algumas trilhas</p>
        <section className="project-container">
          { projects.filter((p) => p.type === 'sound' && !p.disabled).map((p) => (
            <CardProject project={ p } />
          ))}
        </section>
      </div>
    );
  }
}

export default Projetos;
