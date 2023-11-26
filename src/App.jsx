import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";



function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Heading as="h1">Heading 1</Heading>
        <Heading as="h2">Heading 2</Heading>
        <Heading as="h3">Heading 3</Heading>
        <Button>Click me 1</Button>
        <Button variation ="danger" size="small">Click me 2</Button>
        <div>
          <Input type="text" placeholder="Enter your input" />
          <Input type="password" placeholder="Enter your password" />
        </div>
      </div>
    </>
  );
}

export default App;
