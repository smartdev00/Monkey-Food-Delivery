
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonShow from "./pages/ButtonShow";
import IconsRef from "./components/Icons/IconsRef";
 
import StatusBar from './components/Navbar/StatusBar'
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";

import Land from "./pages/Land";
import Home from "./pages/Home";
import Menu from './pages/Menu'
import Offers from './pages/Offers'
import More from './pages/More/More'
import PaymentDetails from "./pages/More/PaymentDetails/PaymentDetails";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import ResetPassword from "./pages/auth/ResetPassword";
import OTP from "./pages/auth/OTP";
import NewPassword from "./pages/auth/NewPassword";
import Intro from "./pages/Intro/Intro";
import Notification from "./pages/More/Notification";
import AboutUs from "./pages/More/AboutUs";
import Inbox from "./pages/More/Inbox";
import MyOrder from "./pages/More/Order/MyOrder";
import Checkout from "./pages/More/Order/Checkout";
import ChangeAddress from "./pages/More/Order/ChangeAddress";
const App = () => {
  return (
    <div className="w-[100%] bg-white h-auto">
      <StatusBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/button" element={<ButtonShow />} />
          <Route path="/icon" element={<IconsRef />} />
          <Route path="/" element={<Home />} />
          <Route path="/Land" element={<Land />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/More" element={<More />} />
          <Route path="/payment-details" element={<PaymentDetails />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/order" element={<MyOrder />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/changeaddress" element={<ChangeAddress />} />
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
