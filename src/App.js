import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import StartPage from "./pages/StartPage"


function App() {
  const user = useSelector((state) => state.user)
  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div className="text-sm flex flex-col items-center bg-gray-50">
      <BrowserRouter>
        <Routes>
          <Route exact path="/*"
            element={user.isLogged ? <Navigate to="/main/*" /> : <Navigate to="/*" />}
          >
          </Route>
          <Route exact path="/main/*" element={<MainPage />} />
          <Route exact path="/*" element={<StartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
