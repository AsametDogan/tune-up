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
      {
        user.isLogged ? <MainPage /> : <StartPage />
      }
      {/* <BrowserRouter>
        <Routes>
          <Route path="/*"
            element={user.isLogged ? <Navigate to={"/" + user.user.id} /> : <Navigate to="/auth/sign-up" />}
          >
          </Route>
          <Route path={"/" + user.user.id + "/*"} element={<MainPage />} />
          <Route path="/auth/*" element={<StartPage />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
