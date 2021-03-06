import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

import { Howl, Howler } from 'howler';

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

  renderSound() {
    Howler.volume(0.5);
    Howler.autoUnlock = false;
    const { project } = this.props;
    const { title, url, date } = project;
    const song = new Howl({
      src: url,
      onplayerror: function() {
        song.once('unlock', function() {
          song.play();
        });
      },
    });

    return(
      <section className="card-project card-sound">
        <div>
          <h3>{ title }</h3>
          <span>{ date }</span>
        </div>
        <div className="sound-menu">
          <button
            type="button"
            onClick={ () => {
              Howler.stop();
              song.play();
            }
          }>
            <PlayArrowIcon />
          </button>
          <button
            type="button"
            onClick={ () => song.pause() }
          >
            <PauseIcon />
          </button>
        </div>
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
      case 'sound':
        return this.renderSound();
      default:
        return(
          <section>Teste</section>
        );
    }
  }
}

export default CardProject;
