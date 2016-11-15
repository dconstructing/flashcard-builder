import React from 'react';

import Selector from './Selector';

const headerStyle = {
  borderBottom: '1px solid black',
  display: 'flex',
  justifyContent: 'space-between'
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header style={headerStyle}>
        {this.props.children}
      </header>
    );
  }
}

export default Header;
