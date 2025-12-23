import styled from 'styled-components';

export const Card = styled.div`
  background-color: #3f3f3f;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

export const ExpenseItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
  border-radius: 12px;
  color: white;
  h2 { font-size: 1rem; flex: 1; margin: 0 1rem; }
`;

export const PriceTag = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem 1.5rem;
  border-radius: 12px;
`;

export const DeleteButton = styled.button`
  background-color: #7a0000;
  color: white;
  border: 1px solid #ff4d4d;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 1rem;
  font-size: 0.8rem;

  &:hover {
    background-color: #ff4d4d;
  }
`;