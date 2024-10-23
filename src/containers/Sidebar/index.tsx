import Paragrafo from '../../components/paragrafo'
import Titulo from '../../components/Titulo'
import Avatar from '../Avatar'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>João Gustavo</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        jgustavo7
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
