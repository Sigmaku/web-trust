import { ListPeminjaman } from "../../lib/riwayatpeminjaman"

const colorMap: Record<string, string> = {
  selesai: "w-25 text-[#166534] bg-[#DCFCE7] border-[#166534]",
  dikembalikan: "w-35 text-[#B45309] bg-[#FEF3C7] border-[#B45309]",   
  dipinjam: "w-30 text-[#B91C1C] bg-[#FEE2E2] border-[#B91C1C]",
};

const RiwayatPeminjaman = () => {
    return (
        <div className="bg-[#FDCB2E] font-sans-poppins text-[#6A6A6A] flex flex-col gap-7.5 w-full overflow-y-auto p-4 rounded-2xl">
            <div className="font-extrabold text-2xl text-[#FAFAFA]">Riwayat Peminjaman</div>
            <table className="text-center border-collapse w-15/16 mx-auto ">
                <thead className=" text-xl text-black font-bold border-b-2 border-[#6A6A6A]">
                    <tr className="">
                        <th className="px-2 py-4">No</th>
                        <th className="px-2 py-4">Nama Alat</th>
                        <th className="px-2 py-4">Tgl Peminjaman</th>
                        <th className="px-2 py-4">Tgl Pengembalian</th>
                        <th className="px-2 py-4">Status</th>
                    </tr>
                </thead>
                <tbody className="text-xl font-semibold">
                    {ListPeminjaman.map((riwayat) => {
                    const tools = riwayat.status.toLowerCase();
                    const statusColor = colorMap[tools] || "text-gray-800";
                        return (
                            <tr>
                                <td className="px-2 py-4">{riwayat.id}</td>
                                <td className="px-2 py-4">{riwayat.namaAlat}</td>
                                <td className="px-2 py-4">{riwayat.tanggalPinjam}</td>
                                <td className="px-2 py-4">{riwayat.tanggalKembali}</td>
                                <div 
                                    className={`flex justify-center items-center text-center rounded-2xl border overflow-clip h-7.5 mx-auto my-4 px-3 py-4 text-[16px] ${statusColor}`}
                                >{riwayat.status}
                                </div>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default RiwayatPeminjaman
