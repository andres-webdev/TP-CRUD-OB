function addUser(form) {
  const id = crearNuevoId();

  const name = returnNullValue(form.userName)
  const lastName = returnNullValue(form.userLastName)
  const phone = returnNullValue(form.userPhone)
  const dni = returnNullValue(form.userDni)
  const cod = returnNullValue(form.userCod)
  const referent = returnNullValue(form.userReferent)
  const dateOfFirstContact = userDateCreation()
  const statusWeb = returnNullValue(form.userStatusWeb)
  const country = returnNullValue(form.userCountry)
  const product = returnNullValue(form.userProduct)
  const statusRisk = returnNullValue(form.userStatusRisk)

  sheetsObFallidos.appendRow([
    id,
    country,
    name,
    lastName,
    phone,
    dni,
    cod,
    referent,
    dateOfFirstContact,
    statusWeb,
    product,
    statusRisk
  ]);

  return "User created"

}

function crearNuevoId() {
  let id = 1;
  if (sheetsObFallidos.getLastRow() === 1) {
    return id
  }

  const ids = sheetsObFallidos.getRange(2, 1, sheetsObFallidos.getLastRow() - 1, 1).getValues().map(id => id[0]);


  let maxId = 0;

  ids.forEach(id => {
    if (id > maxId) {
      maxId = id;
    }
  });

  return maxId + 1
}

function returnNullValue(value) {
  return value.length > 0 ? value : 'NULL'
}

function userDateCreation() {

  const date = new Date()

  const month = date.getMonth() <= 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1

  const day = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate()

  return `${date.getFullYear()}-${month}-${day}`
}