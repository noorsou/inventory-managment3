const express = require('express');
const UserRouter = express.Router();
const UserController = require("../controllers/UserController"); 


UserRouter.post("/Api/login", UserController.login);
UserRouter.post("/Api/getuserbyemail", UserController.getuserbyemail);
UserRouter.post("/Api/sign", UserController.signup);
//UserRouter.get("/Api/checkToken", UserController.checkToken);
module.exports = UserRouter;
