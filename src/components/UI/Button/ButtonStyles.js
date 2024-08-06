import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export const ButtonMain = styled(motion.button)`
  background-color: #44c767;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  color: #ffffff;
  cursor: pointer;
  font-size: 17px;
  font-weight: 900;
  padding: 15px 40px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
  text-transform: uppercase;
  &:hover {
    background-color: #5cbf2a;
  }
`;
export const ButtonNav = styled(NavLink)`
  background-color: #44c767;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  color: #ffffff;
  cursor: pointer;
  font-size: 17px;
  font-weight: 900;
  padding: 15px 40px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
  text-transform: uppercase;
  &:hover {
    background-color: #5cbf2a;
  }
  &:active {
    transform: scale(0.95);
  }
`;
