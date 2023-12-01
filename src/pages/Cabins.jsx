import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  return (
    <Row type="vertical">
      <Row>
        <Heading as="h1">All cabins</Heading>
        <p>filter/sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </Row>
  );
}

export default Cabins;
