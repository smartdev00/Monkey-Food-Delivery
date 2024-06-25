import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-slate-900 h-full min-h-screen">
      <BrowserRouter>
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
