import { A, H3, Li } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <Li>
    <H3>{props.titulo}</H3>
    <ul>
      <Li>Localizacao: {props.localizacao}</Li>
      <Li>Senioridade: {props.nivel}</Li>
      <Li>Tipo de contratacao: {props.modalidade}</Li>
      <Li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </Li>
      <Li>Requisitos: {props.requisitos.join(', ')}</Li>
    </ul>
    <A href="#">Ver detalhes e candidatar-se</A>
  </Li>
)

export default Vaga
