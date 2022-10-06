import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);

`

export const Window = styled.div`
text-align: center;
margin: 10px;
padding: 80px;
color: white;
  background-color: rgba(0,0,0,0.7);
  border-radius: 25px;

  @media(min-width: 768px){
  width: 500px;
}
`

export const Paragraf = styled.p`
font-size: 22px;
  margin-bottom: 20px;

  @media(min-width: 768px){
  font-size: 28px;
}
`