import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const apiUser = 'http://ride.francecentral.cloudapp.azure.com:8000/api/.user/user';

type User = {
  id: number;
  email: string;
  roles: [];
};

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    let token = null;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
      if (!token) {
        logout();
      }
      setToken(token);
    }
    axios
      .get(apiUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const user = res.data;
        setUser(user);
        setIsAuthenticated(true);
        setIsAdmin(user?.roles?.includes('ROLE_ADMIN'));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return {
    isAuthenticated,
    isAdmin,
    user,
    isLoading,
    token,
  };
};
export default useAuth;
