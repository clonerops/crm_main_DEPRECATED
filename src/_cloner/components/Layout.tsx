import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { KTSVG } from "./KTSVG";

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

            {/* <aside className={`${isVisible ? "flex" : "hidden"}`}> */}
            <aside className={`${isVisible ? 'flex' : 'hidden'} md:flex z-[60]`} >
                {/* Aside Fix */}
                <div className="hidden fixed md:bottom-0 md:right-0 md:top-0 md:flex md:w-24">
                    <div className="flex flex-grow flex-col border bg-white shadow">
                        {/* Aside Content */}
                    </div>
                </div>
                {/* Aside Toggle */}
                <div
                    className={`${
                        isOpen ? "hidden" : " fixed"
                    } bottom-0 right-0 top-0  w-96 md:mr-24 flex`}
                >
                    <div className="flex flex-grow flex-col border bg-secondary shadow"></div>
                </div>
                <div
                    onClick={handleToggle}
                    className={`hidden md:block absolute bottom-10 ${
                        isOpen ? "right-16" : "right-[28rem]"
                    } cursor-pointer self-end rounded-xl bg-primary p-4 text-white outline-none`}
                >
                    <KTSVG
                        path="/media/logos/arr002.svg"
                        svgClassName="h-[18px]"
                    />
                </div>
            </aside>
            <div
                className={`flex flex-col ${
                    isOpen ? "pr-24" : "md:pr-[30rem]"
                }`}
            >
                {/* Nav */}
                <Nav handleIsVisible={handleIsVisible} />
                {/* Content */}
                <main className="pt-10">
                    <div className="container mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    );
};

export default Layout;
