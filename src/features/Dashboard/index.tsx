import logoPoltek from "../../assets/logo-poltek.png"
import CardBarang from "../../components/CardBarang"
import { ListBarang } from "../../lib/datadum"

const index = () => {
  return (
    <div className="bg-[#FAFAFA] w-292.5 min-h-screen pl-12 pr-12 rounded-2xl border border-[#1E5DC8] font-sans-poppins">
        <div className="flex flex-col gap-30">
          {/* HEADER */}
          <div className="flex flex-row justify-between">
            {/* Title Dashboard */}
            <div className="flex flex-col pt-14">
              <div className="text-5xl text-[#1E5DC8] font-bold">DASHBOARD</div>
              <div className="text-2xl text-[#6A6A6A] font-semibold">Selamat Datang, nama</div>
            </div>
            {/* Logo Poltek */}
            <img src={logoPoltek} alt="Logo PGT" className="w-15 h-15 mt-7.5" />
          </div>
          {/* CARD BARANG */}
          <div className="flex flex-row gap-7.5 max-w-full overflow-x-auto scrollbar-hide">
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
          
        </div>
    </div>
  )
}

export default index