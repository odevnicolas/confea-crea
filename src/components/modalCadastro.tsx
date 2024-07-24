import Cadastrar from "../pages/cadastrar/cadastrar";

const Modal = ({ isVisible, onClose }: any) => {
  return (
    isVisible && (
      <>
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-19"
            onClick={onClose}
        >
            <div className="absolute inset-0" onClick={(e) => e.stopPropagation()}></div>
        </div>
        <div className="fixed inset-0 z-20 m-12 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              &times;
            </button>
            <Cadastrar closeModal={onClose} />
          </div>
        </div>
      </>
    )
  );
};

export default Modal;
