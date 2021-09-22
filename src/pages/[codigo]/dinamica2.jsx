import { useRouter } from 'next/router'

const Dinamica = () => {

  const router = useRouter()

  const codigo = router.query.codigo

  return (
    <div>
      <h1>
        Dinâmica #02 codigo: {codigo}
      </h1>
    </div>
  )
}

export default Dinamica