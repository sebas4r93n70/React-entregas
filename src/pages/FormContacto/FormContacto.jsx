import { ButtonSimple } from "../../components/UI/Button/ButtonSimple";
import { FormContactContainer } from "./FormContact";

export const FormContacto = () => {
  return (
    <FormContactContainer>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" />
      <label htmlFor="lastname">Apellido:</label>
      <input type="text" id="lastname" />
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" />
      <label htmlFor="text_area">Asunto:</label>
      <textarea name="" id="text_area"></textarea>
      <ButtonSimple>Enviar</ButtonSimple>
    </FormContactContainer>
  );
};
