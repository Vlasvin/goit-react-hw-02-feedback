import { Message } from 'components/Notification/Notification.styled';
import React from 'react';

export const Notification = ({ msg }) => {
  return <Message>{msg}</Message>;
};
