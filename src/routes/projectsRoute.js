const express = require('express');
const router = express.Router();
const projectsController = require("../controllers/projectsController")

router.post("/", projectsController.createProject);
router.get("/", projectsController.getProject);
router.delete("/:id", projectsController.deleteProject);

module.exports = router;