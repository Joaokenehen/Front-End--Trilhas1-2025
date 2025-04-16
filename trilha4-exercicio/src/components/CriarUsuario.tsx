import { useState } from "react";

const CriarUsuario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário.");
      }

      const data = await response.json();
      console.log("Usuário criado:", data);

      setMessage("Usuário cadastrado com sucesso!");
      setName("");
      setEmail("");
    } catch {
      setMessage("Erro ao cadastrar o usuário.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Cadastrar Novo Usuário</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", marginRight: "10px", fontSize: "16px" }}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "8px", marginRight: "10px", fontSize: "16px" }}
        />
        <button type="submit" style={{ padding: "8px 20px", fontSize: "16px" }}>
          Cadastrar
        </button>
      </form>

      {message && (
        <p
          style={{
            marginTop: "20px",
            color: message.includes("sucesso") ? "green" : "red",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default CriarUsuario;
