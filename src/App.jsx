import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilledButton from './components/Buttons/FilledButton'
import BorderButton from './components/Buttons/BorderButton'
import LoginFacebook from "./components/Buttons/LoginFacebook";
import LoginGoogle from "./components/Buttons/LoginGoogle";
import TextField from "./components/TextField/TextField";
import './output.css'
import StarRating from "./components/StarRating";
import MapCurrentPoint from "./components/map/MapCurrentPoint";
import MapCurrentTarget from "./components/map/MapCurrentTarget";

const App = () => {
  return (
    <div className="bg-slate-900 h-full min-h-screen">
      <FilledButton text="Filled Button">Filled Button</FilledButton>
      <BorderButton text="Border Button">Border Button</BorderButton>
      <LoginFacebook/>
      <LoginGoogle/>
      <TextField/>
      <BrowserRouter>
      <StarRating/>
      <MapCurrentPoint/>
      <MapCurrentTarget/>
        {/* <AuthProvider> */}
          <Routes>
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
