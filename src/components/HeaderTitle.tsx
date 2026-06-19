import { useLocation } from "react-router";
import logoPoltek from "../assets/logo-poltek.png"

export default function HeaderTitle() {
    const location = useLocation();
    const getTitle = (pathname: string): string => {
        switch (pathname) {
            case "/":
                return "DASHBOARD";
            case "/barang":
                return "DAFTAR ALAT";
            case "/peminjaman":
                return "PEMINJAMAN";
            case "/notifikasi":
                return "NOTIFIKASI";
            default:
                return "SISTEM";
        }
    }
    const titleView = getTitle(location.pathname);

    return (
        <div className="flex flex-row justify-between">
            {/* Title Dashboard */}
            <div className="flex flex-col pt-14">
                <div className="text-5xl text-[#1E5DC8] font-bold">{titleView}</div>
                <div className="text-2xl text-[#6A6A6A] font-semibold">Selamat Datang, nama</div>
            </div>
            {/* Logo Poltek */}
            <img src={logoPoltek} alt="Logo PGT" className="w-15 h-15 mt-7.5" />
        </div>
    )
}