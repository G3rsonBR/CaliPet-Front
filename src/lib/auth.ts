import { useEffect } from 'react';

const useAuth = () => {
  const isAuthenticated = true;

  const data = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    localStorage.setItem('isAuthenticated', 'true');
  }, []);

  const toggleAuth = () => {
    // não faz nada
  };

  return { isAuthenticated, toggleAuth, data };
};

export default useAuth;
