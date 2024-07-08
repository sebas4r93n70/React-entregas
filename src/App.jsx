import { Hero } from "./components/Hero/Hero";
import { Layout } from "./components/Layout/Layout";
import { Products } from "./components/Products/Products";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Products />
      </Layout>
    </>
  );
}

export default App;
