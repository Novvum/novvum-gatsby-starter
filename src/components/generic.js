import React from 'react'
import Typing from 'react-typing-animation'
import { Terminal } from './terminal'
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
  padding: ${p => (p.np ? '0 15px 0 15px' : '2.5rem')};
  justify-content: center;
`

export const Caption = styled.p`
  color: ${p => p.theme.colors.white60};
`

export const TerminalType = ({ items, children }) => {
  return (
    <GridItem white np>
      <Terminal height="300px">
        <GridItem>
          <Typing>
            <pre>{children}</pre>
            {items.map((item, i) => (
              <pre key={item}>
                <Typing.Delay ms={1000 + i * 100} />
                {item}
              </pre>
            ))}
          </Typing>
        </GridItem>
      </Terminal>
    </GridItem>
  )
}
