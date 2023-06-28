import { useState, useEffect } from "react";
import { KTSVG } from "./KTSVG";

const Nav = () => {
    const [stickyClass, setStickyClass] = useState("relative");
    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);

        return () => {
            window.removeEventListener("scroll", stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 200
                ? setStickyClass("fixed left-0 right-[30rem] top-0 smoothScrollSticky")
                : setStickyClass("relative");
        }
    };
    return (
        <div
            className={`${stickyClass} z-10 flex h-[60px] items-stretch justify-between bg-white`}
        >
            <nav className="container mx-auto flex items-center justify-between">
                <div className="flex flex-col">
                    <div className="font-yekan_bold text-3xl text-primary">
                        ثبت درخواست
                    </div>
                    <div className="font-yekan_bold text-xl">
                        صفحه اصلی / ثبت درخواست
                    </div>
                </div>
                <div className="flex flex-shrink-0 gap-4">
                    <div className="cursor-pointer rounded-xl border p-4 hover:text-blue-600">
                        <KTSVG
                            path="/media/logos/gen007.svg"
                            svgClassName="h-[18px]"
                        />
                    </div>
                    <div className="cursor-pointer rounded-xl border p-4 hover:text-blue-600">
                        <KTSVG
                            path="/media/logos/gen060.svg"
                            svgClassName="h-[18px]"
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
