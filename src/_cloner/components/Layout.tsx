import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { KTSVG } from "./KTSVG";
import Aside from "./Aside";

const Layout = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggle = () => setIsOpen((prev) => !prev);

    const handleIsVisible = (): void => setIsVisible(true);

    const handleIsHidden = (): void => setIsVisible(false);

    return (
        <>
            {isVisible && (
                <div
                    onClick={handleIsHidden}
                    className={`fixed inset-0 right-0 top-0 z-[50] h-full w-full bg-gray-900 bg-opacity-50 transition-opacity ${
                        isVisible ? "opacity-100" : "opacity-0"
                    }`}
                ></div>
            )}
            {/* Aside */}
            <Aside isOpen={isOpen} isVisible={isVisible} handleToggle={handleToggle} />
            {/* Content */}
            <div
                className={`flex flex-col ${
                    isOpen ? "pr-24" : "md:pr-[30rem]"
                } dark:bg-gray-700`}
            >
                {/* Nav */}
                <Nav isOpen={isOpen} handleIsVisible={handleIsVisible} />
                {/* Content */}
                <main className="pt-32">
                    <div className="container mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    );
};

export default Layout;
