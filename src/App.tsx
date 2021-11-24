import React from "react";
import { ThemeProvider } from "styled-components";
import ItemList from "./components/ItemList";
import { AppContainer, Title } from "./components/shared/StyledComponents";
import { theme } from "./theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <AppContainer>
      <Title> Todo </Title>
      <ItemList />
    </AppContainer>
    </ThemeProvider>
  );
};

export default App;
