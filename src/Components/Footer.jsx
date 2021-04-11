import React from 'react';
import { versiculos } from '../data';

class Footer extends React.Component {
  constructor () {
    super();
    this.state = {
      versiculo: {},
      getVers: false,
      color: '',
    };
    this.setVersivulo = this.setVersivulo.bind(this);
  }

  setVersivulo(versiculo, i) {
    const colors = ['#ff7722', '#7722ff', '#ff7722', '#7722ff'];
    this.setState({
      versiculo,
      getVers: true,
      color: colors[i],
    });
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  componentDidMount() {
    const random = this.getRandomInt(0,versiculos.length);
    this.setVersivulo(versiculos[random], random);
  }

  render() {
    const { versiculo, getVers, color } = this.state;
    return getVers && (
      <footer>
        <p>{ versiculo.versiculo }</p>
        <span style={{ color }}>~{ versiculo.ref }~</span>
        <p className="madeBy">Feito por Natanael Neto. 2021</p>
      </footer>
    );
  }
}

export default Footer;
