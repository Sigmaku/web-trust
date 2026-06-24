import { Dropdown } from '@heroui/react'
import type { ReactNode } from 'react'
import { useNavigate } from 'react-router'
import { TbLogout2 } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";


type ProfileButtonProps = {
    icon: ReactNode
    arah: string
    name: string
    kelas: string
    link2: string
}

const ProfileButton = ({icon, name, kelas, arah, link2}: ProfileButtonProps) => {
    const navigate = useNavigate();

    function handleKey(key: string) {
        switch (key) {
            case 'profile':
                navigate(link2);
                break;
            case 'logout':
                localStorage.clear();
                navigate('/login');
                break;
            default:
                break;
        }
    }
    return (
        <Dropdown>
            <Dropdown.Trigger>
                <div role="button" tabIndex={0} className="flex flex-row w-full h-35 cursor-pointer">
                    <div className="w-25 h-25 p-2 text-primer">
                        {icon}
                    </div>
                    <div className="flex flex-col py-6 items-start">
                        <div className="text-[22px] font-bold">{name}</div>
                        <div className="text-lg font-semibold">{kelas}</div>
                    </div>
                </div>
            </Dropdown.Trigger>
            <Dropdown.Popover className="bg-white border border-gray-200 rounded-xl font-sans-poppins text-primer font-semibold shadow-xl p-1 w-80">
                <Dropdown.Menu 
                    onAction={(key) => handleKey(String(key))}
                    className="flex flex-col gap-3"
                >
                    <Dropdown.Item 
                        id="profile"
                        className="rounded-lg text-lg"
                        ><IoPersonOutline size={20}/> {arah}
                    </Dropdown.Item>
                    <Dropdown.Item 
                        id="logout"
                        className="rounded-lg text-lg"
                        ><TbLogout2 size={20}/> Logout
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
  )
}

export default ProfileButton