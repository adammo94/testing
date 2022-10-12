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
  padding: 50px;
  color: black;
  background-color: white;
  border-radius: 25px;
  position: relative;
  box-shadow: 0 0 15px rgba(0,0,0,0.5);

  img {
    top: 0;
    animation: test2 4s ease-out infinite;
    
    @keyframes test2 {
      0% {transform: translateY(0)}
      50% {transform: translateY(-10px)}
      100% {transform: translateY(0)}
    }
  }


  svg {
    color: rgb(24,118,209);
    top: 20px;
    right: 50%;
    transform: translate(50%);
    position: absolute;
    font-size: 60px;

    @media (min-width: 768px){
      font-size: 100px;
      top: 5px;
    }
  }

  h5 {
    font-size: 22px;
  margin-bottom: 20px;

  @media(min-width: 768px){
  font-size: 28px;
  margin-top: 5px;
}
  }
`;
