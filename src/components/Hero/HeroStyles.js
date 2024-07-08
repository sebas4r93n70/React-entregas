import styled from "styled-components";
export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const HeroTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  flex-direction: column;
  width: auto;
  height: auto;
  position: absolute;
  z-index: 10;
  top: calc((100vh - 200px) / 2);
  left: calc((100% - 625px) / 2);
  color: white;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: 3.5rem;
    color: white;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: black;
  }
  span {
    font-size: 1.3rem;
    font-weight: 900;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;
  }
  @media (max-width: 768px) {
    align-items: center;
    left: calc((100% - 557px) / 2);
    h1 {
      font-size: 2.5rem;
      color: white;
      -webkit-text-stroke-width: 3px;
      -webkit-text-stroke-color: black;
    }
    span {
      font-size: 1.3rem;
      font-weight: 900;
      -webkit-text-stroke-width: 1.5px;
      -webkit-text-stroke-color: black;
    }
  }
  @media (max-width: 550px) {
    left: calc((100% - 530px) / 2);
  }
  @media (max-width: 520px) {
    left: calc((100% - 515px) / 2);
  }
  @media (max-width: 480px) {
    left: calc((100% - 480px) / 2);
  }
  @media (max-width: 440px) {
    left: calc((100% - 440px) / 2);
  }
  @media (max-width: 370px) {
    left: calc((100% - 360px) / 2);
  }
  @media (max-width: 330px) {
    left: calc((100% - 320px) / 2);
  }
`;
