import React from 'react';
import StepWrapper from './StepWrapper';

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
  }

  render() {
    return (
      <div className="container" id="app">
        <StepWrapper>
          <StepOne title="1" />
          <StepTwo title="2" />
          <StepThree title="3" />
        </StepWrapper>
      </div>
    );
  }

}

export default connect(mapStateToProps)(App);