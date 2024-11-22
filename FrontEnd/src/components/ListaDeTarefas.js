import React, { useContext } from 'react';
import Tarefas from './Tarefas';
import TarefasContext from '../context/TarefasContext';

function ListaDeTarefas() {
  const { state } = useContext(TarefasContext);
  const { tarefas, filtro } = state;

  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === 'Todas') return true;
    if (filtro === 'Concluídas') return tarefa.concluida;
    if (filtro === 'Pendentes') return !tarefa.concluida;
    return true;
  });

  return (
    <ul>
      {tarefasFiltradas.map(tarefa => (
        <Tarefas key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}

export default ListaDeTarefas;
