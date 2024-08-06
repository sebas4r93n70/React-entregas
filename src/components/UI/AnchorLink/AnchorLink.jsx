/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Anchor } from "./AnchorLInkStyle";
import { MyContext } from "../../../context/MyContext";

// eslint-disable-next-line react/prop-types
export const AnchorLink = ({ color, to, children }) => {
  const { handledWindows } = useContext(MyContext);
  return (
    <Anchor color={color} to={to} onClick={handledWindows}>
      {children}
    </Anchor>
  );
};
