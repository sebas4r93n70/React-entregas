import {
  FooterContainer,
  FooterInfoContainer,
  FooterLinksPageContainer,
  FooterSocialLinksContainer,
} from "./FooterStyles";
import { FaSquarePhone, FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import {
  FaMapMarkerAlt,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfoContainer>
        <img src="/img/chat-talk-svg.svg" alt="" />
        <FaSquarePhone />
        <span>01123456789</span>
        <IoMdMail />
        <span>almacendecelus@almacelus.com.ar</span>
        <FaMapMarkerAlt />
        <span>Fake 159</span>
        <span></span>
      </FooterInfoContainer>
      <FooterLinksPageContainer>
        <h4>ENLACES</h4>
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">LOGIN</a>
      </FooterLinksPageContainer>
      <FooterSocialLinksContainer>
        <h4>REDES</h4>
        <a href="#" title="Facebook">
          <FaFacebookSquare />
        </a>
        <a href="#">
          <FaInstagramSquare />
        </a>
        <a href="#">
          <FaSquareXTwitter />
        </a>
      </FooterSocialLinksContainer>
    </FooterContainer>
  );
};
