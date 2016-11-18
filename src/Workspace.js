import React from 'react';
import gapi from 'gapi';

import FlatButton from 'material-ui/FlatButton';

import Card from './Card';
import Selector from './Selector';

const cardStyle = {
  width: '75vw',
  height: '45vw',
  fontSize: '10vw',
  border: '1px solid black',
};
const workspaceStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
};
const templateDrawerStyle = {
  backgroundColor: '#ffffff',
  borderTop: '1px solid black',
  bottom: 0,
  position: 'absolute',
  width: '100%'
};
const templateHolderStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  margin: '20px 0'
};
const templateEditorStyle = {
  height: 100,
  width: '35%'
};

class Workspace extends React.Component {
  static propTypes = {
    file: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      frontTemplate: '<p>{{col1}}</p>',
      backTemplate: '<p>{{col2}}</p>',
      templateDrawerOpen: false,
      cardIndex: 0,
      cardFresh: true
    };
  }

  toggleTemplateDrawer = () => {
    this.setState({
      templateDrawerOpen: !this.state.templateDrawerOpen
    });
  }

  frontTemplateChanged = (event) => {
    this.setState({
      frontTemplate: event.target.value
    });
  }

  backTemplateChanged = (event) => {
    this.setState({
      backTemplate: event.target.value
    });
  }

  cardClicked = (event) => {
    this.setState({
      cardFresh: !this.state.cardFresh
    });
  }

  onPreviousCard = (event) => {
    var newIndex = this.state.cardIndex - 1;
    if (newIndex < 0) {
      newIndex = this.props.file.values.length - 1;
    }
    this.setState({
      cardIndex: newIndex,
      cardFres: true
    });
  }

  onNextCard = (event) => {
    var newIndex = this.state.cardIndex + 1;
    if (newIndex >= this.props.file.values.length) {
      newIndex = 0;
    }
    this.setState({
      cardIndex: newIndex,
      cardFresh: true
    });
  }

  render() {
    const cards = this.props.file ? this.props.file.values || [] : [];
    const card = cards[this.state.cardIndex];
    return(
      <div style={workspaceStyle}>
        <div>
          {
            cards.length > 0
            ?
            <div>
              <Card
                style={cardStyle}
                data={card}
                front={this.state.cardFresh}
                frontTemplate={this.state.frontTemplate}
                backTemplate={this.state.backTemplate}
                onCardClicked={this.cardClicked}
              />
              <FlatButton
                label="previous"
                primary={true}
                onClick={this.onPreviousCard}
              />
              <FlatButton
                label="next"
                primary={true}
                onClick={this.onNextCard}
              />
            </div>
            :
            <p>No cards found</p>
          }
        </div>
        <div style={templateDrawerStyle}>
          {
            this.state.templateDrawerOpen
            ?
            <div>
              <FlatButton
                label="Hide card templates"
                primary={true}
                onClick={this.toggleTemplateDrawer}
              />
              <div style={templateHolderStyle}>
                <textarea
                  name="frontTemplateField"
                  style={templateEditorStyle}
                  defaultValue={this.state.frontTemplate}
                  onBlur={this.frontTemplateChanged}
                />
                <textarea
                  name="backTemplateField"
                  style={templateEditorStyle}
                  defaultValue={this.state.backTemplate}
                  onBlur={this.backTemplateChanged}
                />
                <div>
                  <ul>
                    <li>One of each template will be renderd for each row of your spreadsheet</li>
                    <li>When rendered, <code>{'{'}{'{'}col1{'}'}{'}'}</code> will be replace with the data in the first column of the row</li>
                    <li>Similarly, You can use <code>{'{'}{'{'}col2{'}'}{'}'}</code>, <code>{'{'}{'{'}col3{'}'}{'}'}</code>, etc to render other columns of data</li>
                    <li>Use standard HTML syntax in template</li>
                    <li>Templates will reset when page reloads</li>
                  </ul>
                </div>
              </div>
            </div>
            :
            <div>
              <FlatButton
                label="Edit card templates"
                primary={true}
                onClick={this.toggleTemplateDrawer}
              />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Workspace;
