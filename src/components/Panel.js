import React, { Component } from 'react';

class Panel extends Component {
  render() {
    const { label, value, onClick } = this.props;

    return (
      <section onClick={onClick} className="dashboard__panel">
        <h1 className="dashboard__panel-header">{label}</h1>
        <p className="dashboard__panel-value">{value}</p>
      </section>
    );
  }
}

export default Panel;
