import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import InboxItem from "./InboxItem";

const Inbox = () => {
    return (
        <div className="px-[22px] relative h-[760px]">
            <Navbar back="true" text="Inbox" shop="true" />
            <div className="pt-[48px]">
                <InboxItem
                    title="MealMonkey Promotions"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    titme="6th July"
                />
                <InboxItem
                    title="MealMonkey Promotions"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    titme="6th July"
                />
                <InboxItem
                    title="MealMonkey Promotions"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    titme="6th July"
                />
                <InboxItem
                    title="MealMonkey Promotions"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    titme="6th July"
                />
                <InboxItem
                    title="MealMonkey Promotions"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    titme="6th July"
                />
                <InboxItem
                    title="MealMonkey Promotions"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    titme="6th July"
                />
            </div>
            <Footer/>
        </div>
    );
}

export default Inbox;