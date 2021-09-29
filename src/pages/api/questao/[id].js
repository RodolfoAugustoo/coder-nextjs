export default function (req, res) {
  if (req.method === "GET") get(req, res);
  else res.status(405).send();
}

function get(req, res) {
  const id = req.query.id

  res.status(200).json({
    id,
    enunciado: "Qual sua cor favorita?",
    respostas: [
      "Vermelho", "Verde", "Azul"
    ]
  })
}
