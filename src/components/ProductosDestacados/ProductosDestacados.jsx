import { dataDestacados } from "../../data/Destacados";
import { Card } from "../../pages/Products/Card";
import {
  ProductsCardsContainer,
  ProductsContainer,
  ProductsTitleContainer,
} from "../../pages/Products/ProductsStyles";
import { ButtonNavLink } from "../UI/ButtonNav/ButtonNavLink";

export const ProductosDestacados = () => {
  return (
    <ProductsContainer>
      <ProductsTitleContainer>
        <h2>Aprovecha estas PROMOS</h2>
      </ProductsTitleContainer>
      <ProductsCardsContainer>
        {dataDestacados.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </ProductsCardsContainer>
      <ButtonNavLink to={"/productos"}>ver</ButtonNavLink>
    </ProductsContainer>
  );
};
