// Start Express
var express = require("express");
var app = express();
var http = require('http');
var jade = require('jade');


// Set the view directory to /views
app.set("views", __dirname + "/views");

app.engine('html', require('jade').__express);

app.set("view engine", "jade");

// Define "index" route
app.get("/", function(request, response) {
  response.render("index");
});

// app.use(express.bodyParser());
// app.post('/', function(request, response){
// 	var Stores = getData();
//     Stores = request.body;  
//     Store_info.doSearch(Stores,function(err,items) {
//        response.send(items);
//    });
// });

// function getData() {
//     http.get({ host: 'www.streethub.com', port: 80, path: '/api/challenge' },   function(response) {

//         var data = "";
//         response.on('data', function(chunk) {
//             data += chunk;
//         });

//         response.on('end', function() {
//             var obj = JSON && JSON.parse(data) || $.parseJSON(data);
//             // for(i=0; i<19; i++) {
//             // 	var Name = obj.response.data[i].name;
            	
//             // }
//             console.log('getData fonction on the server');
//             return obj.response.data[0].name;
//             // console.log("Type of obj.response: " + typeof(obj.response));
//             // console.log("Type of obj.response.data: " + typeof(obj.response.data));
//             // console.log("Type of obj.response.data[0]: " + typeof(obj.response.data[0]));
//             // console.log("Type of obj.response.data[0].name: " + typeof(obj.response.data[0].name));
//         });
//     });
// }



// Start the server
app.listen(1337);

