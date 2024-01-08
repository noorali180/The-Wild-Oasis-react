import Spinner from "../../ui/Spinner";
import CabinRow from "../../features/cabins/CabinRow";
import PageNotFound from "../../pages/PageNotFound";
import Table from "../../ui/Table";

import { useCabins } from "./hooks/useCabins";
import Menus from "../../ui/Menus";

function CabinTable() {
  // const {
  //   isLoading,
  //   data: cabins,
  //   error,
  // } = useQuery({ queryKey: ["cabins"], queryFn: getCabins });
  const { isLoading, error, cabins } = useCabins();

  if (isLoading) return <Spinner />;

  if (error) {
    console.error(error);
    return <PageNotFound />;
  }

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={cabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
