import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Cards = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(4, 1fr);
  gap: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  margin-top: 15px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  background: #eabd55;
  transition: 0.3s ease all;
  &:hover {
    background: #dba8b1;
    transform: scale(1.02);
  }
`;

export const NumberOfStrokes = styled.div`
  font-size: 20px;
  font-weight: bold;
`;