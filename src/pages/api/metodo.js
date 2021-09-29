export default function(req, res){
  res.status(200).json({nome: "Rodolfo", sobrenome: "Souza", metodo: req.method})
}