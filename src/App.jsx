
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonShow from "./pages/ButtonShow";
import IconsRef from "./components/Icons/IconsRef";
 

import StatusBar from "./components/Navbar/StatusBar";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";

import Dashboard from "./pages/Dashboard";
import Land from "./pages/Land";
 

import Home from "./pages/Home";
import Logo from "./components/Logo";

import Menu from './pages/Menu'
import Dessert from './pages/Menu/Dessert'
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
    <div className="w-[100%] min-w-[280px] bg-white h-auto">
      <StatusBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button" element={<ButtonShow />} />
          <Route path="/icon" element={<IconsRef />} />
          <Route path="/logo" element={<Logo />} />
          
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/login/resetpassword" element={<ResetPassword />} />
          <Route path="/auth/login/resetpassword/otp" element={<OTP />} />
          <Route path="/auth/login/newpassword" element={<NewPassword />} />
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/land" element={<Land />} />
          <Route path="/intro" element={<Intro />} />

          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/desserts" element={<Dessert />} />
          
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/more" element={<More />} />
          <Route path="/more/payment-details" element={<PaymentDetails />} />
          <Route path="/more/notification" element={<Notification />} />
          <Route path="/more/aboutus" element={<AboutUs />} />
          <Route path="/more/inbox" element={<Inbox />} />
          <Route path="/more/order" element={<MyOrder />} />
          <Route path="/more/order/checkout" element={<Checkout />} />
          <Route path="/more/order/checkout/changeaddress" element={<ChangeAddress />} />
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
