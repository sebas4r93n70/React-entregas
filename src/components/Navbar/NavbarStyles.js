import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 0.5rem 2.2rem;
  height: 80px;
  background-color: black;
`;
export const Logo = styled.div`
  height: 80px;
  width: 80px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 90%;
  }
`;

export const NavbarCotainer = styled.nav`
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarLinks = styled.ul`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  a {
    text-decoration: none;
    color: grey;
  }
  a:hover {
    color: #5cbf2a;
  }
`;
export const MenuContainer = styled.div`
  color: gray;
  font-size: 2.2rem;
  display: none;
  cursor: pointer;
  &:hover {
    color: #5cbf2a;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
