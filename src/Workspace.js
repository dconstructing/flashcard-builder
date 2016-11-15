import React from 'react';
import gapi from 'gapi';

import FlatButton from 'material-ui/FlatButton';

import Card from './Card';
import Selector from './Selector';

const cardStyle = {
  border: '1px solid black',
  margin: 20,
  padding: 20
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
      templateDrawerOpen: false
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

  render() {
    const rows = this.props.file ? this.props.file.values || [] : [];
    return(
      <div>
        {
          rows.length > 0
          ?
          <div>
            <p>Tap card to flip</p>
            {
              rows.map((row, i) => {
                return (
                  <Card
                    key={i}
                    style={cardStyle}
                    data={row}
                    frontTemplate={this.state.frontTemplate}
                    backTemplate={this.state.backTemplate}
                  />
                );
              })
            }
          </div>
          :
          <p>No cards found</p>
        }
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
