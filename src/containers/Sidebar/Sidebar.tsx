import React from "react";
import Titulo from "../../components/Titulo/titulo";

export default function Sidebar() {
  return (
    <aside>
      <img src="https://github.com/jemacieldev.png" alt="Profile" />
      <Titulo fontSize={20}>Je Maciel</Titulo> {/* Passe um número aqui */}
    </aside>
  );
}
