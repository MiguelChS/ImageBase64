var fs = require('fs');

function base64_encode(file,callBack) {
    // read binary data
    fs.readFile(file,(err,data)=>{
    	if(err) throw err;
    	callBack(data)
    });
}

function escribir(pString){
	fs.writeFile('base64.txt',pString,(err)=>{
		if(err) throw err;
		console.log("success");
	});
}

function convertir(){
	var fileUrl = "C:/Users/mc185249/Downloads/tinified/BackGorund6.jpg";
	base64_encode(fileUrl,(data) =>{
		escribir(data.toString('base64'));
	});
}

convertir();