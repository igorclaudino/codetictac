import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import api from "../../services/api";

// import { Container } from './styles';

export default function Success() {
  let { search } = useLocation();
  let history = useHistory();
  useEffect(() => {
    const values = queryString.parse(search);
    const { code } = values;
    async function makePost() {
      const response = await api.post("/users", { code });
      history.push("new-account", { token: response.data.token });
    }
    makePost();
  });
  return (
    <div>
      <h1>Success!</h1>
    </div>
  );
}
