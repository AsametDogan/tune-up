import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StartPage from "./pages/StartPage"


function App() {
  const user = useSelector((state) => state.user)
  return (
    <div className="text-sm">
      <BrowserRouter>
        <Routes>
          <Route exact path="/*"
            element={user.isLogged ? <Navigate to="/main/*" /> : <StartPage />}
          >
          </Route>
          <Route exact path="/main/*" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
