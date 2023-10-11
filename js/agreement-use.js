(() => {
  const refs = {
    closeModalBtn: document.querySelector("[data-agreement-close]"),
    modal: document.querySelector("[data-agreement-modal]"),
  };

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.add("is-hidden");
  }
})();
