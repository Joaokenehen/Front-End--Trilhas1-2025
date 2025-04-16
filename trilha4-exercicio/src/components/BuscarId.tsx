import { useState } from "react";

interface User {
  nome: string;
  email: string;
}

const BuscarId = () => {
  const [id, setId] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const buscarUsuario = async () => {
    setError(null);
    setUser(null);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      if (!response.ok) {
        throw new Error("Usuário não encontrado");
      }

      const data = await response.json();
      setUser({ nome: data.name, email: data.email });
    } catch {
      setError("Usuário não encontrado ou erro na requisição");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Buscar Usuário por ID</h2>
      <input
        type="text"
        value={id}
        placeholder="Digite o ID do usuário"
        onChange={(e) => setId(e.target.value)}
        style={{ padding: "8px", marginRight: "10px", fontSize: "16px" }}
      />
      <button
        onClick={buscarUsuario}
        style={{ padding: "8px 20px", fontSize: "16px" }}
      >
        Buscar
      </button>

      {user && (
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Nome:</strong> {user.nome}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      )}

      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}
    </div>
  );
};

export default BuscarId;
