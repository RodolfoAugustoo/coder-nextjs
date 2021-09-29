export default function metodo(req, res){
  res.status(200).json({nome: "Rodolfo", sobrenome: "Souza", metodo: req.method})
}