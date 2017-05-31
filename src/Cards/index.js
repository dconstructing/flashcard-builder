import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }
  
  onPreviousCard = () => {
    var newIndex = this.state.index - 1;
    if (newIndex < 0) {
      newIndex = React.Children.count(this.props.children) - 1;
    }
    this.setState({
      index: newIndex,
    });
  }

  onNextCard = () => {
    var newIndex = this.state.index + 1;
    if (newIndex >= React.Children.count(this.props.children)) {
      newIndex = 0
    }
    this.setState({
      index: newIndex,
    });
  }

  render() {
    let content = <p>No cards found</p>
    if (React.Children.count(this.props.children) > 0) {
      const visible = React.Children.toArray(this.props.children).slice(this.state.index, this.state.index + 1);
      content = <div>
        {visible}
        <FlatButton
          label="previous"
          onClick={this.onPreviousCard}
        />
        <FlatButton
          label="next"
          onClick={this.onNextCard}
        />
      </div>
    }
    return(
      <div>
        {content}
      </div>
    );
  }
}

export default Cards;
