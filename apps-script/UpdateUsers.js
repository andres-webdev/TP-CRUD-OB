function editUser(form) {
  const fila = searchRow(form.userId);

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

  sheetsObFallidos.getRange(fila, 2, 1, sheetsObFallidos.getLastColumn() - 1).setValues([[
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
    statusRisk
  ]])

  return "User Edited"
}

function searchRow(id = '1') {
  const ids = sheetsObFallidos
    .getRange(2, 1, sheetsObFallidos.getLastRow() - 1, 1)
    .getValues()
    .flat()

  const index = ids.indexOf(Number(id))
  const row = index + 2;
  return row
}