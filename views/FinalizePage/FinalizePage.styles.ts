import { TextField } from "@mui/material";
import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
`

export const NewTextField = styled(TextField)`
  margin: 10px;
  min-width: 300px;
`

export const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
`