function editUser(form) {
  const fila = searchRow(form.userId);

  sheetsObFallidos.getRange(fila, 2, 1, sheetsObFallidos.getLastColumn() - 1).setValues([[
    form.userCountry,
    form.userName,
    form.userLastName,
    form.userPhone,
    form.userDni,
    form.userCod,
    form.userReferent,
    form.userDateOfFirstContact,
    form.userStatusWeb,
    form.userProduct,
    form.userStatusRisk
  ]])

  return "User Edited"
}

function searchRow(id = '1') {
  const ids = sheetsObFallidos.getRange(2, 1, sheetsObFallidos.getLastRow() - 1, 1).getValues().map(id => id[0])

  const index = ids.indexOf(Number(id))
  const row = index + 2;
  return row
}