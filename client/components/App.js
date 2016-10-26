import React from 'react';
import stepWrapper from './stepWrapper';

// Connect
import { connect } from 'react-redux';

function mapStateToProps (state) {
  return {
    access: state.access,
  }
}
// End Connect

// Components
import StepOne from './test/StepOne';
import StepTwo from './test/StepTwo';
import StepThree from './test/StepThree';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.steps = stepWrapper(
      [
        <StepOne title="1" />,
        <StepTwo title="2" />,
        <StepThree title="3" />
      ]
    );
  }

  render() {
    return (
      <div className="container" id="app">
        {this.steps}
      </div>
    );
  }

}

export default connect(mapStateToProps)(App);