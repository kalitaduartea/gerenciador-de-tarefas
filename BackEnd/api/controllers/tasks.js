let tarefas = [];

exports.getTarefas = (req, res) => {
  res.json(tarefas);
};

exports.adicionarTarefa = (req, res) => {
  const novaTarefa = { id: Date.now(), nome: req.body.nome, concluida: false };
  tarefas.push(novaTarefa);
  res.json(novaTarefa);
};

exports.marcarTarefa = (req, res) => {
  const tarefaId = parseInt(req.params.id);
  const tarefa = tarefas.find((t) => t.id === tarefaId);
  if (tarefa) {
    tarefa.concluida = !tarefa.concluida;
    res.json(tarefa);
  } else {
    res.status(404).json({ message: "Tarefa não encontrada" });
  }
};
