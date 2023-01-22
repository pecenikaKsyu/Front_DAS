

var express = require('express');
var app = express()

app.use(express.static('src'));

var server = app.listen(8000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Express app listening at http://%s:%s', host, port)
})


// const options = {
//     host: 'localhost:8080',
//     path: '/employe-api/public/UpdateProgress',
//     method: 'PUT',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json; charset=UTF-8'
//       }
// };


// const request = https.request(options, (res) => {
//     if (res.statusCode !== 201) {
//       console.error(`Did not get a Created from the server. Code: ${res.statusCode}`);
//       res.resume();
//       return;
//     }
  
//     let data = '';
  
//     res.on('data', (chunk) => {
//       data += chunk;
//     });
  
//     res.on('close', () => {
//       console.log('Added new user');
//       console.log(JSON.parse(data));
//     });
// });

// const requestData = {
//     "userID"    : 1,
//     "courseID"  : 1,
//     "progress"  : 10
//   };

// request.write(KSON.stringify(requestData))

// request.end();

// request.on('error', (err) => {
//   console.error(`Encountered an error trying to make a request: ${err.message}`);
// });