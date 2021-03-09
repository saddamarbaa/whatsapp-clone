import styled from "styled-components";
import React from "react";

const App = () => {
  return (
    <Wrapper>
      <AppContainer>
        <AppBody>ok hello</AppBody>
      </AppContainer>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const AppContainer = styled.div`
  background-color: lightblue;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppBody = styled.div`
  background-color: #ededed;
  height: 90vh;
  width: 90vw;
  margin-top: -50px;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.2);
`;
