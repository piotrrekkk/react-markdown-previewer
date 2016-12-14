import React, {PropTypes} from 'react';
import InputField from './InputField';
import PreviewArea from './PreviewArea';
import Header from './Header';

class App extends React.Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      value: `# The largest heading
## The second largest heading
###### The smallest heading`
    };
  }

  handleInputChange(value) {
    this.setState({
      value
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="row">
          <InputField onChange={this.handleInputChange} value={this.state.value}/>
          <PreviewArea value={this.state.value}/>
        </div>
      </div>
    );
  }
}

export default App;
