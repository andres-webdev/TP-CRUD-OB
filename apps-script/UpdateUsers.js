function editUser(form) {
    const fila = searchRow(form.userId);
    
    sheetsObFallidos.getRange(fila,2,1,sheetsObFallidos.getLastColumn()-1).setValues([[
      form.userName,
      form.userLastName,
      form.userDateOfBirth,
      form.userPhone,
      form.userSex,
      form.userEmail
    ]])
  
    return "User Edited"
  }
  
  function searchRow(id='3'){
    const ids = sheetsObFallidos.getRange(2,1, sheetsObFallidos.getLastRow()-1, 1).getValues().map(id => id[0])
  
    console.log(ids)
  
    const index = ids.indexOf(Number(id))
    const row = index + 2;
    return row
  }