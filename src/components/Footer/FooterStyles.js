import styled from "styled-components";
export const FooterContainer = styled.footer`
  height: 300px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2rem;
  color: white;
  font-size: 1rem;
  text-align: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 30px;
  }
`;
export const FooterInfoContainer = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
  img {
    width: 70px;
    object-fit: contain;
  }
`;
export const FooterLinksPageContainer = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  line-height: 2rem;
  h4 {
    font-size: 1.2rem;
  }
  /* a {
    text-decoration: none;
    color: ${(props) => props.color || "white"};
  } */
`;
export const FooterSocialLinksContainer = styled(FooterLinksPageContainer)`
  font-size: 2rem;
`;
export const FooterNewsletterContainer = styled.div``;
