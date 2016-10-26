import React from 'react';
import { Steps } from 'antd/dist/antd.min';
const Step = Steps.Step;

const stepWrapper = array => {

  return (
    <Steps size="small" current={1}>
      {
        array.map(el => {
          return <Step key={Date.now() + Math.random()} title={"title " + el.props.title} />
        })
      }
    </Steps>
  );

};

export default stepWrapper;