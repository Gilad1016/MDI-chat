var mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "gilad",
  password: "Aa123456!",
  database: "chat"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

function getUserChats(userId, callback) {
  con.query("SELECT * FROM chats WHERE user_id = ?", [userId], function (err, result, fields) {
    if (err) throw err;
    callback(result);
  });
}

function getUserChat(userId, chatId, callback) {
    con.query("SELECT * FROM chats WHERE user_id = ? AND chatId = ?", [userId],[chatId], function (err, result, fields) {
      if (err) throw err;
      callback(result);
    });
  }