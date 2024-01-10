import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

import { useBookings } from "../bookings/hooks/useBookings";
import Spinner from "../../ui/Spinner";
import PageNotFound from "../../pages/PageNotFound";

function BookingTable() {
  const { isLoading, error, bookings } = useBookings();

  if (isLoading) return <Spinner />;

  if (error) {
    console.error(error);
    return <PageNotFound />;
  }

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
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default BookingTable;
