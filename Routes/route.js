const controller =  require("../Controllers/controller")
const express = require('express');



const router = express.Router();

router.get("/", controller.getController)

router.post("/", controller.postController)

router.delete("/delete/:id", controller.deleteController)

router.put("/edit/:id", controller.editController)



module.exports = router;