import bootstrap from "../../assets/js/bootstrap";
import Swal from "../../assets/js/sweetalert.min";

export function showModal(id) {
  let myModal = new bootstrap.Modal(document.getElementById(id));
  myModal.show();
}

export function hideModal(id) {
  const myModal = bootstrap.Modal.getInstance(document.getElementById(id));
  myModal.hide();
}

export function viewModal(id, callback = function () {}) {
  let myModalEl = document.getElementById(id);
  myModalEl.addEventListener("show.bs.modal", callback);
}

export function clearModal(id, callback = function () {}) {
  let myModalEl = document.getElementById(id);
  myModalEl.addEventListener("hidden.bs.modal", callback);
}

export function ModalDialogInputText(title, mensaje, callback) {
  Swal({
    title: title,
    text: mensaje,
    input: "text",
    inputPlaceholder: "Ingrese un el motivo de la anulación",
    type: "question",
    showCancelButton: true,
    confirmButtonText: "Si",
    cancelButtonText: "No",
    allowOutsideClick: false,
  }).then((isConfirm) => {
    callback(isConfirm);
  });
}

export function ModalDialog(title, mensaje, callback) {
  Swal({
    title: title,
    text: mensaje,
    type: "question",
    showCancelButton: true,
    confirmButtonText: "Si",
    cancelButtonText: "No",
    allowOutsideClick: false,
  }).then((isConfirm) => {
    if (isConfirm.value == undefined) {
      return false;
    }
    if (isConfirm.value) {
      callback(true);
    } else {
      callback(false);
    }
  });
}

export function ModalAlertSuccess(title, message, callback = function () {}) {
  Swal({
    title: title,
    text: message,
    type: "success",
    showConfirmButton: true,
    allowOutsideClick: false,
  }).then(() => {
    callback();
  });
}

export function ModalAlertWarning(title, message) {
  Swal({
    title: title,
    text: message,
    type: "warning",
    showConfirmButton: true,
    allowOutsideClick: false,
  });
}

export function ModalAlertError(title, message) {
  Swal({
    title: title,
    text: message,
    type: "error",
    showConfirmButton: true,
    allowOutsideClick: false,
  });
}

export function ModalAlertInfo(title, message) {
  Swal({
    title: title,
    text: message,
    type: "info",
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
  });
}
