import React from 'react';
import {
  WrapperBtn,
  BtnFeedback,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <WrapperBtn>
      {options.map(option => {
        return (
          <li key={option}>
            <BtnFeedback
              key={option}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </BtnFeedback>
          </li>
        );
      })}
    </WrapperBtn>
  );
};
