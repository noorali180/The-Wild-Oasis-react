import styled from "styled-components";
import BookingDataBox from "../bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/hooks/useBooking";
import Spinner from "../../ui/Spinner";
import PageNotFound from "../../pages/PageNotFound";
import Checkbox from "../../ui/Checkbox";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckIn } from "./hooks/useCheckIn";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckInBooking() {
  const { isLoading, error, booking } = useBooking();
  const moveBack = useMoveBack();

  const { checkIn, isCheckingIn } = useCheckIn();

  const [confirmIsPaid, setConfirmIsPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);

  function handleCheckIn() {
    if (!confirmIsPaid) return;
    checkIn();
  }

  useEffect(() => {
    setConfirmIsPaid(Boolean(booking?.isPaid));
  }, [booking]);

  if (isLoading) return <Spinner />;

  if (error) return <PageNotFound />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    // numGuests,
    // hasBreakfast,
    // numNights,
    // isPaid,
  } = booking;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <Box>
        <Checkbox
          checked={addBreakfast}
          onChange={() => {
            setAddBreakfast((add) => !add);
            setConfirmIsPaid(false);
          }}
          disabled={confirmIsPaid}
          id={"breakfast"}
        >
          Want to add breakfast for X?
        </Checkbox>
      </Box>

      <Box>
        <Checkbox
          checked={confirmIsPaid}
          onChange={() => setConfirmIsPaid((confirm) => !confirm)}
          disabled={confirmIsPaid}
          id={"confirm"}
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {formatCurrency(totalPrice)}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button
          onClick={handleCheckIn}
          disabled={!confirmIsPaid || isCheckingIn}
        >
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckInBooking;
