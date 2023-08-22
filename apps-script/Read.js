// Obtenemos los valores del rango seleccionando solo los datos del cliente
function readUsers() {
  const userData = sheetsObFallidos.getRange(2, 1, sheetsObFallidos.getLastRow() - 1, 12).getDisplayValues();
  userData.shift();
  if (userData.length === 0) {
    return "No hay registros para mostrar"
  }
  return userData
}

// Obtenemos todas las tipificaciones tanto de las antiguas creadas en el drive como las nuevas generadas
function readComentsCall() {
  const comentsCall = sheetsTipificaciones.getDataRange().getDisplayValues();
  const oldComentsCall = sheetsObFallidos.getRange(2, 1, sheetsObFallidos.getLastRow() - 2, sheetsObFallidos.getLastColumn()).getDisplayValues()
  comentsCall.shift();
  if (comentsCall.length === 0) {
    return "No hay registros para mostrar"
  }
  return { newComentsCall: comentsCall, oldComentsCall: oldComentsCall }
}
