import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  display: flex;
  height: calc(100% - 56px);
  width: 200px;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.05);
  background-color: white;

  ul {
    width: 100%;
  }

  @media (min-width: 600px) {
    height: calc(100% - 64px);
    top: 64px;
  }
`;
