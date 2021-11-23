import React from "react";
import ItemList from "./components/ItemList";
import { AppContainer, Title } from "./components/shared/StyledComponents";

const App = () => {
  return (
    <AppContainer>
      <Title> Todo </Title>
      <ItemList />
    </AppContainer>
  );
};

export default App;
