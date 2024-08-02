import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ProductsTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  text-align: center;
`;
export const ProductsCardsContainer = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 2rem;
  @media (max-width: 600px) {
    padding: 2rem 0;
  }
`;
export const CardContainer = styled.div`
  width: 300px;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background-color: black;
  color: white;
  border-radius: 25px;
`;
export const CardImg = styled.div`
  width: 70%;
  height: 250px;
  background-color: white;
  border-radius: 12%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }
`;
export const CardInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const CardButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
