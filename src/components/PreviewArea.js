import React, {PropTypes} from 'react';
import marked from 'marked';

class PreviewArea extends React.Component {
  constructor(props) {
    super(props);
  }

  getContent() {
    return {__html: marked(this.props.value)};
  }

  render() {
    return (
      <div className="col-md-6 col-sm-6"
           dangerouslySetInnerHTML={this.getContent()}>
      </div>
    );
  }
}

PreviewArea.PropTypes = {
  value: React.PropTypes.string.isRequired
};

export default PreviewArea;
