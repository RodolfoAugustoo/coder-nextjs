import { useRouter } from 'next/router'

const Dinamica = () => {

  const router = useRouter()

  const codigo = router.query.codigo

  return (
    <div>
      <h1>
        Rota dinâmica codigo: {codigo}
      </h1>
    </div>
  )
}

export default Dinamica