import { useState } from "react";
import "../styles/ListaTarefas.css";

const ListaTarefas = () => {
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [novaTarefa, setNovaTarefa] = useState<string>("");
  const [tarefasConcluidas, setTarefasConcluidas] = useState<boolean[]>(
    Array(tarefas.length).fill(false)
  );

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa("");
    }
  };

  const limparTarefas = () => {
    setTarefas([]);
  };

  const removerTarefa = (index: number) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  const marcarTarefaFeita = (index: number) => {
    const novasConcluidas = [...tarefasConcluidas];
    novasConcluidas[index] = !novasConcluidas[index];
    setTarefasConcluidas(novasConcluidas);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      adicionarTarefa();
    }
  };
  return (
    <div className="lista-tarefas-conteiner">
      <h3>Lista de tarefas</h3>
      <input
        className="input-tarefa"
        type="text"
        value={novaTarefa}
        onChange={(event) => setNovaTarefa(event.target.value)}
        placeholder="Digite sua tarefa"
        onKeyDown={handleKeyDown}
      />
      <button onClick={adicionarTarefa} className="btt-add-tarefa">
        Adicionar tarefa
      </button>
      <button onClick={limparTarefas} className="btt-del-tarefa">
        Remover Todas
      </button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li
            key={index}
            onClick={() => marcarTarefaFeita(index)}
            style={{
              textDecoration: tarefasConcluidas[index]
                ? "line-through"
                : "none",
              cursor: "pointer",
            }}
          >
            {tarefa}
            <button
              onClick={() => removerTarefa(index)}
              className="bbt-remover-tarefa"
            >
              Remover
            </button>
            <button
              onClick={() => marcarTarefaFeita}
              className="btt-tarefas-concluida"
            >
              Marcar como feita
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
