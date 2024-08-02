import { Button } from "../../components/UI/Button/Button";
import { FormContactContainer } from "./FormContact";

export const FormContacto = () => {
  return (
    <FormContactContainer>
      <label htmlFor="">Nombre:</label>
      <input type="text" />
      <label htmlFor="">Apellido:</label>
      <input type="text" />
      <label htmlFor="">Email:</label>
      <input type="text" />
      <label htmlFor="">Asunto</label>
      <textarea name="" id=""></textarea>
      <Button>Enviar</Button>
    </FormContactContainer>
  );
};
