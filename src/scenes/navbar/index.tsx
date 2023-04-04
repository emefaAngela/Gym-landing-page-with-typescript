import { useState } from "react";
// import{Bars3Icon,XMarkIcon } from "@heroicons/react";
import Logo  from "@/assests/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
type Props = {
    selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage,setSelectedPage}: Props) => {
    const flexBetween= "flex items-center justify-between"
  return (
    <div>
        <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
        >
            <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                {/* Left side */}
                <img src={Logo} alt="logo" />
                {/* Right side */}
                <div className={`${flexBetween} w-full`}>
                    {/* inner left side */}
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link page="Benefits"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link page="Our Classes"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link page="Contact Us"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                    </div>
                    {/* inner right side */}
                    <div className={`${flexBetween} gap-8`}>
                        <p>Sign In</p>
                        <button>Become a member</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar