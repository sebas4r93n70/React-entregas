import { ButtonSimple } from "../../components/UI/Button/ButtonSimple";
import { dataProducts } from "../../data/dataBase";
import { Card } from "./Card";
import {
  ProductsCardsContainer,
  ProductsContainer,
  ProductsTitleContainer,
} from "./ProductsStyles";

export const Products = () => {
  return (
    <ProductsContainer>
      <ProductsTitleContainer>
        <h2>Nuestros Celulares</h2>
      </ProductsTitleContainer>
      <ProductsCardsContainer>
        {dataProducts.map((product) => (
          <Card key={product.id} {...product}>
            <ButtonSimple>VER</ButtonSimple>
          </Card>
        ))}
      </ProductsCardsContainer>
    </ProductsContainer>
  );
};
