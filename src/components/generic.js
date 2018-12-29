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
  margin-left: auto;
  width: 100%;
  color: white;
`

export const Center = styled(Container)`
  flex: 1;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`