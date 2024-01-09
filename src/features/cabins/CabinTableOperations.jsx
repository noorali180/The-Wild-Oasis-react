import TableOperation from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

function CabinTableOperations() {
  return (
    <TableOperation>
      <Filter
        filterName={"discount"}
        filterOptions={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <div>Sort</div>
    </TableOperation>
  );
}

export default CabinTableOperations;
