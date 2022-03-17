import React, { useEffect, useState } from 'react'
import DetallePokemon from '../components/DetallePokemon'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../containers/App';
import Login from '../components/Login';
import FavsPokemon from '../components/FavsPokemon';
import Search from '../components/Search';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, []);
  if (checking) {
    return <h1>Espere...</h1>;
  }

  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route
            path="/login"
            element={
              <PublicRoutes isAuthenticated={isLoggedIn}>
                <Login/>
              </PublicRoutes>
            }
          />



          <Route
            path="/favoritos"
            element={
              <PrivateRoutes isAuthenticated={isLoggedIn}>
               <FavsPokemon/>
              </PrivateRoutes>
            }
          />


<Route
            path="/"
            element={
              <PrivateRoutes isAuthenticated={isLoggedIn}>
               <App/>
              </PrivateRoutes>
            }
          />

          <Route path="/" element={<App/>} />
          <Route path="/detalle/:pokemon" element={<DetallePokemon/>} />
          {/* <Route path="/login" element={<Login/>} /> */}
          {/* <Route path="/favoritos" element={<FavsPokemon/>} /> */}


          <Route path="/search/:element" element={<Search/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes