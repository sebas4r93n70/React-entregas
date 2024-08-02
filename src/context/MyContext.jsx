import { createContext, useState } from "react";

export const MyContext = createContext();
// eslint-disable-next-line react/prop-types
function ContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handledMenu = () => {
    setIsOpen(!isOpen);
  };
  const dataContext = { isOpen, handledMenu };
  return (
    <MyContext.Provider value={dataContext}>{children}</MyContext.Provider>
  );
}
export default ContextProvider;
