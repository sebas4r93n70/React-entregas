import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { About } from "../pages/About/About";
import { Products } from "../pages/Products/Products";
import { Product } from "../pages/Product/Product";
import { PageE404 } from "../pages/PageE404/PageE404";
import { FormContacto } from "../pages/FormContacto/FormContacto";
import ContextProvider from "../context/MyContext";

function Routes() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Layout>
          <ReactDomRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacto" element={<FormContacto />} />

            <Route path="/about" element={<About />} />
            <Route path="/productos">
              <Route index element={<Products />} />
              <Route path=":productName" element={<Product />} />
            </Route>
            <Route path="*" element={<PageE404 />} />
          </ReactDomRoutes>
        </Layout>
      </ContextProvider>
    </BrowserRouter>
  );
}
export default Routes;
