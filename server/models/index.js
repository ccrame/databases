var db = require('../db');




module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (cb) {
      var arr = [];
      // db.dbConnection.connect();
      db.dbConnection.query('select * from messages', [], function(err,rows){
        if(err){throw err;}
        for(var i in rows){
          arr.push(rows[i]);
        }
        cb(arr);
      });
      // db.dbConnection.end();
    },
    // a function which can be used to insert a message into the database
    post: function (obj) { // if time, fix to return proper error
      // db.dbConnection.connect(); 
      db.dbConnection.query('insert into messages set?', obj, function(err, result){
        if(err){console.log('error posting');}
      });
      // db.dbConnection.end();
    } 
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      var arr = [];
      // db.dbConnection.connect();
      db.dbConnection.query('select * from users', [], function(err,rows){
        if(err){throw err;}
        for(var i in rows){
          arr.push(rows[i]);
        }
        cb(arr);
      });
      // db.dbConnection.end();
    },
    post: function (obj) {
      // db.dbConnection.connect();
      db.dbConnection.query('insert into users set?', obj, function(err, result){
        if(err){console.log('duplicate user!');}
      });
      // db.dbConnection.end();
    }
  }
};

