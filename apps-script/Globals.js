const DB_ID = '1-VUS_wGgb9OcZMc2nq2zuldwad9mhvmxnz1lC3_Y6LA'
const SS = SpreadsheetApp.openById(DB_ID)
const sheetsObFallidos = SS.getSheetByName('TP_WEB')
const sheetsUserData = SS.getSheetByName('Ingresar_Data')
const sheetsRiskData = SS.getSheetByName('Riesgo')
const sheetsTipificaciones = SS.getSheetByName('Tipificaciones')
const sheetsSolicitudesCreditos = SS.getSheetByName('Solicitudes_Evaluacion')
const sheetsRespuestaCreditos = SS.getSheetByName('Respuestas_Credito')

const DB_LOGIN_ID = '1t87Zgidm6s4fE5yvO7P77sXoTw8QBLtU9ouCnux_YTM'
const SSLOGIN = SpreadsheetApp.openById(DB_LOGIN_ID)
const sheetAdmins = SSLOGIN.getSheetByName('Administradores')

/* Data TP */
const DB_OB_CULMINADO_ID = '1JC6EkKzp-DXIOQNxTxvQ72xIAs6FXDLqigVNsvGzrEU'
const SSALLDATA = SpreadsheetApp.openById(DB_OB_CULMINADO_ID)
const sheetsObCulminadoTp = SSALLDATA.getSheetByName('OBWeb Cul - Welcome')
const sheetsObFallidoTp = SSALLDATA.getSheetByName('OB Fallido')

function validateCredentials(email, password) {

  const dataSheetAdmins = sheetAdmins.getDataRange().getDisplayValues()

  const sheetWs = SpreadsheetApp
    .openById("1t87Zgidm6s4fE5yvO7P77sXoTw8QBLtU9ouCnux_YTM")
    .getSheetByName("LoginCrud")

  const currentDate = new Date()

  let dataClient = {
    authorization: "400",
    name: "",
    email: "",
    role: "",
    slackUserName: ""
  }

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

      dataClient = {
        authorization: "200",
        name: nameUser,
        email: emailUser,
        role: roleUser,
        slackUserName: userName
      }

      break
    }
  }

  if (dataClient.authorization === "200") {
    const urlPage = ScriptApp.getService().getUrl()
    return { dataClient, urlPage }
  } else {

    const urlPage = undefined
    return { dataClient, urlPage }

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