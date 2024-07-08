import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { LayoutContainer } from "./LayoutStyles";

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <LayoutContainer>{children}</LayoutContainer>
      <Footer />
    </>
  );
};
