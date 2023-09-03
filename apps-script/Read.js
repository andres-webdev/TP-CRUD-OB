// Obtenemos los valores del rango seleccionando solo los datos del cliente
function readUsers() {
  const userData = sheetsObFallidos.getRange(2, 1, sheetsObFallidos.getLastRow() - 1, 13).getDisplayValues();
  if (userData.length === 0) {
    return "No hay registros para mostrar"
  }
  return userData
}

// Obtenemos todas las tipificaciones tanto de las antiguas creadas en el drive como las nuevas generadas
function readComentsCall() {
  const comentsCall = sheetsTipificaciones.getDataRange().getDisplayValues();
  const oldComentsCall = sheetsObFallidos.getRange(2, 1, sheetsObFallidos.getLastRow() - 1, sheetsObFallidos.getLastColumn()).getDisplayValues()
  comentsCall.shift();
  if (comentsCall.length === 0) {
    return "No hay registros para mostrar"
  }
  return { newComentsCall: comentsCall, oldComentsCall: oldComentsCall }
}

// Buscar la fila donde se encuentra el cliente en base a un dato, que puede ser Telefono, DNI, Codigo de cliente, Apellido y Nombre, respectivamente.
function findUserByValue(target) {
  const usersData = sheetsObFallidos.getRange(2, 1, sheetsObFallidos.getLastRow() - 1, 12).getDisplayValues();
  if (usersData.length === 0) {
    return "No hay registros para mostrar"
  } else if (target === "") {
    return usersData
  }

  const userData = usersData
    .filter(user => {
      if (user[4].toLowerCase() === target.toLowerCase()) {
        return user;
      } else if (user[5].toLowerCase() === target.toLowerCase()) {
        return user;
      } else if (user[6].toLowerCase() === target.toLowerCase()) {
        return user;
      } else if (user[3].toLowerCase() === target.toLowerCase()) {
        return user;
      } else if (user[2].toLowerCase() === target.toLowerCase()) {
        return user
      }
    });

  return userData.length > 0 ? userData : []
}

// Obtenemos los valores del rango seleccionando de las peticiones realizadas a creditos
function readRequestToCreditByClient(number) {
  const readRequest = sheetsSolicitudesCreditos.getDataRange().getDisplayValues();
  readRequest.shift();
  if (readRequest.length === 0) {
    return "No hay registros para mostrar"
  }
  return readRequest.filter(request => request[4] === number)
}

// Obtener todas la solicitudes y respuestas de realizadas
function getAllRequestsByPhoneClient(phone) {
  const readRequest = sheetsSolicitudesCreditos.getDataRange().getDisplayValues();
  const readResult = sheetsRespuestaCreditos.getDataRange().getDisplayValues();
  readRequest.shift();
  readResult.shift();

  const filterRequestsByPhone = readRequest.filter(elem => elem[4] === phone)
  const filterResultsByPhone = readResult.filter(elem => elem[4] === phone)

  const requestsAndResultsByPhone = [...filterRequestsByPhone, ...filterResultsByPhone]
    .sort((comentCall, nextComentCall) => new Date(`${nextComentCall[5]}, ${nextComentCall[6]}`) - new Date(`${comentCall[5]}, ${comentCall[6]}`))

  return requestsAndResultsByPhone
}

/* // Buscamos los clientes que correspondan a la fecha de creacion
function getAllClientsByDate(date){
  const userData = sheetsObFallidos.getRange(2, 1, sheetsObFallidos.getLastRow() - 1, 13).getDisplayValues();
  if (userData.length === 0) {
    return "No hay registros para mostrar"
  }
  return userData.filter(client => client[8] === date)
} */