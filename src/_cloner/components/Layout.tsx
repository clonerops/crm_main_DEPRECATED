import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { KTSVG } from "./KTSVG";

const Layout = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleToggle = () => setIsOpen((prev) => !prev);

    return (
        <>
            {/* Aside Fix */}
            <div className="fixed bottom-0 right-0 top-0 flex w-24">
                <div className="flex flex-grow flex-col border bg-white shadow">
                    {/* Aside Content */}
                </div>
            </div>
            {/* Aside Toggle */}
            <div className={`${isOpen ? 'hidden' : ' fixed'} bottom-0 right-0 top-0 mr-24 flex w-96`}>
                <div className="flex flex-grow flex-col border bg-white shadow"></div>
            </div>
            <div
                onClick={handleToggle}
                className={`absolute bottom-10 ${isOpen ? 'right-16' : 'right-[28rem]'} cursor-pointer self-end rounded-xl border bg-primary p-4 text-white`}
            >
                <KTSVG path="/media/logos/arr002.svg" svgClassName="h-[18px]" />
            </div>
            <div className={`flex flex-col ${isOpen ? 'pr-24' : 'pr-[30rem]'}`}>
                {/* Nav */}
                <Nav />
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
