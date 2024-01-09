import Spinner from "../../ui/Spinner";
import CabinRow from "../../features/cabins/CabinRow";
import PageNotFound from "../../pages/PageNotFound";
import Table from "../../ui/Table";

import { useCabins } from "./hooks/useCabins";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  // const {
  //   isLoading,
  //   data: cabins,
  //   error,
  // } = useQuery({ queryKey: ["cabins"], queryFn: getCabins });
  const { isLoading, error, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  // 1) FILTER...
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);

  // 2) SORT...
  const sortByValue = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortByValue.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  ///////////////////////////////////////////////////////

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
          // data={cabins}
          // data={filteredCabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
