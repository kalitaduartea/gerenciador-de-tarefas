import React, { createContext, useReducer } from 'react';

const TarefasContext = createContext();

const initialState = {
  tarefas: [],
  filtro: 'Todas'
};

function tarefasReducer(state, action) {
  switch (action.type) {
    case 'SET_TAREFAS':
      return {
        ...state,
        tarefas: action.tarefas
      };
    case 'ADICIONAR_TAREFA':
      return {
        ...state,
        tarefas: [...state.tarefas, action.tarefa]
      };
    case 'MARCAR_TAREFA':
      return {
        ...state,
        tarefas: state.tarefas.map(tarefa =>
          tarefa.id === action.tarefa.id ? action.tarefa : tarefa
        )
      };
    case 'FILTRAR_TAREFAS':
      return {
        ...state,
        filtro: action.filtro
      };
    default:
      return state;
  }
}

export function TarefasProvider({ children }) {
  const [state, dispatch] = useReducer(tarefasReducer, initialState);

  return (
    <TarefasContext.Provider value={{ state, dispatch }}>
      {children}
    </TarefasContext.Provider>
  );
}

export default TarefasContext;