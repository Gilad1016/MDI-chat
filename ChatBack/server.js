const express = require('express');
const app = express();

//const UserController = require('./controllers/userController.js');
//const router = express.Router();
//router.get('/User', UserController);
//module.exports = router;



const users = require('./models/user');
const users_router = require('./routes/userRouter.js');

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log("Server don start for port: " + PORT))

app.use(express.json());
app.use('/api/user', users_router);
