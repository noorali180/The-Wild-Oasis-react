import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

// function AddCabin() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   function handleCloseModal() {
//     setIsModalOpen(false);
//   }

//   return (
//     <div>
//       <Button onClick={() => setIsModalOpen(true)}>Add a new Cabin</Button>

//       {isModalOpen && (
//         <Modal onClose={handleCloseModal}>
//           <CreateCabinForm onCloseModal={handleCloseModal} />
//         </Modal>
//       )}
//     </div>
//   );
// }

// creating a compound component for Modal functionality...
function AddCabin() {
  return (
    // API for compound component we have to build...
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Create a new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>

        {/* <Modal.Open opens="cabin-table">
        <Button>Open cabins</Button>
      </Modal.Open>
      <Modal.Window name="cabin-table">
        <CabinTable />
      </Modal.Window> */}
      </Modal>
    </div>
  );
}

export default AddCabin;
