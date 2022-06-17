const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

//const UserController = require('./controllers/userController.js');
//const router = express.Router();
//router.get('/User', UserController);
//module.exports = router;

const users_router = require('./routes/userRouter.js');
const auth_router = require('./routes/authRouter.js');

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log("Server don start for port: " + PORT))

app.use(express.json());
app.use('/api/auth', auth_router);
app.use('/api/user', users_router);
