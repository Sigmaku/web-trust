import { FaHome } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import { BiSolidBellRing } from "react-icons/bi";
import { RiExportFill } from "react-icons/ri";
import SidebarButton from "./SidebarButton.tsx";
import LogoApp from "../assets/logo-app.png"


type SidebarProps ={
    currentMenu: string
}

const Sidebar = ({currentMenu}:SidebarProps) => {
    return (
        <div className="max-sm:invisible flex flex-col w-90 lg:w-90 md:w-90 h-screen bg-white gap-2 px-6 py-8">
            <div className="flex flex-col items-center gap-3 mb-12">
                <img src={LogoApp} alt="" className="w-26.25 h-26.25 text-center"/>
                <div className="text-5xl text-[#1E5DC8] font-sans-poppins font-bold text-shadow-2xs">TRUST</div>
            </div>
            <div className="flex flex-col gap-2">
                <SidebarButton icon={<FaHome size={24}/>} label={"Dashboard"} isActive={currentMenu==="dashboard"} url={"/"}/>
                <SidebarButton icon={<RiExportFill size={24}/>} label={"Peminjaman"} isActive={currentMenu==="peminjaman"} url={"/peminjaman"}/>
                <SidebarButton icon={<FaToolbox size={24}/>} label={"Daftar Barang"} isActive={currentMenu==="barang"} url={"/barang"}/>
                <SidebarButton icon={<BiSolidBellRing size={24}/>} label={"Notifikasi"} isActive={currentMenu==="notifikasi"} url={"/notifikasi"}/>
            </div>
        </div>  
    )
}

export default Sidebar