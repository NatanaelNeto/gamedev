import React from 'react';

class CardJob extends React.Component {
  render() {
    const { job } = this.props;
    return (
      <div className="card">
        <div className="card-content">
          <h3>{ job.job }</h3>
          <h4>{ job.company }</h4>
          <p className="card-description">{ job.description }</p>
          <ul>{ job.tasks.map((task) => <li>{ task }</li>) }</ul>
        </div>
        <p className="card-period">{ job.period }</p>
      </div>
    );
  }
}

export default CardJob;
