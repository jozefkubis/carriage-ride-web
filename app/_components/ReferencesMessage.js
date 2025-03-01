import AddReferenceForm from "./AddReferenceForm"
import Modal from "./Modal"

function ReferencesMessage({ isOpenModal, setIsOpenModal, handleSubmit }) {
  return (
    <div className="flex items-center justify-center bg-creamy-100 px-6">
      <div className="max-w-3xl text-center bg-white p-12 shadow-lg rounded-xl border border-gray-300">
        <h2 className="text-4xl font-bold text-primary-800 mb-6">
          🐴 Nezabudnuteľný zážitok?
        </h2>
        <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
          Vaša spokojnosť je pre nás dôležitá! Ak ste si užili jazdu, zanechajte
          recenziu a pomôžte ostatným. 😊
        </p>
      </div>

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <AddReferenceForm onClose={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  )
}

export default ReferencesMessage
