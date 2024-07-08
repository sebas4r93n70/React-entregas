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
        <a href="">
          <img src="/img/phone-bow-front.png" alt="" />
        </a>
      </Logo>
      <NavbarCotainer>
        <NavbarLinks>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">LOGIN</a>
            </li>
          </ul>
        </NavbarLinks>
      </NavbarCotainer>
      <MenuContainer>
        <TiThMenu />
      </MenuContainer>
    </HeaderContainer>
  );
};
