// @flow
import React from 'react';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionInfo from 'material-ui/svg-icons/action/info';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IoSocialGithub from 'react-icons/lib/io/social-github';

import Card from '../Card';
import Cards from '../Cards';
import FilePickerGoogleDrive from '../FilePickerGoogleDrive';

const interactiveStyle = {
	backgroundColor: '#999',
//	display: 'flex', // set in index.html so it can be overridden by media query
	flexDirection: 'column',
	height: '100%',
};

const printableStyle = {
//	display: 'flex', // set in index.html so it can be overridden by media query
	flexDirection: 'column',
	height: '100%'
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

type Props = {
	bogus?: boolean,
};

type State = {
	cardFresh: boolean,
	cardHeight: number,
	cardWidth: number,
	data: Array<any>,
	drawerOpen: boolean,
	infoDialogContent: string,
	infoDialogOpen: boolean,
	templateBack: string,
	templateFront: string
};

class Surface extends React.Component<Props, State> {
	static defaultProps = {
		bogus: false
	};

	state = {
		cardFresh: true,
		cardHeight: 0,
		cardWidth: 0,
		data: [],
		drawerOpen: true,
		infoDialogContent: '',
		infoDialogOpen: false,
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

	showInfoDialog = (info: string) => {
		this.setState({
			infoDialogContent: info,
			infoDialogOpen: true,
		});
	}

	closeInfoDialog = () => {
		this.setState({
			infoDialogOpen: false,
		});
	}

	showFileSelectorInfo = () => {
		this.showInfoDialog('Select a spreadsheet. Each row of the spreadsheet will create a single card.');
	}

	showFormatInfo = () => {
		this.showInfoDialog('You can specify which columns appear on the front and back of each card. Use HTML to customize card layout and {{colN}} placeholders to designate which columns should appear, and where.');
	}

	render() {
		const cardStyle = {
			backgroundColor: '#eee',
			boxSizing: 'border-box',
			height: this.state.cardHeight,
			padding: 10,
			width: this.state.cardWidth
		};
		const cardStylePrint = {
			border: '1px solid #000',
			boxSizing: 'border-box',
			height: '3in',
			padding: 10,
			width: '5in'
		};

		return(
			<div
				id="surface"
			>
				<div
					id="interactive"
					style={interactiveStyle}
				>
					<div
						id="header"
						style={headerStyle}
					>
						<span style={{padding: '10px 15px'}}>Flashcard Builder</span>
						<IconButton
							tooltip="menu"
							tooltipPosition="bottom-left"
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
						<IconButton
							href="https://github.com/dconstructing/flashcard-builder"
							tooltip="Find on GitHub"
							tooltipPosition="top-right"
						>
							<IoSocialGithub
								size={24}
								color='#666'
							/>
						</IconButton>
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
								tooltipPosition="bottom-left"
								onTouchTap={this.handleMenu}
							>
								<NavigationClose />
							</IconButton>
						</div>
						<div style={{margin: 10}}>
							<div style={{display: 'flex', justifyContent: 'space-between'}}>
								<span style={{fontSize: '1.5em'}}>Selected File</span>
								<IconButton
									onClick={this.showFileSelectorInfo}
								>
									<ActionInfo />
								</IconButton>
							</div>
							<FilePickerGoogleDrive
								onDataChange={this.handleDataChanged}
							/>
						</div>
						<Divider />
						<div style={{margin: 10}}>
							<div style={{display: 'flex', justifyContent: 'space-between'}}>
								<span style={{fontSize: '1.5em'}}>Card Format</span>
								<IconButton
									onClick={this.showFormatInfo}
								>
									<ActionInfo />
								</IconButton>
							</div>
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
					<Dialog
						open={this.state.infoDialogOpen}
						onRequestClose={this.closeInfoDialog}
					>
						{this.state.infoDialogContent}
					</Dialog>
				</div>
				<div
					id="printable"
					style={printableStyle}
				>
					<div
						id="header"
						style={headerStyle}
					>
						<span style={{padding: '10px 15px'}}>Flashcard Builder</span>
					</div>
					<div
						id="workspace"
						style={workspaceStyle}
					>
						<Cards max={0}>
							{this.state.data.map((card, i) => {
								return <Card
									key={i}
									style={cardStylePrint}
									data={card}
									front={this.state.cardFresh}
									frontTemplate={this.state.templateFront}
									backTemplate={this.state.templateBack}
								/>;
							})}
						</Cards>
					</div>
					<div
						id="footer"
						style={footerStyle}
					>
						<p>Contribute on GitHub (https://github.com/dconstructing/flashcard-builder)</p>
						<p>Donate with PayPal (https://www.paypal.me/davidgawaincox) or Square Cash (https://cash.me/$davidgawaincox)</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Surface;
