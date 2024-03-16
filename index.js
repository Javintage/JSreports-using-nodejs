// Stimulsoft dashboards module
const express = require('express')
const app=express()

app.get('/', function(req,res){
    res.send("dowmload successful")
})
var Stimulsoft = require('stimulsoft-dashboards-js');
console.log("Stimulsoft dashboards loaded");

// Creating new dashboard
var report = Stimulsoft.Report.StiReport.createNewDashboard();
console.log("New dashboard created");

// Loading dashboard template
report.loadFile("dashboard.mrt");
console.log("Dashboard template loaded");

// Export to PDF
report.exportDocumentAsync((pdfData) => {
    // Converting Array into buffer
    var buffer = Buffer.from(pdfData);

    // File System module
    var fs = require('fs');

    // Saving string with rendered dashboard in PDF into a file
    fs.writeFileSync('./Dashboard.pdf', buffer);
    console.log("Dashboard saved into PDF-file.");
}, Stimulsoft.Report.StiExportFormat.Pdf);


app.listen(3001)