import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex: 1;
`;

export const Card = styled.div`
  text-align: center;
  width: 100%;
  max-width: 500px;
  padding: 80px;
  color: white;
  background-color: rgba(0,0,0,0.7);
  border-radius: 25px;

  h5 {
    font-size: 22px;
  margin-bottom: 20px;

  @media(min-width: 768px){
  font-size: 28px;
}
  }
`;
