webpackJsonp([0],{

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactTapEventPlugin = __webpack_require__(298);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _App = __webpack_require__(304);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)();

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = __webpack_require__(305);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(166);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _Surface = __webpack_require__(386);

var _Surface2 = _interopRequireDefault(_Surface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var muiTheme = (0, _getMuiTheme2.default)({
	fontFamily: 'Open Sans'
});

var App2 = function (_React$Component) {
	_inherits(App2, _React$Component);

	function App2() {
		_classCallCheck(this, App2);

		return _possibleConstructorReturn(this, (App2.__proto__ || Object.getPrototypeOf(App2)).apply(this, arguments));
	}

	_createClass(App2, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_MuiThemeProvider2.default,
				{ muiTheme: muiTheme },
				_react2.default.createElement(_Surface2.default, null)
			);
		}
	}]);

	return App2;
}(_react2.default.Component);

exports.default = App2;

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Dialog = __webpack_require__(387);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Divider = __webpack_require__(398);

var _Divider2 = _interopRequireDefault(_Divider);

var _Drawer = __webpack_require__(400);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _FlatButton = __webpack_require__(115);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _IconButton = __webpack_require__(181);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _info = __webpack_require__(414);

var _info2 = _interopRequireDefault(_info);

var _close = __webpack_require__(423);

var _close2 = _interopRequireDefault(_close);

var _menu = __webpack_require__(424);

var _menu2 = _interopRequireDefault(_menu);

var _socialGithub = __webpack_require__(425);

var _socialGithub2 = _interopRequireDefault(_socialGithub);

var _Card = __webpack_require__(431);

var _Card2 = _interopRequireDefault(_Card);

var _Cards = __webpack_require__(483);

var _Cards2 = _interopRequireDefault(_Cards);

var _FilePickerGoogleDrive = __webpack_require__(484);

var _FilePickerGoogleDrive2 = _interopRequireDefault(_FilePickerGoogleDrive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var interactiveStyle = {
	backgroundColor: '#999',
	//	display: 'flex', // set in index.html so it can be overridden by media query
	flexDirection: 'column',
	height: '100%'
};

var printableStyle = {
	//	display: 'flex', // set in index.html so it can be overridden by media query
	flexDirection: 'column',
	height: '100%'
};

var headerStyle = {
	color: '#666',
	display: 'flex',
	fontSize: '2em',
	justifyContent: 'space-between',
	textShadow: '#aaa 1px 1px'
};

var workspaceStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexGrow: 1,
	width: '100%'
};

var footerStyle = {
	color: '#666',
	padding: '0px 15px',
	textShadow: '#aaa 1px 1px'
};

var drawerStyle = {
	backgroundColor: '#eee'
};

var templateEditorStyle = {
	fontFamily: 'monospace',
	height: '100px',
	width: '100%'
};

var Surface = function (_React$Component) {
	_inherits(Surface, _React$Component);

	function Surface() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Surface);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Surface.__proto__ || Object.getPrototypeOf(Surface)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			cardFresh: true,
			cardHeight: 0,
			cardWidth: 0,
			data: [],
			drawerOpen: true,
			infoDialogContent: '',
			infoDialogOpen: false,
			templateBack: '<p>{{col2}}</p>',
			templateFront: '<p>{{col1}}</p>'
		}, _this.componentDidMount = function () {
			window.addEventListener('resize', _this.updateDimensions);
			_this.updateDimensions();
		}, _this.componentWillUnmount = function () {
			window.removeEventListener('resize', _this.updateDimensions);
		}, _this.updateDimensions = function () {
			var workspace = document.getElementById('workspace');
			var height;
			var width;
			if (workspace !== null) {
				height = workspace.clientHeight - 100;
				if (height < 60) {
					console.log('too short');
					return;
				}
				width = height / 3 * 5;
				if (width > workspace.clientWidth - 100) {
					width = workspace.clientWidth - 100;
					height = width / 5 * 3;
				}
				if (width < 100) {
					console.log('too narrow');
					return;
				}
				_this.setState({
					cardWidth: width,
					cardHeight: height
				});
			}
		}, _this.handleMenu = function () {
			_this.setState({
				drawerOpen: !_this.state.drawerOpen
			});
		}, _this.handleDataChanged = function (fileData) {
			_this.setState({
				data: fileData
			});
		}, _this.handleCardClicked = function () {
			_this.setState({
				cardFresh: !_this.state.cardFresh
			});
		}, _this.frontTemplateChanged = function (event) {
			if (event.target instanceof HTMLTextAreaElement) {
				_this.setState({
					templateFront: event.target.value
				});
			}
		}, _this.backTemplateChanged = function (event) {
			if (event.target instanceof HTMLTextAreaElement) {
				_this.setState({
					templateBack: event.target.value
				});
			}
		}, _this.showInfoDialog = function (info) {
			_this.setState({
				infoDialogContent: info,
				infoDialogOpen: true
			});
		}, _this.closeInfoDialog = function () {
			_this.setState({
				infoDialogOpen: false
			});
		}, _this.showFileSelectorInfo = function () {
			_this.showInfoDialog('Select a spreadsheet. Each row of the spreadsheet will create a single card.');
		}, _this.showFormatInfo = function () {
			_this.showInfoDialog('You can specify which columns appear on the front and back of each card. Use HTML to customize card layout and {{colN}} placeholders to designate which columns should appear, and where.');
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Surface, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var cardStyle = {
				backgroundColor: '#eee',
				boxSizing: 'border-box',
				height: this.state.cardHeight,
				padding: 10,
				width: this.state.cardWidth
			};
			var cardStylePrint = {
				border: '1px solid #000',
				boxSizing: 'border-box',
				height: '3in',
				padding: 10,
				width: '5in'
			};

			return _react2.default.createElement(
				'div',
				{
					id: 'surface'
				},
				_react2.default.createElement(
					'div',
					{
						id: 'interactive',
						style: interactiveStyle
					},
					_react2.default.createElement(
						'div',
						{
							id: 'header',
							style: headerStyle
						},
						_react2.default.createElement(
							'span',
							{ style: { padding: '10px 15px' } },
							'Flashcard Builder'
						),
						_react2.default.createElement(
							_IconButton2.default,
							{
								tooltip: 'menu',
								tooltipPosition: 'bottom-left',
								onTouchTap: this.handleMenu
							},
							_react2.default.createElement(_menu2.default, { color: '#666' })
						)
					),
					_react2.default.createElement(
						'div',
						{
							id: 'workspace',
							style: workspaceStyle
						},
						_react2.default.createElement(
							_Cards2.default,
							null,
							this.state.data.map(function (card, i) {
								return _react2.default.createElement(_Card2.default, {
									key: i,
									style: cardStyle,
									data: card,
									front: _this2.state.cardFresh,
									frontTemplate: _this2.state.templateFront,
									backTemplate: _this2.state.templateBack,
									onCardClicked: _this2.handleCardClicked
								});
							})
						)
					),
					_react2.default.createElement(
						'div',
						{
							id: 'footer',
							style: footerStyle
						},
						_react2.default.createElement(
							_IconButton2.default,
							{
								href: 'https://github.com/dconstructing/flashcard-builder',
								tooltip: 'Find on GitHub',
								tooltipPosition: 'top-right'
							},
							_react2.default.createElement(_socialGithub2.default, {
								size: 24,
								color: '#666'
							})
						),
						'Donate with:',
						_react2.default.createElement(_FlatButton2.default, {
							href: 'https://www.paypal.me/davidgawaincox',
							label: 'PayPal',
							style: { color: '#666' }
						}),
						'-',
						_react2.default.createElement(_FlatButton2.default, {
							href: 'https://cash.me/$davidgawaincox',
							label: 'Square Cash',
							style: { color: '#666' }
						})
					),
					_react2.default.createElement(
						_Drawer2.default,
						{
							containerStyle: drawerStyle,
							open: this.state.drawerOpen,
							openSecondary: true,
							width: 400
						},
						_react2.default.createElement(
							'div',
							{
								id: 'drawerheader',
								style: { textAlign: 'right' }
							},
							_react2.default.createElement(
								_IconButton2.default,
								{
									tooltip: 'close',
									tooltipPosition: 'bottom-left',
									onTouchTap: this.handleMenu
								},
								_react2.default.createElement(_close2.default, null)
							)
						),
						_react2.default.createElement(
							'div',
							{ style: { margin: 10 } },
							_react2.default.createElement(
								'div',
								{ style: { display: 'flex', justifyContent: 'space-between' } },
								_react2.default.createElement(
									'span',
									{ style: { fontSize: '1.5em' } },
									'Selected File'
								),
								_react2.default.createElement(
									_IconButton2.default,
									{
										onClick: this.showFileSelectorInfo
									},
									_react2.default.createElement(_info2.default, null)
								)
							),
							_react2.default.createElement(_FilePickerGoogleDrive2.default, {
								onDataChange: this.handleDataChanged
							})
						),
						_react2.default.createElement(_Divider2.default, null),
						_react2.default.createElement(
							'div',
							{ style: { margin: 10 } },
							_react2.default.createElement(
								'div',
								{ style: { display: 'flex', justifyContent: 'space-between' } },
								_react2.default.createElement(
									'span',
									{ style: { fontSize: '1.5em' } },
									'Card Format'
								),
								_react2.default.createElement(
									_IconButton2.default,
									{
										onClick: this.showFormatInfo
									},
									_react2.default.createElement(_info2.default, null)
								)
							),
							_react2.default.createElement(
								'p',
								null,
								'Card Front'
							),
							_react2.default.createElement('textarea', {
								name: 'frontTemplateField',
								style: templateEditorStyle,
								defaultValue: this.state.templateFront,
								onBlur: this.frontTemplateChanged
							}),
							_react2.default.createElement(
								'p',
								null,
								'Card Back'
							),
							_react2.default.createElement('textarea', {
								name: 'backTemplateField',
								style: templateEditorStyle,
								defaultValue: this.state.templateBack,
								onBlur: this.backTemplateChanged
							})
						)
					),
					_react2.default.createElement(
						_Dialog2.default,
						{
							open: this.state.infoDialogOpen,
							onRequestClose: this.closeInfoDialog
						},
						this.state.infoDialogContent
					)
				),
				_react2.default.createElement(
					'div',
					{
						id: 'printable',
						style: printableStyle
					},
					_react2.default.createElement(
						'div',
						{
							id: 'header',
							style: headerStyle
						},
						_react2.default.createElement(
							'span',
							{ style: { padding: '10px 15px' } },
							'Flashcard Builder'
						)
					),
					_react2.default.createElement(
						'div',
						{
							id: 'workspace',
							style: workspaceStyle
						},
						_react2.default.createElement(
							_Cards2.default,
							{ max: 0 },
							this.state.data.map(function (card, i) {
								return _react2.default.createElement(_Card2.default, {
									key: i,
									style: cardStylePrint,
									data: card,
									front: _this2.state.cardFresh,
									frontTemplate: _this2.state.templateFront,
									backTemplate: _this2.state.templateBack
								});
							})
						)
					),
					_react2.default.createElement(
						'div',
						{
							id: 'footer',
							style: footerStyle
						},
						_react2.default.createElement(
							'p',
							null,
							'Contribute on GitHub (https://github.com/dconstructing/flashcard-builder)'
						),
						_react2.default.createElement(
							'p',
							null,
							'Donate with PayPal (https://www.paypal.me/davidgawaincox) or Square Cash (https://cash.me/$davidgawaincox)'
						)
					)
				)
			);
		}
	}]);

	return Surface;
}(_react2.default.Component);

exports.default = Surface;

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _mustache = __webpack_require__(432);

var _mustache2 = _interopRequireDefault(_mustache);

var _htmlToReact = __webpack_require__(433);

var _Paper = __webpack_require__(38);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var htmlToReactParser = new _htmlToReact.Parser();

var Card = function (_React$Component) {
	_inherits(Card, _React$Component);

	function Card() {
		_classCallCheck(this, Card);

		return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
	}

	_createClass(Card, [{
		key: 'render',
		value: function render() {
			var cardData = {};
			for (var i = 0; i < this.props.data.length; i++) {
				cardData['col' + (i + 1)] = this.props.data[i];
			}

			var frontHtml = htmlToReactParser.parse(_mustache2.default.render(this.props.frontTemplate, cardData));
			var backHtml = htmlToReactParser.parse(_mustache2.default.render(this.props.backTemplate, cardData));

			return _react2.default.createElement(
				_Paper2.default,
				{
					style: this.props.style,
					zDepth: 2,
					onClick: this.props.onCardClicked
				},
				_react2.default.createElement(
					'div',
					{
						className: 'front',
						hidden: !this.props.front
					},
					frontHtml
				),
				_react2.default.createElement(
					'div',
					{
						className: 'back',
						hidden: this.props.front
					},
					backHtml
				)
			);
		}
	}]);

	return Card;
}(_react2.default.Component);

Card.defaultProps = {
	front: true,
	backTemplate: '<p>{{col2}}</p>',
	frontTemplate: '<p>{{col1}}</p>'
};
exports.default = Card;

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _FlatButton = __webpack_require__(115);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cards = function (_React$Component) {
	_inherits(Cards, _React$Component);

	function Cards() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Cards);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cards.__proto__ || Object.getPrototypeOf(Cards)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			index: 0
		}, _this.getVisibleChildren = function () {
			if (_this.props.max > 0) {
				return _react2.default.Children.toArray(_this.props.children).slice(_this.state.index, _this.state.index + 1);
			} else {
				return _this.props.children;
			}
		}, _this.onPreviousCard = function () {
			var newIndex = _this.state.index - 1;
			if (newIndex < 0) {
				newIndex = _react2.default.Children.count(_this.props.children) - 1;
			}
			_this.setState({
				index: newIndex
			});
		}, _this.onNextCard = function () {
			var newIndex = _this.state.index + 1;
			if (newIndex >= _react2.default.Children.count(_this.props.children)) {
				newIndex = 0;
			}
			_this.setState({
				index: newIndex
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Cards, [{
		key: 'render',
		value: function render() {
			var content = _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'p',
					null,
					'No cards found'
				),
				_react2.default.createElement(
					'p',
					null,
					'Load a spreadsheet in the sidebar to generate cards'
				)
			);
			if (_react2.default.Children.count(this.props.children) > 0) {
				var visible = this.getVisibleChildren();
				var nav = null;
				if (visible.length < this.props.children.length) {
					nav = _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_FlatButton2.default, {
							label: 'previous',
							onClick: this.onPreviousCard
						}),
						_react2.default.createElement(_FlatButton2.default, {
							label: 'next',
							onClick: this.onNextCard
						})
					);
				}
				content = _react2.default.createElement(
					'div',
					null,
					visible,
					nav
				);
			}
			return _react2.default.createElement(
				'div',
				null,
				content
			);
		}
	}]);

	return Cards;
}(_react2.default.Component);

Cards.defaultProps = {
	max: 1
};
exports.default = Cards;

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _FlatButton = __webpack_require__(115);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Menu = __webpack_require__(485);

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(196);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Popover = __webpack_require__(498);

var _Popover2 = _interopRequireDefault(_Popover);

var _RaisedButton = __webpack_require__(500);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _googleClient = __webpack_require__(502);

var _googleClient2 = _interopRequireDefault(_googleClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilePickerGoogleDrive = function (_React$Component) {
	_inherits(FilePickerGoogleDrive, _React$Component);

	function FilePickerGoogleDrive(props) {
		_classCallCheck(this, FilePickerGoogleDrive);

		var _this = _possibleConstructorReturn(this, (FilePickerGoogleDrive.__proto__ || Object.getPrototypeOf(FilePickerGoogleDrive)).call(this, props));

		_this.state = {
			anchor: null,
			authed: false,
			files: [],
			open: false,
			selectedFileId: null
		};

		_this.displayFile = function (fileId) {
			_this.setState({
				open: false,
				selectedFileId: fileId
			});
			_this.loadFileData(fileId);
		};

		_this.handleSignInChange = function (isSignedIn) {
			console.log('handling sign in state change', isSignedIn);
			if (isSignedIn) {
				_this.loadSpreadsheets();
				var selectedFile = localStorage.getItem('selectedFile');
				if (selectedFile) {
					var fileJson = JSON.parse(selectedFile);
					if (fileJson.provider === 'google') {
						_this.displayFile(fileJson.id);
					}
				}
				_this.setState({
					authed: true
				});
			} else {
				_this.setState({
					authed: false,
					files: [],
					open: false,
					selectedFileId: null
				});
				_this.props.onDataChange([]);
			}
		};

		_this.handleButtonClick = function (event) {
			console.log('open google drive menu', event);
			event.preventDefault();
			if (!_this.state.authed) {
				_this.googleClient.signIn();
			}
			_this.setState({
				anchor: event.currentTarget,
				open: true
			});
		};

		_this.handleFileSelected = function (event, value) {
			_this.displayFile(value);
			localStorage.setItem('selectedFile', JSON.stringify({
				id: value,
				provider: 'google'
			}));
		};

		_this.handleRequestClose = function () {
			_this.setState({
				open: false
			});
		};

		_this.handleDisconnectClick = function () {
			_this.googleClient.signOut();
			localStorage.clear();
		};

		_this.loadSpreadsheets = function () {
			_this.googleClient.listSpreadsheets().then(function (files) {
				if (files) {
					_this.setState({
						files: files
					});
				}
			});
		};

		_this.loadFileData = function (fileId) {
			_this.googleClient.loadFileData(fileId).then(function (data) {
				if (data) {
					_this.props.onDataChange(data);
				}
			});
		};

		_this.googleClient = null;
		_googleClient2.default.load().then(function (loadedGoogleClient) {
			console.log('google client loaded', loadedGoogleClient);
			_this.googleClient = loadedGoogleClient;
			_this.googleClient.registerSignInListener(_this.handleSignInChange);
		});
		return _this;
	}

	_createClass(FilePickerGoogleDrive, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_RaisedButton2.default, {
					label: 'Google Drive',
					onClick: this.handleButtonClick
				}),
				this.state.authed ? _react2.default.createElement(_FlatButton2.default, {
					label: 'disconnect',
					onClick: this.handleDisconnectClick
				}) : null,
				this.state.files.length > 0 ? _react2.default.createElement(
					_Popover2.default,
					{
						open: this.state.open,
						style: { maxWidth: 300, maxHeight: 400, overflowY: 'auto' },
						anchorEl: this.state.anchor,
						anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
						targetOrigin: { horizontal: 'left', vertical: 'top' },
						onRequestClose: this.handleRequestClose
					},
					_react2.default.createElement(
						_Menu2.default,
						{
							value: this.state.selectedFileId,
							onChange: this.handleFileSelected
						},
						this.state.files.map(function (file) {
							return _react2.default.createElement(_MenuItem2.default, {
								key: file.id,
								value: file.id,
								primaryText: file.name
							});
						})
					)
				) : null
			);
		}
	}]);

	return FilePickerGoogleDrive;
}(_react2.default.Component);

exports.default = FilePickerGoogleDrive;

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});


var CLIENT_ID = '594524984428-ri54vus01s2c57iqp2i8cmr5l67n9g2s.apps.googleusercontent.com';

var SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly', 'https://www.googleapis.com/auth/drive.metadata.readonly'];

var checkAuth = function checkAuth() {
	console.log('checking Google Auth');
	return gapi.client.init({
		clientId: CLIENT_ID,
		scope: SCOPES.join(' ')
	}).then(function () {
		gapi.auth2.init({
			clientId: CLIENT_ID,
			scope: SCOPES.join(' ')
		}).then(function (auth) {
			return auth.isSignedIn.get();
		}, function (error) {
			console.log('error', error);
			return false;
		});
	});
};

var loadFiles = function loadFiles() {
	console.log('loading files');
	return gapi.client.drive.files.list({
		q: 'mimeType="application/vnd.google-apps.spreadsheet"'
		// fields: "nextPageToken, files(id, name)"
	});
};

var registerSignInListener = function registerSignInListener(listener) {
	var auth = gapi.auth2.getAuthInstance();
	auth.isSignedIn.listen(listener);
	listener(auth.isSignedIn.get());
};

var signIn = function signIn() {
	gapi.auth2.getAuthInstance().signIn();
};

var signOut = function signOut() {
	gapi.auth2.getAuthInstance().signOut();
};

var listSpreadsheets = function listSpreadsheets() {
	return loadFiles().then(function (request) {
		console.log('loaded files', request.result);
		return request.result.files;
	}, function (error) {
		console.log('error loading spreadsheet list', error);
		return [];
	});
};

var loadFileData = function loadFileData(fileId) {
	return gapi.client.sheets.spreadsheets.get({
		spreadsheetId: fileId
	}).then(function (request) {
		console.log('sheet loaded', request.result.sheets);
		var spreadsheet = request.result;
		if (spreadsheet.sheets.length < 1) {
			throw new Error('Spreadsheet does not have sheets');
		}
		var sheetName = spreadsheet.sheets[0].properties.title;
		return gapi.client.sheets.spreadsheets.values.get({
			spreadsheetId: fileId,
			range: sheetName
		});
	}).then(function (request) {
		console.log('data loaded', request.result);
		return request.result.values;
	}, function (reason) {
		console.error(reason.result.error.message);
	});
};

var loadDriveApi = function loadDriveApi() {
	return gapi.client.load('drive', 'v3');
};

var loadSheetsApi = function loadSheetsApi() {
	var discoveryUrl = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
	return gapi.client.load(discoveryUrl);
};

var load = function load() {
	return new Promise(function (resolve) {
		gapi.load('client', function () {
			console.log('google client loading');
			resolve();
		});
	}).then(function () {
		return checkAuth();
	}).then(function () {
		return Promise.all([loadDriveApi(), loadSheetsApi()]);
	}).then(function () {
		return {
			listSpreadsheets: listSpreadsheets,
			loadFileData: loadFileData,
			registerSignInListener: registerSignInListener,
			signIn: signIn,
			signOut: signOut
		};
	});
};

exports.default = {
	load: load
};

/***/ })

},[198]);
//# sourceMappingURL=main.js.map