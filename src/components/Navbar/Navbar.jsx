import { TiThMenu } from "react-icons/ti";
import {
  HeaderContainer,
  Logo,
  MenuContainer,
  NavbarCotainer,
  NavbarLink,
  NavbarLinks,
} from "./NavbarStyles";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

export const Navbar = () => {
  const { isOpen, handledMenu } = useContext(MyContext);
  return (
    <HeaderContainer>
      <Logo>
        {/* <a href="">
          <img src="/img/phone-bow-front.png" alt="" />
        </a> */}
        <NavbarLink to={"/"}>
          <img src="/img/phone-bow-front.png" alt="" />
        </NavbarLink>
      </Logo>
      <NavbarCotainer $toggle={isOpen}>
        <NavbarLinks>
          <NavbarLink onClick={handledMenu} to={"/"}>
            HOME
          </NavbarLink>
          <NavbarLink onClick={handledMenu} to={"/productos"}>
            EQUIPOS
          </NavbarLink>
          <NavbarLink onClick={handledMenu} to={"/about"}>
            ABOUT
          </NavbarLink>
          <NavbarLink onClick={handledMenu} to={"/contacto"}>
            CONTACTO
          </NavbarLink>
        </NavbarLinks>
      </NavbarCotainer>
      <MenuContainer onClick={handledMenu}>
        <TiThMenu />
      </MenuContainer>
    </HeaderContainer>
  );
};
