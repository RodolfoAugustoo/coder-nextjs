import Link from "next/link"

export default function Rota() {

  return (
    <div>
      <h1>Rota</h1>

      <ul>
        <li>
          <Link href='/params/codigo=123&nome=Rodolfo'>
            Codigo e nome
          </Link>
        </li>
        <li>
          <Link href='/123/codigo'>
            Codigo
          </Link>
        </li>
        <li>
          <Link href='/xyz/dinamica2'>
            Dinâmica 2
          </Link>
        </li>
      </ul>
    </div>
  )
}