import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const { children } = this.props;

    return (
      <div className="navbar-fixed-bottom text-left" style={{ padding: '10px', color: '#fff' }}>
        {children}
      </div>
    );
  }
}
