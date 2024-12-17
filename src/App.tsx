import { ThemeProvider } from "styled-components";

import Projetos from "./containers/Projetos/projetos";
import Sidebar from "./containers/Sidebar/Sidebar";
import Sobre from "./containers/Sobre/sobre";
import EstiloGlobal, { Container } from "./styles";
import temaLight from "./themes/light";
import temaDark from "./themes/dark";

function App() {
  return (
    <ThemeProvider theme={temaDark}>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
