import React from 'react';
import {
  FeedbackResult,
  StatisticList,
} from 'components/Statistics/Statistics.styled';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return total ? (
    <StatisticList>
      <li>
        <FeedbackResult>Good: {good}</FeedbackResult>
      </li>
      <li>
        <FeedbackResult>Neutral: {neutral}</FeedbackResult>
      </li>
      <li>
        <FeedbackResult>Bad: {bad}</FeedbackResult>
      </li>
      <li>
        <FeedbackResult>Total: {total}</FeedbackResult>
      </li>
      <li>
        <FeedbackResult>
          Positive feedback: {positivePercentage}%
        </FeedbackResult>
      </li>
    </StatisticList>
  ) : (
    <Notification msg="There is no feedback"></Notification>
  );
};
