import HeaderTitle from "../../components/HeaderTitle"
import CardDaftarBarang from "../../components/CardDaftarBarang"
import { ListBarang } from "../../lib/datadum"

const index = () => {
  return (
    <div className="bg-[#FAFAFA] w-292.5 min-h-screen px-12 rounded-2xl border border-[#1E5DC8] font-sans-poppins">
      <div className="flex flex-col">
        {/* Header */}
        <HeaderTitle/>

        
        <div className="flex flex-row max-w-full overflow-x-auto gap-12">
          {ListBarang.map((barang) => {
            return (
              <CardDaftarBarang
                key={barang.id}
                nama={barang.name}
                kategori={barang.category}
                gambar={barang.toolImage}
              />
            )
          })}
        </div>


      </div>
    </div>
  )
}

export default index