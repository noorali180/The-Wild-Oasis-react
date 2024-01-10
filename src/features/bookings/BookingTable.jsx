import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

import { useBookings } from "../bookings/hooks/useBookings";
import Spinner from "../../ui/Spinner";
import PageNotFound from "../../pages/PageNotFound";
import Pagination from "../../ui/Pagination";
// import { useSearchParams } from "react-router-dom";

function BookingTable() {
  // const bookings = [];

  const { isLoading, error, bookings } = useBookings();

  // NOTE: It is the way to filter the data on client side (also we did for cabins table), for bookings table we will do server side filtering directly from our database (supabase) ...

  // const [searchParams] = useSearchParams();

  // // 1) FILTER
  // const filterValue = searchParams.get("status") || "all";

  // let filteredBookings;
  // if (filterValue === "all") filteredBookings = bookings;
  // if (filterValue === "checked-in")
  //   filteredBookings = bookings?.filter(
  //     (booking) => booking.status === "checked-in"
  //   );
  // if (filterValue === "checked-out")
  //   filteredBookings = bookings?.filter(
  //     (booking) => booking.status === "checked-out"
  //   );
  // if (filterValue === "unconfirmed")
  //   filteredBookings = bookings?.filter(
  //     (booking) => booking.status === "unconfirmed"
  //   );

  // // 2) SORT
  // const sortByValue = searchParams.get("sortBy") || "";
  // const [field, direction] = sortByValue.split("-");
  // const modifier = direction === "asc" ? 1 : -1;
  // const sortedBookings = filteredBookings?.sort(
  //   (a, b) => (new Date(a[field]) - new Date(b[field])) * modifier
  // );

  ///////////////////////////////////////////////////////////////////

  if (isLoading) return <Spinner />;

  if (error) {
    console.error(error);
    return <PageNotFound />;
  }

  if (bookings.length === 0) return <Empty resource={"bookings"} />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          // data={filteredBookings}
          // data={sortedBookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />

        <Table.Footer>
          <Pagination count={bookings.length} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
