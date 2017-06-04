// @flow
import React from 'react';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import Card from '../Card';
import Cards from '../Cards';
import FilePickerGoogleDrive from '../FilePickerGoogleDrive';

const surfaceStyle = {
	backgroundColor: '#999',
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
};

const headerStyle = {
	color: '#666',
	display: 'flex',
	fontSize: '2em',
	justifyContent: 'space-between',
	textShadow: '#aaa 1px 1px',
};

const workspaceStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexGrow: 1,
	width: '100%',
};

const footerStyle = {
	color: '#666',
	padding: '0px 15px',
	textShadow: '#aaa 1px 1px',
};

const drawerStyle = {
	backgroundColor: '#eee',
};

const templateEditorStyle = {
	fontFamily: 'monospace',
	height: '100px',
	width: '100%',
};

class Surface extends React.Component {
	state = {
		cardFresh: true,
		cardHeight: 0,
		cardWidth: 0,
		data: [],
		drawerOpen: true,
		templateBack: '<p>{{col2}}</p>',
		templateFront: '<p>{{col1}}</p>',
	};

	componentDidMount = () => {
		window.addEventListener('resize', this.updateDimensions);
		this.updateDimensions();
	}

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.updateDimensions);
	}

	updateDimensions = () => {
		var workspace = document.getElementById('workspace');
		var height;
		var width;
		if (workspace !== null) {
			height = workspace.clientHeight - 100;
			if (height < 60) {
				console.log('too short');
				return;
			}
			width = (height / 3) * 5;
			if (width > (workspace.clientWidth - 100)) {
				width = workspace.clientWidth - 100;
				height = (width / 5) * 3;
			}
			if (width < 100) {
				console.log('too narrow');
				return;
			}
			this.setState({
				cardWidth: width,
				cardHeight: height
			});
		}
	}
			handleMenu = () => {
		this.setState({
			drawerOpen: !this.state.drawerOpen,
		});
	};

	handleDataChanged = (fileData: Array<Array<string>>): void => {
		this.setState({
			data: fileData,
		});
	};
			handleCardClicked = () => {
		this.setState({
			cardFresh: !this.state.cardFresh
		});
	};

	frontTemplateChanged = (event: Event) => {
		if (event.target instanceof HTMLTextAreaElement) {
			this.setState({
				templateFront: event.target.value
			});
		}
	}

	backTemplateChanged = (event: Event) => {
		if (event.target instanceof HTMLTextAreaElement) {
			this.setState({
				templateBack: event.target.value
			});
		}
	}

	render() {
		const cardStyle = {
			backgroundColor: '#eee',
			boxSizing: 'border-box',
			height: this.state.cardHeight,
			padding: 10,
			width: this.state.cardWidth
		};

		return(
			<div
				id="surface"
				style={surfaceStyle}
			>
				<div
					id="header"
					style={headerStyle}
				>
					<span style={{padding: '10px 15px'}}>Flashcard Builder</span>
					<IconButton
						tooltip="menu"
						onTouchTap={this.handleMenu}
					>
						<NavigationMenu color="#666" />
					</IconButton>
				</div>
				<div
					id="workspace"
					style={workspaceStyle}
				>
					<Cards>
						{this.state.data.map((card, i) => {
							return <Card
								key={i}
								style={cardStyle}
								data={card}
								front={this.state.cardFresh}
								frontTemplate={this.state.templateFront}
								backTemplate={this.state.templateBack}
								onCardClicked={this.handleCardClicked}
							/>;
						})}
					</Cards>
				</div>
				<div
					id="footer"
					style={footerStyle}
				>
					Donate with:
					<FlatButton
						href="https://www.paypal.me/davidgawaincox"
						label="PayPal"
						style={{color: '#666'}}
					/>
					-
					<FlatButton
						href="https://cash.me/$davidgawaincox"
						label="Square Cash"
						style={{color: '#666'}}
					/>
				</div>
				<Drawer
					containerStyle={drawerStyle}
					open={this.state.drawerOpen}
					openSecondary={true}
					width={400}
				>
					<div
						id="drawerheader"
						style={{textAlign: 'right'}}
					>
						<IconButton
							tooltip="close"
							onTouchTap={this.handleMenu}
						>
							<NavigationClose />
						</IconButton>
					</div>
					<div style={{margin: 10}}>
						<p style={{fontSize: '1.5em'}}>Selected File</p>
						<FilePickerGoogleDrive
							onDataChange={this.handleDataChanged}
						/>
					</div>
					<Divider />
					<div style={{margin: 10}}>
						<p style={{fontSize: '1.5em'}}>Card Format</p>
						<p>Card Front</p>
						<textarea
							name="frontTemplateField"
							style={templateEditorStyle}
							defaultValue={this.state.templateFront}
							onBlur={this.frontTemplateChanged}
						/>
						<p>Card Back</p>
						<textarea
							name="backTemplateField"
							style={templateEditorStyle}
							defaultValue={this.state.templateBack}
							onBlur={this.backTemplateChanged}
						/>
					</div>
				</Drawer>
			</div>
		);
	}
}

export default Surface;
