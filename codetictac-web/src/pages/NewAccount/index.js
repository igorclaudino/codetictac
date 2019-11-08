import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  Container,
  Form,
  Title,
  Label,
  Input,
  Button,
  Link,
  Footer
} from "./styles";

import wakatimeApi from "../../services/wakatime.api";

export default function NewAccount() {
  let { state } = useLocation();
  const [email, setEmail] = useState("");
  useEffect(() => {
    const { token } = state;
    console.log(token);
    async function handleGet() {
      try {
        const response = await wakatimeApi.get("users/current", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "*/*"
          }
        });
        setEmail(response.data.email);
      } catch (err) {
        console.log(err);
      }
    }
    handleGet();
  }, []);

  return (
    <Container>
      <Title>Nova Conta</Title>
      <Form>
        <Label>Nome*</Label>
        <Input type="text" />
        <Label>E-mail*</Label>
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Label>Organização</Label>
        <Input type="text" />
        <Label>Senha*</Label>
        <Input type="password" />
        <Label>Confirmação de senha*</Label>
        <Input type="password" />
        <Button>Entrar</Button>
        <Footer>
          <Link
            href={`${process.env.REACT_APP_WAKATIME_URL}/authorize?client_id=${process.env.REACT_APP_WAKATIME_CLIENT_ID}&client_secret=${process.env.REACT_APP_WAKATIME_APP_SECRET}&redirect_uri=${process.env.REACT_APP_WAKATIME_REDIRECT_URL}&response_type=code&scope=email,read_stats`}
          >
            Ainda não tem uma conta? Crie uma já!
          </Link>
        </Footer>
      </Form>
    </Container>
  );
}
