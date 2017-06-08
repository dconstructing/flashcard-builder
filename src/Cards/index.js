// @flow
import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class Cards extends React.Component {
	static defaultProps = {
		max: 1,
	};

	props: {
		children: any,
		max: number,
	};

	state = {
		index: 0,
	};

	getVisibleChildren = () => {
		if (this.props.max > 0) {
			return React.Children.toArray(this.props.children).slice(this.state.index, this.state.index + 1);
		} else {
			return this.props.children;
		}
	};

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
			newIndex = 0;
		}
		this.setState({
			index: newIndex,
		});
	}

	render() {
		let content = <div>
			<p>No cards found</p>
			<p>Load a spreadsheet in the sidebar to generate cards</p>
		</div>;
		if (React.Children.count(this.props.children) > 0) {
			const visible = this.getVisibleChildren();
			let nav = null;
			if (visible.length < this.props.children.length) {
				nav = <div>
				<FlatButton
					label="previous"
					onClick={this.onPreviousCard}
				/>
				<FlatButton
					label="next"
					onClick={this.onNextCard}
				/></div>
			}
			content = <div>
				{visible}
				{nav}
			</div>;
		}
		return(
			<div>
				{content}
			</div>
		);
	}
}

export default Cards;
