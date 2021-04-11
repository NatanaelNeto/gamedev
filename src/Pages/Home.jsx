import React from 'react';

import logo from '../img/logo.png';
import fotoDev from '../img/fotoDev.jpg';
import { jobs } from '../data';
import CardJob from '../Components/CardJob';
import Footer from '../Components/Footer';

class Home extends React.Component {
  render () {
    return (
      <div className="container">
        <section className="section-home-opening">
          <img src={ logo } alt="logo"/>
          <div className="align-column section-content">
            <h1>NATANAEL<span>NETO</span></h1>
            <p>Front-end Developer and Game Designer</p>
          </div>
        </section>
        <section className="section-home-info">
          <img src={ fotoDev } alt="foto-do-dev"/>
          <div className="align-column">
            <h2><strong>Natanael</strong> Enéas da Silva <strong>Neto</strong></h2>
            <div className="section-content">
              <p>Sou de Recife-PE. Tenho 24 anos. Há 5 anos trabalho com desenvolvimento front-end. Sigo a Cristo desde 2009. Minhas áreas de interesse são <span className="sh">Front-End</span>, <span className="sh">Game Design</span> e <span className="sh">Sound Maker</span>.</p>
            </div>
          </div>
        </section>
        <section className="section-home-skills">
          <h2><strong>Skills</strong></h2>
          <ul>
            <li>Web Design</li>
            <li>JavaScript</li>
            <li>Jest</li>
            <li>Cypress</li>
            <li>React</li>
            <li>Vue.js</li>
            <li>Unity</li>
            <li>C#</li>
            <li>Game Design</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Premiere</li>
            <li>Educação Infantil</li>
          </ul>
        </section>
        <section className="section-home-jobs">
          <div className="align-column">
            <h2>Experiências <strong>Profissionais</strong></h2>
            <div className="align-row">{ jobs.map((job) => (
              <CardJob key={ job.id } job={ job }/>
            )) }</div>
          </div>
        </section>
        <section className="section-home-skills">
          <h2>Pontos de <strong>Interesse</strong></h2>
          <ul>
            <li>Jogos Digitais</li>
            <li>Desenvolvimento Web</li>
            <li>Web Design</li>
            <li>Educação</li>
            <li>Criatividade e Inovação</li>
            <li>Board Games</li>
          </ul>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
