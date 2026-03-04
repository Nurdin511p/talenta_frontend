function openModal(title, html, saveFn){
  modal.style.display="flex";
  modalTitle.innerText=title;
  modalBody.innerHTML=html;
  modalSave.onclick=saveFn;
}

function closeModal(){
  modal.style.display="none";
}