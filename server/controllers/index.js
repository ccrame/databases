var models = require('../models');
var Bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      // return new Bluebird(function(resolve, reject) {
      models.messages.get(function(arr) {
        res.end(arr);
      });
      // });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // return new Bluebird(function(resolve, reject) {
      models.messages.post(req.body);
      res.send();
      // })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      return new Bluebird(function(resolve, reject) {
        models.users.get(function(arr) {
          resolve(arr,res);
        });
      });
    },
    post: function (req, res) {
      // return new Bluebird(function(resolve, reject) {
      models.users.post(req.body);
      res.send();
      // }); // a function which handles posting a message to the database
    }
  }
};


// var func = function(){
//   return new Promise(resolve, reject){
//     async(function(err,res){
//       if(err){reject(err)}
//       else{
//         resolve(res);
//       }
//     });

//   }


// };

// 
// func().then(function(file){
//   dowhatever(file);
// }).catch(function(){});
