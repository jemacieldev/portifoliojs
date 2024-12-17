import { Titulo as TituloEstilo } from "./styles";

export type Props = {
  children: string;
  fontSize?: number; // Definindo fontSize como opcional
};

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
);

export default Titulo;
