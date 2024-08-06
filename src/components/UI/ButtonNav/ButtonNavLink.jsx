import { useContext } from "react";
import { MyContext } from "../../../context/MyContext";
import { ButtonNav } from "../Button/ButtonStyles";

// eslint-disable-next-line react/prop-types
export const ButtonNavLink = ({ to, children }) => {
  // const handledWindows = () => {
  //   window.scroll(0, 0);
  // };
  const { handledWindows } = useContext(MyContext);
  return (
    <ButtonNav to={to} onClick={handledWindows}>
      {children}
    </ButtonNav>
  );
};
