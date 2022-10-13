import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  align-items: flex-start;

  >button {
    margin-left: 200px;
  }

  @media (min-width: 768px) {
    >button:first-of-type {
      display: none;
    }
  }
`;
