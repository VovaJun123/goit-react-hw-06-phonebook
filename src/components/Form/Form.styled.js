import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
`;

export const StyledField = styled(Field)`
  padding: 12px;
  border: 1px solid orange;
  border-radius: 8px;
  transition: border-color 0.4s ease;
  width: 400px;
  &:focus {
    border-color: darkorange;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  transition: transform 0.4s, font-size 0.4s, color 0.4s;
  pointer-events: none;
  color: black;

  ${StyledField}:focus + &, 
${StyledField}:not(:placeholder-shown) + & {
    transform: translateY(-170%);
    font-size: 16px;
    color: black;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 16px;
  margin-top: 12px;

  pointer-events: none;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const ButtonForm = styled.button`
  font-size: 20px;
  padding: 10px 12px;
  background-color: white;
  color: black;
  border-color: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.4s ease, color 0.4s ease;
  width: 350px;

  &:active {
    background-color: orange;
  }
`;