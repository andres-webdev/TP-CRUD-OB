// Editar los datos del cliente, exceptuando el DNI
function editUser(form) {
  const fila = searchRow(form.userId, sheetsObFallidos);

  const name = returnNullValue(form.userName)
  const lastName = returnNullValue(form.userLastName)
  const phone = returnNullValue(form.userPhone)
  const dni = returnNullValue(form.userDni)
  const cod = returnNullValue(form.userCod)
  const referent = returnNullValue(form.userReferent)
  const statusWeb = returnNullValue(form.userStatusWeb)
  const country = returnNullValue(form.userCountry)
  const product = returnNullValue(form.userProduct)
  const statusRisk = returnNullValue(form.userStatusRisk)

  sheetsObFallidos.getRange(fila, 2, 1, 11).setValues([[
    country,
    name,
    lastName,
    phone,
    dni,
    cod,
    referent,
    form.userDateOfFirstContact,
    statusWeb,
    product,
    statusRisk,
  ]])

  return "User Edited"
}
// Se busca la fila en base al DNI del usuario
function searchRow(id = '1', sheet) {
  const ids = sheet
    .getRange(2, 1, sheet.getLastRow() - 1, 1)
    .getValues()
    .flat()

  const index = ids.indexOf(Number(id))
  const row = index + 2;
  return row
}

// Editar la respuesta del area de creditos a la solicitud
/* function updateResultOfRequest(info) {

  const fila = searchRow(info.requestId, sheetsSolicitudesCreditos);

  const comentsByCredit = returnNullValue(info.comentsByCredit)

  sheetsSolicitudesCreditos.getRange(fila, 10, 1, 1).setValues([[
    comentsByCredit
  ]])

  return "Request Edited"
}
 */

// Editar la gestion en la que se encuentra el cliente
function updateStatusOfClient(info){

  const fila = searchRow(info.userId, sheetsObFallidos);

  sheetsObFallidos.getRange(fila, 13, 1, 1).setValues([[
    info.statusOfClient
  ]])
}