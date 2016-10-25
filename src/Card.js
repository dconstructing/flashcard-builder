import React from 'react';
import Mustache from 'mustache';
import { Parser } from 'html-to-react';

class Card extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    frontTemplate: React.PropTypes.string,
    backTemplate: React.PropTypes.string
  };

  htmlToReactParser = new Parser();

  constructor(props) {
    super(props);
  }

  render() {
    const frontTemplate = this.props.frontTemplate || '<p>{{col1}}</p>';
    const backTemplate = this.props.backTemplate || '<p>{{col2}}</p>';
    const cardData = {};
    for (let i = 0; i < this.props.data.length; i++) {
      cardData['col' + (i + 1)] = this.props.data[i];
    }

    const frontHtml = this.htmlToReactParser.parse(Mustache.render(frontTemplate, cardData));
    const backHtml = this.htmlToReactParser.parse(Mustache.render(backTemplate, cardData));

    return(
      <div>
        <div className="front">
          {frontHtml}
        </div>
        <div className="back">
          {backHtml}
        </div>
      </div>
    );
  }
}

export default Card;
