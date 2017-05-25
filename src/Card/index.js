import React from 'react';
import Mustache from 'mustache';
import { Parser } from 'html-to-react';

class Card extends React.Component {
  props: {
    style?: Object,
    data: Array<string>,
    front?: boolean,
    frontTemplate?: string,
    backTemplate?: string,
    onCardClicked?: () => void
  };

  htmlToReactParser = new Parser();

  constructor(props) {
    super(props);
  }

  render() {
    const cardData = {};
    for (let i = 0; i < this.props.data.length; i++) {
      cardData['col' + (i + 1)] = this.props.data[i];
    }

    const frontHtml = this.htmlToReactParser.parse(Mustache.render(this.props.frontTemplate, cardData));
    const backHtml = this.htmlToReactParser.parse(Mustache.render(this.props.backTemplate, cardData));

    return(
      <div
        style={this.props.style}
        onClick={this.props.onCardClicked}
      >
        <div
          className="front"
          hidden={!this.props.front}
        >
          {frontHtml}
        </div>
        <div
          className="back"
          hidden={this.props.front}
        >
          {backHtml}
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  front: true,
  backTemplate: '<p>{{col2}}</p>',
  frontTemplate: '<p>{{col1}}</p>'
};

export default Card;
