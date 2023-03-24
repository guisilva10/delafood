import { Sidebar } from '../../components/Sidebar'

import { Outlet } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'

import { Container } from './styles'

export default function Main() {
  return (
    <Container>
      <Sidebar/>
      <section>
        <img src={logoImg} />
        <Outlet />
      </section>
    </Container>      
  )
}
