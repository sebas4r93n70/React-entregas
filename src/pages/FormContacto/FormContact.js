import styled from "styled-components";

export const FormContactContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1000px;
  height: 100vh;
  gap: 1rem;
  padding: 1rem 2rem;
  font-weight: 700;
  input {
    width: 300px;
    height: 1.2rem;
  }
  textarea {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;
