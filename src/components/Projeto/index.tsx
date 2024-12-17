import Paragrafo from "../Paragrafo/paragrafo";
import Titulo from "../Titulo/titulo";

import { Card, LinkBotao } from "./styles";

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundaria">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
);

export default Projeto;
