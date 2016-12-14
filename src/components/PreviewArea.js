import React, {PropTypes} from 'react';

class PreviewArea extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="col-md-6 col-sm-6">
        PREVIEW HERE
        {this.props.value}
      </div>
    );
  }
}

PreviewArea.PropTypes = {
  value: React.PropTypes.string.isRequired
};

export default PreviewArea;
