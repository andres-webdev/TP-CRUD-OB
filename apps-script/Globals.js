const DB_ID = '1-VUS_wGgb9OcZMc2nq2zuldwad9mhvmxnz1lC3_Y6LA'
const SS = SpreadsheetApp.openById(DB_ID)
const sheetsObFallidos = SS.getSheetByName('TP-CRUD')

const DB_LOGIN_ID = '1t87Zgidm6s4fE5yvO7P77sXoTw8QBLtU9ouCnux_YTM'
const SSLOGIN = SpreadsheetApp.openById(DB_LOGIN_ID)
const sheetAdmins = SSLOGIN.getSheetByName('Administradores')

const DB_TIPIFICACIONES_ID = '1opjZDaBgqHjcuV1ZSX6iCu1GswVA2nw5-6n6ErlQJUE'
const SSTIPIFICACIONES = SpreadsheetApp.openById(DB_TIPIFICACIONES_ID)
const sheetsTipificaciones = SSTIPIFICACIONES.getSheetByName('Tipificaciones')

const DB_SOLICITUDES_CREDITO_ID = '1eOTj9U_v2rpn1GwobpVi7X4WQE_pIRsAt-q3SxwLwEQ'
const SSSOLICITUDES = SpreadsheetApp.openById(DB_SOLICITUDES_CREDITO_ID)
const sheetsSolicitudesCreditos = SSSOLICITUDES.getSheetByName('Solicitudes')

function validateCredentials(email, password) {

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
      const userName = dataSheetAdmins[i][4]

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
        slackUserName: userName
      }

    }
  }

  return {
    authorization: "400",
    name: null,
    email: null,
    role: null,
    slackUserName: null,
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