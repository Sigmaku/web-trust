import { useMatches } from "react-router";
import logoPoltek from "../assets/logo-poltek.png"

interface HandlingTitle {
    title?: string;
}

export default function HeaderTitle() {
    const matches = useMatches();
    const currentMatch = matches[matches.length - 1];
    const handle = currentMatch?.handle as HandlingTitle | undefined;
    const titleView = handle?.title || "Sistem Panel";

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