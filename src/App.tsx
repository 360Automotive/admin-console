import './App.scss'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage/index"
import { ConsolePage } from "./Pages/ConsolePage/index"
import { RequestPage } from './Pages/RequestPage/index';
import { SideBar } from "./components/SideBar/index"
import { observer } from "mobx-react-lite"
import { FC, useContext } from "react"
import { StoreContext } from './store.context';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { LoginRequest } from './data-tranfer-objects/request/login-request.dto';
import { useNavigate } from 'react-router-dom';
import { NoMatchPage } from './Pages/NoMatchPage/NoMatchPage';
import { Snackbar } from './components/Snackbar/Snackbar';

const App: FC = observer((props) => {

  const navigate = useNavigate()

  const { authStore } = useContext(StoreContext)
  const authenticated = authStore.isAuthenticated()

  const onLoginSuccess = async (_: LoginRequest) => {
    await authStore.login(_)
    navigate("/console")
  }

  const closeSnackBar = () => {
    const snackbar = document.getElementById("snackbar")
    snackbar?.classList.add("slide-right")
    snackbar?.classList.remove("slide-left")
  }

  return (
    <div className="App">
      {
        authenticated &&
        <SideBar />
      }
      <Routes>
        {!authenticated &&
          <Route path="/" element={<LoginPage onLogin={onLoginSuccess} />} />}
        <Route
          path="/console"
          element={
            <PrivateRoute>
              <ConsolePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/request"
          element={
            <PrivateRoute>
              <RequestPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
      <Snackbar onClose={closeSnackBar} />
    </div>
  )
})

export default App
