import {useRouter} from 'next/router'
import Link from "next/link";

export default function Rota() {
  
  const router = useRouter()

  function navegaComParams(path, queryParams){
    router.push({
      pathname:'/rotas/params',
      query:{
        id: 123,
        nome: 'Rodolfo'
      }
    })
  }

  function urlDireta(url){
    router.push(url)
  }
  
  return (
    <div>
      <h1>Rota</h1>
      <ul>
        <li>
          <Link href="/rotas/params?id=123&nome=Rodolfo">Codigo e nome</Link>
        </li>
        <li>
          <Link href="/123/codigo">Codigo</Link>
        </li>
        <li>
          <Link href="/xyz/dinamica2">Dinâmica 2</Link>
        </li>
      </ul>

      <h2>useRouter</h2>
      <ul>
        <li onClick={() => navegaComParams()}>
          <span>Params</span>
        </li>
        <li onClick={() => urlDireta("/123/codigo")}>
          <span>Codigo</span>
        </li>
        <li onClick={() => router.push("/xyz/dinamica2")}>
          <span>Dinâmica 2</span>
        </li>
      </ul>
    </div>
  );
}
