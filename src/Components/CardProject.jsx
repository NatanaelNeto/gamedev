import React from 'react';

class CardProject extends React.Component {
  renderJs() {
    const { project } = this.props;
    const { title, url, description, date } = project;
    return(
      <section className="card-project card-js">
        <div>
          <h3>{ title }</h3>
          <span>{ date }</span>
        </div>
        <p>{ description }</p>
        <a target="_blank" rel="noopener noreferrer" href={ url }>Acesse aqui</a>
      </section>
    );
  }

  renderGame() {
    const { project } = this.props;
    const { title, url, phase, description, date } = project;
    return(
      <section className="card-project card-game">
        <div className="game-content">
          <div>
            <h3>{ title }</h3>
            <span>{ date }</span>
          </div>
          <p>{ description }</p>
          <span className="span">{ phase }</span>
        </div>
        <img className="game-img" src={ url } alt={ title }/>
      </section>
    );
  }

  render() {
    const { project } = this.props;
    const { type } = project;
    switch(type) {
      case 'js':
        return this.renderJs();
      case 'game':
        return this.renderGame();
      default:
        return(
          <section>Teste</section>
        );
    }
  }
}

export default CardProject;
