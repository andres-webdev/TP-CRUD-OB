function addUser(form) {
    const id = crearNuevoId();

    const name = form.userName
    const lastName = form.userLastName
    const phone = form.userPhone
    const dni = form.userDni
    const cod = form.userCod
    const referent = form.userReferent
    const dateOfFirstContact = form.userDateOfFirstContact
    const statusWeb = form.userStatusWeb
    const country = form.userCountry
    const product = form.userProduct
    const statusRisk = form.userStatusRisk
  
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
  
  function crearNuevoId(){
    let id = 1;
    if(sheetsObFallidos.getLastRow() === 1){
      return id
    }
  
    const ids = sheetsObFallidos.getRange(2,1,sheetsObFallidos.getLastRow()-1,1).getValues().map(id => id[0]);
  
   
    let maxId = 0;
  
    ids.forEach(id => {
      if(id > maxId){
        maxId = id;
      }
    });
  
    return maxId + 1
  }