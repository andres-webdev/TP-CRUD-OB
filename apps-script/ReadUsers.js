function readUsers() {
    const userData = sheetsObFallidos.getDataRange().getDisplayValues();
    userData.shift();
    if(userData.length === 0){
      return "No hay registros para mostrar"
    }
    return userData
  }
  