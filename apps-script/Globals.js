const DB_ID = '1-VUS_wGgb9OcZMc2nq2zuldwad9mhvmxnz1lC3_Y6LA'
const SS = SpreadsheetApp.openById(DB_ID)
const sheetsObFallidos = SS.getSheetByName('TP-CRUD')

const DB_TIPIFICACIONES_ID = '1opjZDaBgqHjcuV1ZSX6iCu1GswVA2nw5-6n6ErlQJUE'
const SSTIPIFICACIONES = SpreadsheetApp.openById(DB_TIPIFICACIONES_ID)
const sheetsTipificaciones = SSTIPIFICACIONES.getSheetByName('Tipificaciones')