function readUsers() {
  const userData = sheetsObFallidos.getDataRange().getDisplayValues();
  userData.shift();
  if (userData.length === 0) {
    return "No hay registros para mostrar"
  }
  return userData
}

function readComentsCall() {
  const comentsCall = sheetsTipificaciones.getDataRange().getDisplayValues();
  comentsCall.shift();
  if (comentsCall.length === 0) {
    return "No hay registros para mostrar"
  }
  return comentsCall
}
