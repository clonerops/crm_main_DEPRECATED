import { FC } from "react";
import { KTSVG } from "./KTSVG";

interface IProps {
    isVisible: boolean;
    isOpen: boolean;
    handleToggle: () => void;
}
const Aside: FC<IProps> = ({ isVisible, isOpen, handleToggle }) => {
    return (
        <aside
            className={`${
                isVisible ? "flex" : "hidden"
            } fixed bottom-10 z-[60] md:flex`}
        >
            {/* Aside Fix */}
            <div className="fixed hidden md:bottom-0 md:right-0 md:top-0 md:flex md:w-24">
                <div className="flex flex-grow flex-col border bg-white shadow dark:border-gray-600 dark:bg-slate-700">
                    {/* Aside Content */}
                </div>
            </div>
            {/* Aside Toggle */}
            <div
                className={`${
                    isOpen ? "hidden" : " fixed"
                } bottom-0 right-0 top-0 flex w-96 md:mr-24`}
            >
                <div className="flex flex-grow flex-col border bg-white shadow dark:border-gray-600 dark:bg-gray-900">
                    {/* Aside Content Toggle */}
                    <div className="flex justify-center items-center h-20">
                        <label className="text-black font-yekan_bold text-2xl">LOGO</label>
                    </div>
                    <div className="mt-10">
                        <div className="flex gap-2 px-12 py-4">
                            <div className="logo">
                                <KTSVG
                                    path={"/media/logos/arr001.svg"}
                                    svgClassName="h-[18px]"
                                    className="text-black"
                                />
                            </div>
                            <div className="font-yekan_bold text-xl text-black">
                                داشبورد
                            </div>
                        </div>
                        <div className="flex gap-2 px-12 py-4">
                            <div className="logo">
                                <KTSVG
                                    path={"/media/logos/arr001.svg"}
                                    svgClassName="h-[18px]"
                                    className="text-black"
                                />
                            </div>
                            <div className="font-yekan_bold text-xl text-black">
                                عنوان منو
                                <ul className="py-4">
                                    <li className="py-2 text-black text-opacity-60">
                                        <span className="h-[50px] w-[50px] bg-black"></span>
                                        زیر منو یک
                                    </li>
                                    <li className="py-2 text-black text-opacity-60">
                                        زیر منو دو
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                onClick={handleToggle}
                className={`absolute bottom-10 hidden md:block  ${
                    isOpen ? "right-16" : "right-[28rem]"
                } cursor-pointer self-end rounded-xl bg-primary p-4 text-white outline-none`}
            >
                <KTSVG path="/media/logos/arr002.svg" svgClassName="h-[18px]" />
            </div>
        </aside>
    );
};

export default Aside;
