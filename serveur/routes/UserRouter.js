const express = require('express');
const UserRouter = express.Router();
const UserController = require("../controllers/UserController"); 


UserRouter.post("/Api/login", UserController.sign);
UserRouter.get("/Api/checkToken", UserController.checkToken);

module.exports = UserRouter;
