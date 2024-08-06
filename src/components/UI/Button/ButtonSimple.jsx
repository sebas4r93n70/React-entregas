import { ButtonMain } from "./ButtonStyles";

// eslint-disable-next-line react/prop-types
export const ButtonSimple = ({ children }) => {
  return <ButtonMain whileTap={{ scale: 0.95 }}>{children}</ButtonMain>;
};
