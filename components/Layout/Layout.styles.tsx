import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  padding: 32px;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  height: 100%;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
`;
