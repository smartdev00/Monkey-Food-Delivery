import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./components/Icons/Basket";
import ButtonShow from "./pages/ButtonShow";
import StatusBar from "./components/Navbar/StatusBar";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="bg-slate-900 h-full min-h-screen">
      <StatusBar/>
      <BrowserRouter>
        {/* <AuthProvider> */}
          <Routes>
            <Route path="/icon" element={<Basket />} />
            <Route path="/button" element={<ButtonShow />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/auth" element={<Authentication />} />
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update/:id" element={<UpdatePost />} /> */}
          </Routes>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
