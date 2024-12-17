import React from "react";
import Titulo from "../../components/Titulo/titulo";
import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo/paragrafo";

import { Descricao, BotaoTema, SidebarContainer } from "./styles";

export default function Sidebar() {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Je Maciel</Titulo>
        <Paragrafo tipo="secundaria">jemacieldev</Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro front-end
        </Descricao>
        <BotaoTema>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  );
}
