const express = require('express');
const UserController = require('./controllers/userController.js');
const router = express.Router();
router.get('/User', UserController);
module.exports = router;

const app = express();
const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log("Server don start for port: " + PORT))