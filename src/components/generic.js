import { styled } from '../styled'

export const Container = styled.div`
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  color: ${p => (p.white ? 'white' : 'inherit')};
  margin-left: auto;
  width: 100%;
`

export const GridItem = styled(Container)`
  flex: 1;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 2.5rem;
  justify-content: center;
`

export const Caption = styled.p`
  color: ${p => p.theme.colors.white60};
`
