import styled from "styled-components";
import Menu from '../src/components/commons/Menu'

const colorText = "red";

const Title = styled.h1`
  font-size: 50px;
  color: ${colorText};
`;

export default function Home() {
  return (
    <div>
      <Menu>
        <Title>InstAlura</Title>
      </Menu>
    </div>
  );
}
