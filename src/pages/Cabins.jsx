import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  return (
    <>
      <Row>
        <Heading as="h1">All cabins</Heading>
        <p>filter/sort</p>
      </Row>

      <CabinTable />
    </>
  );
}

export default Cabins;
