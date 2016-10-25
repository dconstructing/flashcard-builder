import React from 'react';

import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

class Selector extends React.Component {
  static propTypes = {
    files: React.PropTypes.array.isRequired,
    onSelected: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      value: null
    }
  }

  fileSelected = (event, index, value) => {
    this.props.onSelected(value);
    this.setState({
      value: value
    })
  };

  render() {
    return (
      <SelectField
        hintText="flashcard file"
        value={this.state.value}
        onChange={this.fileSelected}
      >
        {
          this.props.files.map((file) => {
            return (
              <MenuItem
                key={file.id}
                value={file.id}
                primaryText={file.name}
              />
            );
          })
        }
      </SelectField>
    )
  }
}

export default Selector;
