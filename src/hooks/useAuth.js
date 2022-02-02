import { useEffect, useState } from 'react';
import api from '../api/api';

export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [unAuth, setUnAuth] = useState(false);

  useEffect(() => {
    const tokenHash = localStorage.getItem('token');

    if (tokenHash) {
      api.defaults.headers.authorization = `Bearer ${JSON.parse(tokenHash)}`;
      setAuthenticated(true);
    }
  }, []);

  async function handleLogin({ username, password }) {
    api.post(
      '/login',
      {
        username, password,
      },
    ).then(async (response) => {
      localStorage.setItem('token', JSON.stringify(response.data.token));
      window.location.href = 'http://localhost:3000/blog/gerenciamento';
    }).catch(() => {
      setUnAuth(true);
    });
  }

  return { authenticated, handleLogin, unAuth };
}
