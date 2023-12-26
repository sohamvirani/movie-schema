const express = require("express");
const validate = require("../middlewares/validate");
const { userController } = require("../controllers");
const { userValidation } = require("../validation");


const route = express.Router();

route.get("/get", userController.getuser);
route.post("/add", userController.adduser);
route.delete("/delete/:id", userController.deleteuser);
route.put("/update/:id",userController.updateuser);


module.exports = route;