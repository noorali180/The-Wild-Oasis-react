import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ sortOptions }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      value={sortBy}
      options={sortOptions}
      type={"white"}
      onChange={handleChange}
    />
  );
}

export default SortBy;
