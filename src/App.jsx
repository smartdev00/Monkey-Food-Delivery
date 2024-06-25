import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./components/Icons/Basket";
import ButtonShow from "./pages/ButtonShow";

const App = () => {
  return (
    <div className="bg-slate-900 h-full min-h-screen">
      <BrowserRouter>
        {/* <AuthProvider> */}
          <Routes>
            <Route path="/icon" element={<Basket />} />
            <Route path="/button" element={<ButtonShow />} />
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
