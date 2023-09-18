const Modal = ({ isVisible }) => {
  if (!isVisible) return null;
  return (
  <section className="fixed inset-0 backdrop-blur-sm flex justify-center z-10">
    <section className="flex flex-col w-1/2">
      <button className="text-earlgrey text-xl place-self-end">X</button>
      <section className="bg-cheeseyellow p-2 rounded-sm">
        modal
      </section>
    </section>
  </section>
  )
}

export default Modal;