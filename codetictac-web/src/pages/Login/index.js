import React from "react";

import { FaCode, FaRegClock } from "react-icons/fa";

import {
  Container,
  Form,
  Title,
  Label,
  Input,
  Button,
  Link,
  Footer,
  Header
} from "./styles";

export default function Login() {
  return (
    <Container>
      <Title>CodeTicTac</Title>
      <Header>
        <FaRegClock size={30} />
        <FaCode size={30} />
      </Header>
      <Form>
        <Label>E-mail</Label>
        <Input type="email" />
        <Label>Senha</Label>
        <Input type="password" />
        <Button
          onClick={e => {
            e.preventDefault();
            console.log("FUNFA");
          }}
        >
          Entrar
        </Button>
        <Footer>
          <Link
            href={`${process.env.REACT_APP_WAKATIME_OAUTH_URL}/authorize?client_id=${process.env.REACT_APP_WAKATIME_CLIENT_ID}&client_secret=${process.env.REACT_APP_WAKATIME_APP_SECRET}&redirect_uri=${process.env.REACT_APP_WAKATIME_REDIRECT_URL}&response_type=code&scope=email,read_stats`}
          >
            Ainda não tem uma conta? Crie uma já!
          </Link>
        </Footer>
      </Form>
    </Container>
  );
}
