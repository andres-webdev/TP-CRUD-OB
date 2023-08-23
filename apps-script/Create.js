// Add client to the sheets of OB - Fallidos
function addUser(form) {
  const id = createId(sheetsObFallidos);

  const name = returnNullValue(form.userName)
  const lastName = returnNullValue(form.userLastName)
  const phone = returnNullValue(form.userPhone)
  const dni = returnNullValue(form.userDni)
  const cod = returnNullValue(form.userCod)
  const referent = returnNullValue(form.userReferent)
  const dateOfFirstContact = currentDate()
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

// Create a nuevo ID para el usuario y poder mapearlo
function createId(sheets) {
  let id = 1;
  if (sheets.getLastRow() === 1) {
    return id
  }

  const ids = sheets.getRange(2, 1, sheets.getLastRow() - 1, 1).getValues().map(id => id[0]);

  let maxId = 0;

  ids.forEach(id => {
    if (id > maxId) {
      maxId = id;
    }
  });

  return maxId + 1
}

// Retorna un string con el valor de Null si el string esta vacio
function returnNullValue(value) {
  return value.length > 0 ? value : 'NULL'
}

// Devuelve la fecha actual
function currentDate() {

  const date = new Date()

  const month = date.getMonth() <= 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1

  const day = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate()

  return `${date.getFullYear()}-${month}-${day}`
}

// Devuelve la hora actual
function currentHour() {
  const date = new Date()

  const minutes = () => {

    if (date.getMinutes() <= 9) {
      return `0${date.getMinutes()}`;
    } else {
      return date.getMinutes();
    }
  }

  return `${date.getHours() - 1}:${minutes()}`
}

// Funciones para las tipificaciones
// Añade la tipificacion que se regitro en el formulario en el sheets de Tipificaciones
function addComentsCall(form) {

  const id = createId(sheetsTipificaciones);
  const viaOfCall = returnNullValue(form.callViaOfCalling);
  const phoneClient = returnNullValue(form.clientPhone);
  const dateOfContact = returnNullValue(currentDate());
  const hourOfCall = returnNullValue(currentHour());
  const resultOfTheCall = returnNullValue(form.callResults);
  const comments = returnNullValue(form.callComentsOfCalling);
  const reasonToNotAfiliated = returnNullValue(form.callReasonToNotAfiliate);
  const agent = returnNullValue(form.callAgentName);
  const clientStatus = returnNullValue(form.callStatusClient);

  sheetsTipificaciones.appendRow([
    id,
    viaOfCall,
    phoneClient,
    dateOfContact,
    hourOfCall,
    resultOfTheCall,
    comments,
    clientStatus,
    reasonToNotAfiliated,
    agent
  ]);

  return "Added coments call"

}