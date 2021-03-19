// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// 
// this the sample code to fetch docx file with images using the mammoth npm package.
// 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
//  the output will be plain html markup , you can aply style after they being rendered .
//  the output will not contain the formating of text only bold ,  italic, underline will be visible in the output

var express = require("express");
var mammoth = require("mammoth");
var app     = express();

app.set("view engine","ejs")



app.get("/",function(req,res){

mammoth.convertToHtml({path: "sample.docx"})
    .then(function(result){
        var html = result.value; // The generated HTML
        var messages = result.messages; // Any messages, such as warnings during conversion

        // console.log(html); // seeing the output in console

        res.render("index",{html: html}); // when html mark-up is generated than sending it to the frontend
    })
    .done();



	
});

app.listen("5000",function(){
	console.log("server started....");
});
