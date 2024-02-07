import FormOrder from "../Form/Form";

const Modal = ({ selectedProduct, closeModal, isFormSubmitted, setIsFormSubmitted }) => {


	return (
		<dialog id="my_modal_3" className="modal">
			{!isFormSubmitted ? (
				<div className="modal-box text-black">
					<h3 className="font-semibold text-lg">{selectedProduct ? `Ваш выбор: ${selectedProduct}` : 'Купить'}</h3>
					<p className="py-1 mt-3 text-sm text-gray-600">
						Пожалуйста, заполните данные в форме и мы вам перезвоним.
					</p>
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
					<FormOrder
						selectedProduct={selectedProduct}
						closeModal={closeModal}
						setIsFormSubmitted={setIsFormSubmitted}
						btn='Отправить'
					/>
				</div>
			)
				:
				(
					<div className="modal-box">
						<p className="text">Ваш запрос успешно отправлен!</p>
					</div>
				)
			}
		</dialog>
	)
}

export default Modal;