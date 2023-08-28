/*function doGet(e) {
  if (e.parameter.page) {
    let pageName = e.parameter.page.trim().toLowerCase()
    const html = HtmlService.createTemplateFromFile('index');
    const output = html.evaluate()

    let htmlOutput = HtmlService.createHtmlOutput(output);
    htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
      htmlOutput.setXFrameOptionsMode(HtmlService.XFFrameOptionsMode.ALLOWALL) 
    console.log(e.parameter.page)
    return output
  } else {
    const html = HtmlService.createTemplateFromFile('login');
    const output = html.evaluate()

    let htmlOutput = HtmlService.createHtmlOutput(output);
    htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
    console.log(e)
  }

    if (e.parameter.page) {
     var pageName = e.parameter.page.trim().toLowerCase();
     if (pageName !== "login") {
       var template = HtmlService.createTemplateFromFile(pageName);
       template.url = getPageUrl();
       var output = template.evaluate();
       var htmlOutput = HtmlService.createHtmlOutput(output);
       htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
       // htmlOutput.setXFrameOptionsMode(HtmlService.XFFrameOptionsMode.ALLOWALL); // Configurar opciones de encabezado X-Frame-Options
       return htmlOutput;
     } else {
       console.log("ndad - nada")
       return;
     }
   } else {
     console.log("ndad")
     return;
   } 

}*/

function doGet(e) {
  if (e.parameter.page) {
    let pageName = e.parameter.page.trim().toLowerCase();
    if (pageName !== "login") {
      let template = HtmlService.createTemplateFromFile(pageName);
      template.url = getPageUrl();
      let output = template.evaluate();
      let htmlOutput = HtmlService.createHtmlOutput(output);
      htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
      // htmlOutput.setXFrameOptionsMode(HtmlService.XFFrameOptionsMode.ALLOWALL); // Configurar opciones de encabezado X-Frame-Options
      return htmlOutput;
    } else {
      return homePage();
    }
  } else {
    return homePage();
  }
}

function homePage() {
  // var pages = ['vistatabla','vistatabla1','vistatabla2','vistatabla3','vistatabla4'];
  let pages = ['index'];

  let urls = pages.map(function (name) {
    return getPageUrl(name);
  });
  // var template = HtmlService.createTemplateFromFile("vistageneral");
  let template = HtmlService.createTemplateFromFile("login");

  template.test = urls;
  let output = template.evaluate();
  let htmlOutput = HtmlService.createHtmlOutput(output);
  htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');

  return htmlOutput;
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent()
}
