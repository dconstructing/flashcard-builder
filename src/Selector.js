import React from 'react';

class Selector extends React.Component {
  static propTypes = {
    files: React.PropTypes.array.isRequired,
    onSelected: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  fileSelected = (fileId) => {
    this.props.onSelected(fileId);
  };

  render() {
    return (
      <div>
        <p>Which file contains your flashcards?</p>
        {
          this.props.files.map((file) => {
            return (
              <div key={file.id}>
                <button onClick={() => this.fileSelected(file.id) }>
                  {file.name}
                </button>
              </div>
            );
          })
        }
      </div>
    )
  }
}

export default Selector;
