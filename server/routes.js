var controllers = require('./controllers');
var router = require('express').Router();

for (var route in controllers) {
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

// for (var route in controllers) {
//   router.route("/" + route)
//     .get(function(req, res)  {
//       controllers[route].get(req, res).then(function(arr, res) {
//         res.writeHead(200);
//         res.send(JSON.stringify(arr));
//       });
//     })
//     .post(function(req, res  ) {
//       controllers[route].post(req, res).then(function(res) {
//         res.writeHead(201);
//         res.send();
//       });
//     });
// }

module.exports = router;

