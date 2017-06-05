// @flow
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import RaisedButton from 'material-ui/RaisedButton';

import googleClientLoader from '../lib/googleClient';

type DefaultProps = void;
type Props = {
	onDataChange: (Array<Array<string>>) => void
};
type State = {
	anchor?: ?EventTarget,
	authed: boolean,
	files: Array<any>,
	open: boolean,
	selectedFileId?: ?string,
};

class FilePickerGoogleDrive extends React.Component<DefaultProps, Props, State> {
	googleClient: any;
	state = {
		anchor: null,
		authed: false,
		files: [],
		open: false,
		selectedFileId: null,
	};

	constructor(props: Props) {
		super(props);
		this.googleClient = null;
		googleClientLoader.load().then((loadedGoogleClient) => {
			console.log('google client loaded', loadedGoogleClient);
			this.googleClient = loadedGoogleClient;
			this.googleClient.registerSignInListener(this.handleSignInChange);
		});
	};

	displayFile = (fileId: string) => {
		this.setState({
			open: false,
			selectedFileId: fileId,
		});
		this.loadFileData(fileId);
	};

	handleSignInChange = (isSignedIn: boolean) => {
		console.log('handling sign in state change', isSignedIn);
		if (isSignedIn) {
			this.loadSpreadsheets();
			const selectedFile = localStorage.getItem('selectedFile');
			if (selectedFile) {
				const fileJson = JSON.parse(selectedFile);
				if (fileJson.provider === 'google') {
					this.displayFile(fileJson.id);
				}
			}
			this.setState({
				authed: true,
			});
		} else {
			this.setState({
				authed: false,
				files: [],
				open: false,
				selectedFileId: null
			});
			this.props.onDataChange([]);
		}
	};

	handleButtonClick = (event: Event) => {
		console.log('open google drive menu', event);
		event.preventDefault();
		if (!this.state.authed) {
			this.googleClient.signIn();
		}
		this.setState({
			anchor: event.currentTarget,
			open: true,
		});
	};

	handleFileSelected = (event: Event, value: string) => {
		this.displayFile(value);
		localStorage.setItem('selectedFile', JSON.stringify({
			id: value,
			provider: 'google',
		}));
	};

	handleRequestClose = () => {
		this.setState({
			open: false
		});
	};

	handleDisconnectClick = () => {
		this.googleClient.signOut();
		localStorage.clear();
	};

	loadSpreadsheets = () => {
		this.googleClient.listSpreadsheets().then((files) => {
			if (files) {
				this.setState({
					files: files,
				});
			}
		});
	};

	loadFileData = (fileId: string) => {
		this.googleClient.loadFileData(fileId).then((data) => {
			if (data) {
				this.props.onDataChange(data);
			}
		});
	};

	render() {
		return (
			<div>
				<RaisedButton
					label="Google Drive"
					onClick={this.handleButtonClick}
				/>
				{
					this.state.authed
					?
					<FlatButton
						label="disconnect"
						onClick={this.handleDisconnectClick}
					/>
					:
					null
				}
				{
					this.state.files.length > 0
					?
						<Popover
							open={this.state.open}
							style={{maxWidth: 300, maxHeight: 400, overflowY: 'auto'}}
							anchorEl={this.state.anchor}
							anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
							targetOrigin={{horizontal: 'left', vertical: 'top'}}
							onRequestClose={this.handleRequestClose}
						>
							<Menu
								value={this.state.selectedFileId}
								onChange={this.handleFileSelected}
							>
								{
									this.state.files.map((file) => {
										return (
											<MenuItem
												key={file.id}
												value={file.id}
												primaryText={file.name}
											/>
										);
									})
								}
							</Menu>
						</Popover>
					:
					null
				}
			</div>
		);
	}
}

export default FilePickerGoogleDrive;
