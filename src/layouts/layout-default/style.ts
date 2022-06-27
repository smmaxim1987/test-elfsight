import styled from 'styled-components'
import { Header as HeaderOriginal, Footer as FooterOrigilan } from '../components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Main = styled.main`
  flex: 1 0 auto;
`

export const Header = styled(HeaderOriginal)`
  min-height: 40px;
`

export const Footer = styled(FooterOrigilan)`
  flex: 0 0 auto;
`