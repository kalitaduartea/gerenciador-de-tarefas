const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasks");

router.get("/tarefas", tasksController.getTarefas);
router.post("/tarefas", tasksController.adicionarTarefa);
router.put("/tarefas/:id", tasksController.marcarTarefa);

module.exports = router;
