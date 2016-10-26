import React from 'react';
import Mustache from 'mustache';
import { Parser } from 'html-to-react';

class Card extends React.Component {
  static propTypes = {
    style: React.PropTypes.object,
    data: React.PropTypes.array.isRequired,
    frontTemplate: React.PropTypes.string,
    backTemplate: React.PropTypes.string
  };

  htmlToReactParser = new Parser();

  constructor(props) {
    super(props);

    this.state = {
      front: true
    };
  }

  cardClicked = () => {
    this.setState({
      front: !this.state.front
    });
  }

  render() {
    const frontTemplate = '<div>' + this.props.frontTemplate + '</div>' || '<p>{{col1}}</p>';
    const backTemplate = '<div>' + this.props.backTemplate + '</div>' || '<p>{{col2}}</p>';
    const cardData = {};
    for (let i = 0; i < this.props.data.length; i++) {
      cardData['col' + (i + 1)] = this.props.data[i];
    }

    const frontHtml = this.htmlToReactParser.parse(Mustache.render(frontTemplate, cardData));
    const backHtml = this.htmlToReactParser.parse(Mustache.render(backTemplate, cardData));

    return(
      <div
        style={this.props.style}
        onClick={this.cardClicked}
      >
        <div
          className="front"
          hidden={!this.state.front}
        >
          {frontHtml}
        </div>
        <div
          className="back"
          hidden={this.state.front}
        >
          {backHtml}
        </div>
      </div>
    );
  }
}

export default Card;
