// @flow
import React from 'react';
import Mustache from 'mustache';
import { Parser } from 'html-to-react';
import Paper from 'material-ui/Paper';

const htmlToReactParser = new Parser();

class Card extends React.Component {
	props: {
		style?: Object,
		data: Array<string>,
		front?: boolean,
		frontTemplate?: string,
		backTemplate?: string,
		onCardClicked?: () => void
	};

	static defaultProps = {
		front: true,
		backTemplate: '<p>{{col2}}</p>',
		frontTemplate: '<p>{{col1}}</p>'
	};

	render() {
		const cardData = {};
		for (let i = 0; i < this.props.data.length; i++) {
			cardData['col' + (i + 1)] = this.props.data[i];
		}

		const frontHtml = htmlToReactParser.parse(Mustache.render(this.props.frontTemplate, cardData));
		const backHtml = htmlToReactParser.parse(Mustache.render(this.props.backTemplate, cardData));

		return(
			<Paper
				style={this.props.style}
				zDepth={2}
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
			</Paper>
		);
	}
}

export default Card;
