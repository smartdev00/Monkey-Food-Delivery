import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import NotificationItem from "./NotificationItem";

const Notification = () => {
  return (
    <div className="relative h-[760px]">
      <div className="px-[22px] ">
        <Navbar back="true" shop="true" text="Notifications" />
      </div>
      <div className="pt-[48px]">
        <NotificationItem content="Your orders has been picked up" time="now" />
        <NotificationItem content="Your orders has been picked up" time="now" />
        <NotificationItem
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          time="now"
        />
        <NotificationItem
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          time="now"
        />
        <NotificationItem
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          time="now"
        />
        <NotificationItem
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          time="now"
        />
        <NotificationItem
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          time="now"
        />
        <NotificationItem
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          time="now"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Notification;
