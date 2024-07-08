import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState();
  const [products, setProducts] = useState();
  const [menproducts, setMenProducts] = useState();
  const [womenproducts, setWomenProducts] = useState();
  const authorizationToken = `Bearer ${token}`;

  // const API = import.meta.env.VITE_APP_URI_API;
  const API = import.meta.env.VITE_APP_URI_API;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // const storeTokenInLS = (serverToken, userEmail) => {
  //   setToken(serverToken);
  //   localStorage.setItem("token", serverToken);
  //   localStorage.setItem("userEmail", userEmail); // Store user's email
  // };

  // let isLoggedIn = !!token;
  // const LogoutUser = () => {
  //   setToken("");
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("userEmail"); // Remove user's email
  // };

  const userAuthentication = async () => {
    try {
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      }
    } catch (error) {
      console.log(`Error in Fetching data from DB : ${error}`);
    }
  };

  const getProducts = async () => {
    try {
      const response = await fetch(`${API}/api/data/product`, {
        method: "GET",
      });

      // console.log(response);

      if (response.ok) {
        const data = await response.json();
        setProducts(data.message);
      }
    } catch (error) {
      console.log(`Products : ${error}`);
    }
  };

  const getMenProducts = async () => {
    try {
      const response = await fetch(`${API}/api/data/menproduct`, {
        method: "GET",
      });

      // console.log(response);

      if (response.ok) {
        const data = await response.json();
        setMenProducts(data.message);
      }
    } catch (error) {
      console.log(`Men Products : ${error}`);
    }
  };

  const getWomenProducts = async () => {
    try {
      const response = await fetch(`${API}/api/data/womenproduct`, {
        method: "GET",
      });

      // console.log(response);

      if (response.ok) {
        const data = await response.json();
        setWomenProducts(data.message);
      }
    } catch (error) {
      console.log(`Men Products : ${error}`);
    }
  };

  useEffect(() => {
    getProducts();
    getMenProducts();
    getWomenProducts();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        LogoutUser,
        storeTokenInLS,
        user,
        products,
        menproducts,
        womenproducts,
        authorizationToken,
        API,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
