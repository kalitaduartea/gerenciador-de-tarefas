import React, { useContext } from 'react';
import axios from 'axios';
import TarefasContext from '../context/TarefasContext';

function Tarefas({ tarefa }) {
  const { dispatch } = useContext(TarefasContext);

  const marcarTarefa = () => {
    axios.put(`http://localhost:3000/api/tarefas/${tarefa.id}`)
      .then(response => {
        dispatch({ type: 'MARCAR_TAREFA', tarefa: response.data });
      })
      .catch(error => {
        console.error('Erro ao marcar tarefa:', error);
      });
  };

  return (
    <li onClick={marcarTarefa} style={{ cursor: 'pointer' }}>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => {}}
      />
      <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
        {tarefa.nome}
      </span>
    </li>
  );
}

export default Tarefas;