import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

`

export default function Home() {
  return (
    <Container>
      <Title>Instalura</Title>
    </Container>
  )
}
