import React from 'react';
import { Steps } from 'antd/dist/antd.min';
const Step = Steps.Step;

class StepWrapper extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      stepNumber: 1
    }
  }

  next() {
    if (this.state.stepNumber <= this.props.children.length - 1)
      this.setState({ stepNumber: this.state.stepNumber + 1 });
  }

  render() {
    return (
      <div>
        <Steps size="small" current={this.state.stepNumber}>
          {
            this.props.children.map(el => {
              return <Step key={Date.now() + Math.random()} title={"title " + el.props.title} />
            })
          }
        </Steps>
        <div>
          {this.props.children[this.state.stepNumber - 1]}
        </div>
        <button onClick={this.next.bind(this)}>next</button>
      </div>
    )
  }

}

export default StepWrapper;