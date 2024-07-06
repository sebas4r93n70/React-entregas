import { TiThMenu } from "react-icons/ti";
import {
  HeaderContainer,
  Logo,
  MenuContainer,
  NavbarCotainer,
  NavbarLinks,
} from "./NavbarStyles";

export const Navbar = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src="/img/phone-bow-front.png" alt="" />
      </Logo>
      <NavbarCotainer>
        <NavbarLinks>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>LOGIN</li>
          </ul>
        </NavbarLinks>
      </NavbarCotainer>
      <MenuContainer>
        <TiThMenu />
      </MenuContainer>
    </HeaderContainer>
  );
};
