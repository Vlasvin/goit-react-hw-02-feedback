import styled from 'styled-components';

export const Title = styled.h2``;
export const BtnFeedback = styled.button`
  background-color: #485259;
  color: #fff;
  padding: 5px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:active {
    background-color: #4a7bac;
  }
`;
export const WrapperBtn = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 0;
`;
