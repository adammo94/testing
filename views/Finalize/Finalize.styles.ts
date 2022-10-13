import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  position: relative;

  button {
    margin-top: 20px;
  }

  h1 {
    font-size: 25px;
    padding: 5px;
    margin-bottom: 10px;
    border-bottom: 2px solid #1976D2;
  }

  input {
    font-size: 20px;

    @media (min-width: 768px) {
      font-size: 40px;
    }
  }

  img {
    position: absolute;
    top: 20%;
    width: 280px;
    opacity: 0.15;

    @media (min-width: 768px) {
        width: 400px;
    }
  }

`;
