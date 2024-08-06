/* eslint-disable react/prop-types */
import { CardButton, CardContainer, CardImg, CardInfo } from "./ProductsStyles";
// {
//     id: 1,
//     marca: "Apple",
//     modelo: "iPhone 14 Pro",
//     sistema: "iOS",
//     especificaciones_tecnicas: {
//       procesador: "A16 Bionic",
//       ram: "6GB",
//       almacenamiento: "128GB",
//       bateria: "3095mAh",
//       pantalla: "6.1 pulgadas",
//       camara: "48MP",
//     },
//     precio: 1099,
//     imagen:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQifinNtK5ZViLy2-yGcEQ1GE6zEpZPiJGOEwlLOlIDcxuuQ9x0qDWCYmiUPTfUhgCHVDc&usqp=CAU",
//   }
// eslint-disable-next-line react/prop-types
export const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const { marca, imagen, modelo, precio } = props;
  return (
    <CardContainer>
      <CardImg>
        <img src={imagen} alt="" />
      </CardImg>
      <CardInfo>
        <h3>{marca}</h3>
        <span>{modelo}</span>
        <span>${precio}</span>
      </CardInfo>
      <CardButton>{props.children}</CardButton>
    </CardContainer>
  );
};
