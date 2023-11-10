// import { Feedback } from 'components/Feedback/Feedback';
import React, { Component } from 'react';
import {
  Title,
  FeedbackResult,
} from 'components/FeedbackOptions/FeedbackOptions.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
    // console.log(this.prevState[option]);
  };
  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBad = () => {};

  render() {
    return (
      <div>
        <Title>Please leave feedback</Title>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.leaveFeedback}
        />
        <Title>Statistics</Title>
        <FeedbackResult>Good: {this.state.good}</FeedbackResult>
        <FeedbackResult>Neutral: {this.state.neutral}</FeedbackResult>
        <FeedbackResult>Bad: {this.state.bad}</FeedbackResult>
      </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     ></div>
//   );
// };
