import { FaHome } from "react-icons/fa";
import { CgLoadbarDoc } from "react-icons/cg";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";

export default function MainNavigation() {
    return(
        <nav className="MainNavigation w-full flex justify-end">
            <div className="px-6 py-2 border-transparent shadow-xl rounded-2xl bg-[#F2F7FC]"> 
                <ul className="flex gap-6">
                    <li className="p-4 active rounded-2xl">
                        <a href="" className="items-center flex flex-col text-[20px]">
                            <FaHome />
                            Home
                        </a>
                    </li>
                    <li className="p-4 rounded-2xl">
                        <a href="" className="items-center flex flex-col text-[20px]">
                            <CgLoadbarDoc />
                            Resume
                        </a>
                    </li>
                    <li className="p-4 rounded-2xl">
                        <a href="" className="items-center flex flex-col text-[20px]">
                            <MdOutlineWorkOutline />
                            Work
                        </a>
                    </li>
                    <li className="p-4 rounded-2xl">
                        <a href="" className="items-center flex flex-col text-[20px]">
                            <RiContactsBook3Fill />
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}