import HeaderTitle from "../../components/HeaderTitle"
import CardBarang from "../../components/CardBarang"
import { ListBarang } from "../../lib/datadum"
import RiwayatPeminjaman from "./RiwayatPeminjaman"

const index = () => {
  return (
    <div className="bg-[#FAFAFA] w-292.5 min-h-screen pb-12 px-12 rounded-2xl border border-[#1E5DC8] font-sans-poppins">
        <div className="flex flex-col gap-30">
          {/* HEADER */}
          <HeaderTitle/>
          {/* CARD BARANG */}
          <div className="flex flex-row gap-7.5 max-w-full overflow-x-auto ">
            {ListBarang.map((barang) => {
              return (
                <CardBarang
                  key={barang.id}
                  nama={barang.name}
                  kategori={barang.category}
                  gambar={barang.toolImage}
                />
              )
            })}
          </div>
          {/* Riwayat Peminjaman */}
          <RiwayatPeminjaman/>
        </div>
    </div>
  )
}

export default index