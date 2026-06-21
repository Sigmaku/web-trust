import {Card} from "@heroui/react";
import {useNavigate} from "react-router";
import type {ReactNode} from "react";


type SidebarButtonProps ={
    icon: ReactNode
    label: string
    isActive:boolean
    url: string
}

const SidebarButton = ({url,icon, label, isActive}: SidebarButtonProps) => {
    const navigate = useNavigate()
    return (
        <Card className={`w-80 h-13.75 rounded-xl shadow-none ${isActive
            ? "bg-blur text-white font-sans-poppins"
            : "bg-white text-black font-sans-poppins"
        }}`}
              onClick={()=>{
            navigate(url)
        }}>
            <Card.Content className="flex flex-row gap-3 items-center ">
                {icon}
                <div className="font-bold text-xl tracking-wide">{label}</div>
            </Card.Content>
        </Card>
    )
}

export default SidebarButton