import './css/App.css'
import './css/index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home.tsx";
import Wrapper from "./components/Wrapper.tsx";
import Register from "./pages/Register.tsx";
import PoisciKnjigo from "./pages/PoisciKnjigo.tsx";
import Login from "./pages/Login.tsx";
import Izposoja from "./pages/Izposoja.tsx";
import Rezervacija from "./pages/Rezervacija.tsx";
import UserData from "./pages/UserData.tsx";

function App() {
  return (
    <>
        <Wrapper>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>} />
                    <Route path={'/register'} element={<Register/>} />
                    <Route path={'/poisciknjigo'} element={<PoisciKnjigo/>} />
                    <Route path={'/login'} element={<Login/>} />
                    <Route path={'/izposoja/:isbn'} element={<Izposoja/>} />
                    <Route path={'/rezervacija/:isbn'} element={<Rezervacija/>} />
                    <Route path={'/userdata'} element={<UserData/>} />
                </Routes>
            </BrowserRouter>
        </Wrapper>
    </>
  )
}

export default App
