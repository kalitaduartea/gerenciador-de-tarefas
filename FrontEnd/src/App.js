import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import ListaDeTarefas from './components/ListaDeTarefas';
import TarefasContext from './context/TarefasContext';

function App() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const { dispatch } = useContext(TarefasContext);

  useEffect(() => {
    axios.get('http://localhost:3000/api/tarefas')
      .then(response => {
        dispatch({ type: 'SET_TAREFAS', tarefas: response.data });
      })
      .catch(error => {
        console.error('Erro ao buscar tarefas:', error);
      });
  }, [dispatch]);

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      axios.post('http://localhost:3000/api/tarefas', { nome: novaTarefa })
        .then(response => {
          dispatch({ type: 'ADICIONAR_TAREFA', tarefa: response.data });
          setNovaTarefa('');
        })
        .catch(error => {
          console.error('Erro ao adicionar tarefa:', error);
        });
    }
  };

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <input
        type="text"
        value={novaTarefa}
        onChange={e => setNovaTarefa(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <div>
        <button onClick={() => dispatch({ type: 'FILTRAR_TAREFAS', filtro: 'Todas' })}>Todas</button>
        <button onClick={() => dispatch({ type: 'FILTRAR_TAREFAS', filtro: 'Concluídas' })}>Concluídas</button>
        <button onClick={() => dispatch({ type: 'FILTRAR_TAREFAS', filtro: 'Pendentes' })}>Pendentes</button>
      </div>
      <ListaDeTarefas />
    </div>
  );
}

export default App;
