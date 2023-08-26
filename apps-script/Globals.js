const DB_ID = '1-VUS_wGgb9OcZMc2nq2zuldwad9mhvmxnz1lC3_Y6LA'
const SS = SpreadsheetApp.openById(DB_ID)
const sheetsObFallidos = SS.getSheetByName('TP-CRUD')

const DB_TIPIFICACIONES_ID = '1opjZDaBgqHjcuV1ZSX6iCu1GswVA2nw5-6n6ErlQJUE'
const SSTIPIFICACIONES = SpreadsheetApp.openById(DB_TIPIFICACIONES_ID)
const sheetsTipificaciones = SSTIPIFICACIONES.getSheetByName('Tipificaciones')

function validateCredentials(email, password) {
  const sheetAdmins = SpreadsheetApp
    .openById("1t87Zgidm6s4fE5yvO7P77sXoTw8QBLtU9ouCnux_YTM")
    .getSheetByName("Administradores")

  const dataSheetAdmins = sheetAdmins.getDataRange().getDisplayValues()

  const sheetWs = SpreadsheetApp
    .openById("1t87Zgidm6s4fE5yvO7P77sXoTw8QBLtU9ouCnux_YTM")
    .getSheetByName("LoginCrud")

  const currentDate = new Date()

  for (let i = 0; i < dataSheetAdmins.length; i++) {
    if (dataSheetAdmins[i][1] === email && dataSheetAdmins[i][2] === password) {
      const nameUser = dataSheetAdmins[i][0]
      const emailUser = dataSheetAdmins[i][1]
      const roleUser = dataSheetAdmins[i][3]

      sheetWs.appendRow([
        `${emailUser}`,
        nameUser,
        currentDate.toLocaleDateString(),
        currentDate.toLocaleTimeString(),
        roleUser
      ])

      return {
        authorization: "200",
        name: nameUser,
        email: emailUser,
        role: roleUser,
      }

    }
  }

  return {
    authorization: "400",
    name: null,
    email: null,
    role: null
  }

}

function getPageUrl(name) {
  if (name) {
    const urlPage = ScriptApp.getService().getUrl()
    return urlPage + "?page=" + name
  } else {
    return ScriptApp.getService().getUrl()
  }
}