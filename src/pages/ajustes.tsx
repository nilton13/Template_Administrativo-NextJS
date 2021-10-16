import Layout from '../components/template/Layout'
import useAppData from '../data/hook/UseAppData'

export default function Ajustes() {
  const { tema, alternarTema} = useAppData()

  return (
    <Layout titulo="Ajustes" 
      subtitulo="Página de ajustes!">
        <button onClick={alternarTema}>Alternar Tema</button>
    </Layout>
  )
}
