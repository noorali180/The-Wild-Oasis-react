import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 5px;
  background-color: yellow;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 8px;
  font-size: 15px;
  background-color: blue;
  color: white;
  outline: none;
  border: none;
  border-radius: 5px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <H1>Heading 1</H1>
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;
