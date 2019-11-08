import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Container, Form, Title, Label, Input, Button } from "./styles";

export default function NewAccount() {
  let { state } = useLocation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [organization, setOrganization] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  useEffect(() => {
    const { token, name, email } = state;
    setEmail(email);
    setName(name);
    setToken(token);
  }, []);

  return (
    <Container>
      <Title>Nova Conta</Title>
      <Form>
        <Label>Nome*</Label>
        <Input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Label>E-mail*</Label>
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Label>Organização</Label>
        <Input
          type="text"
          value={organization}
          onChange={e => setOrganization(e.target.value)}
        />
        <Label>Senha*</Label>
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Label>Confirmação de senha*</Label>
        <Input
          type="password"
          value={confirmationPassword}
          onChange={e => setConfirmationPassword(e.target.value)}
        />
        <Button>Finalizar</Button>
      </Form>
    </Container>
  );
}
