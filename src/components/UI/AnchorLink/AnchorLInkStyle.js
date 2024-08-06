import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Anchor = styled(NavLink)`
  /* color: crimson; */
  color: ${(props) => (props.color ? props.color : "white")};
  text-decoration: none;
  a {
    text-decoration: none;
    color: ${(props) => (props.color ? props.color : "crimson")};
  }
`;
