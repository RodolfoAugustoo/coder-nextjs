import { useRouter } from 'next/router'

const CodigoComNome = () => {

  const router = useRouter()

  const codigo = router.query.codigo
  const nome = router.query.nome

  return (
    <div>
      <h1>
        Codigo: {codigo}
      </h1>
      <h2>Nome: {nome}</h2>
    </div>
  )
}

export default CodigoComNome