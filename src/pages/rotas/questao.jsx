import { useEffect, useState } from "react";

export default function Questao() {
  const [questao, setQuestao] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/questao/123")
      .then((res) => res.json())
      .then(setQuestao);
  }, []);

  return (
    <div>
      <h1>{`${questao?.id} - ${questao?.enunciado}`}</h1>
      <div>
        <ul>
          {questao?.respostas.map((resposta, index) => (
            <li key={index}>{resposta}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
