import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./hooks/useBooking";
import Spinner from "../../ui/Spinner";
import { statusToTagName } from "../../utils/constants";
import PageNotFound from "../../pages/PageNotFound";
import { useNavigate } from "react-router-dom";
import { useCheckOut } from "../check-in-out/hooks/useCheckOut";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./hooks/useDeleteBooking";
import Modal from "../../ui/Modal";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { isLoading, booking, error } = useBooking();
  const { checkOut, isCheckingOut } = useCheckOut();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const moveBack = useMoveBack();

  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  if (error) return <PageNotFound />;

  const { id: bookingId, status } = booking;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/check-in/${bookingId}`)}>
            Check In
          </Button>
        )}

        {status === "checked-in" && (
          <Button onClick={() => checkOut(bookingId)} disabled={isCheckingOut}>
            Check Out
          </Button>
        )}

        <Modal>
          <Modal.Open opens="confirm-delete">
            <Button variation="danger">Delete booking</Button>
          </Modal.Open>

          <Modal.Window name="confirm-delete">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() =>
                deleteBooking(bookingId, {
                  onSuccess: () => {
                    navigate(-1);
                  },
                })
              }
            />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
