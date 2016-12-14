import React, {PropTypes} from 'react';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });

    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="col-md-6 col-sm-6">
        <textarea
          onChange={this.handleChange}
          className="form-control"
          rows="25"
          value={this.state.value}/>
      </div>
    );
  }
}

InputField.propTypes = {
  onChange: React.PropTypes.func.isRequired
};

export default InputField;
