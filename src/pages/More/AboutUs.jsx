import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

const AboutUs = () => {
    return (
        <div className="px-[22px] relative h-[760px]">
            <Navbar text="About Us" back="true" shop="true" />
            <div className="pt-[55px]">
                <div className="flex items-start gap-2">
                    <div className="border-[3px] mt-[6px] border-[#ee5a30] rounded-[100%]"/>
                    <div className="flex flex-col">
                        <p className="text-sm text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="flex items-start gap-2 pt-[18px]">
                    <div className="border-[3px] mt-[6px] border-[#ee5a30] rounded-[100%]"/>
                    <div className="flex flex-col">
                        <p className="text-sm text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="flex items-start gap-2 pt-[18px]">
                    <div className="border-[3px] mt-[6px] border-[#ee5a30] rounded-[100%]"/>
                    <div className="flex flex-col">
                        <p className="text-sm text-primary overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud 
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutUs;