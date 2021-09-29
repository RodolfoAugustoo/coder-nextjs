import { useState } from "react";

export default function Form () {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [usuarios, setUsuarios] = useState([]);

  async function salvarUsuario() {
    await fetch("/api/form", {
      method: "post",
      body: JSON.stringify({ nome,idade }),
    });

    setIdade(0);
    setNome("");

    const resp = await fetch("/api/form");
    setUsuarios(await resp.json());
  }

  return (
    <div>
      <h1>Integração com API #02</h1>
      <div style={{ display: "flex", flexDirection: "column", width: 400 }}>
        <input
          style={{ height: 30, marginBottom: 8 }}
          type="text"
          placeholder="Digite seu nome"
          onChange={e => setNome(e.target.value)}
        />
        <input
          style={{ height: 30, marginBottom: 8 }}
          type="number"
          placeholder="Informe sua idade"
          onChange={e => setIdade(+e.target.value)}
        />
        <button
          style={{ height: 30, marginBottom: 8 }}
          onClick={salvarUsuario}
        >
          Salvar
        </button>
      </div>
      <div>
        <ul>
          {usuarios?.map((usuario, index) => (
            <li key={index}>{`${usuario.nome} tem ${usuario.idade} anos de idade`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
