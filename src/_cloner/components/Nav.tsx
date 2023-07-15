import { useState, useEffect, FC } from "react";
import { KTSVG } from "./KTSVG";
import { useDarkMode } from "../helpers/darkmodeHelper";

interface IProps {
    handleIsVisible: () => void
    isOpen: boolean
}

const Nav: FC<IProps> = ({ handleIsVisible, isOpen }) => {
    const { toggleDarkMode } = useDarkMode();

    // const [stickyClass, setStickyClass] = useState("relative");
    // useEffect(() => {
    //     window.addEventListener("scroll", stickNavbar);

    //     return () => {
    //         window.removeEventListener("scroll", stickNavbar);
    //     };
    // }, [isOpen]);

    // const stickNavbar = () => {
    //     if (window !== undefined) {
    //         let windowHeight = window.scrollY;
    //         console.log(isOpen)
    //         windowHeight > 200 
    //             ? setStickyClass(
    //                   `fixed left-0 ${isOpen ? 'right-[10rem]': 'right-[30rem]'} top-0 smoothScrollSticky`
    //               )
    //             : setStickyClass("relative");
    //     }
    // };
    return (
        <div
            // className={`${stickyClass}  z-10 flex h-[60px] items-stretch justify-between dark:bg-slate-700 bg-white`}
            className={`fixed left-0 right-0 ${isOpen ? 'md:right-[10rem]': 'md:right-[30rem]'} z-10 flex h-[60px] items-stretch justify-between dark:bg-slate-700 bg-white`}
        >
            <nav className="container mx-auto flex items-center justify-between">
                <div className="hidden flex-col md:flex">
                    <div className="font-yekan_bold text-3xl text-primary dark:text-white">
                        عنوان مسیر
                    </div>
                    <div className="dark:text-gray-300 font-yekan_bold text-xl">
                        صفحه اصلی / عنوان مسیر
                    </div>
                </div>
                <div
                    onClick={handleIsVisible}
                    className="cursor-pointer rounded-xl dark:text-white dark:border-gray-600 border p-4 hover:text-blue-600 md:hidden"
                >
                    <KTSVG
                        path="/media/logos/abs015.svg"
                        svgClassName="h-[18px]"
                    />
                </div>
                <div className="flex flex-shrink-0 gap-4">
                    <div className="cursor-pointer dark:text-white rounded-xl dark:border-gray-600 border p-4 hover:text-blue-600">
                        <KTSVG
                            path="/media/logos/gen007.svg"
                            svgClassName="h-[18px]"
                        />
                    </div>
                    <div
                        onClick={toggleDarkMode}
                        className="cursor-pointer dark:text-white rounded-xl dark:border-gray-600 border p-4 hover:text-blue-600"
                    >
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
