import { useState, useMemo } from "react"
import HeaderTitle from "../../components/HeaderTitle"
import CardDaftarBarang from "../../components/CardDaftarBarang"
import { ListBarang } from "../../lib/datadum"
import SearchBarang from "./SearchBarang"

const BarangFeature = () => {
  // State untuk pencarian dan filter kategori
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua")

  // 1. Ambil daftar semua kategori unik secara dinamis untuk filter drop-down
  const daftarKategori = useMemo(() => {
    const kategoriUnik = Array.from(new Set(ListBarang.map((b) => b.category)))
    return ["Semua", ...kategoriUnik]
  }, [])

  // 2. Filter data berdasarkan input search dan select kategori
  const filteredBarang = useMemo(() => {
    return ListBarang.filter((barang) => {
      const matchSearch = barang.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchKategori = selectedCategory === "Semua" || barang.category === selectedCategory
      return matchSearch && matchKategori
    })
  }, [searchQuery, selectedCategory])

  // 3. Kelompokkan hasil filter berdasarkan kategorinya agar bisa ditampilkan per seksi
  const barangPerKategori = useMemo(() => {
    const kelompok: Record<string, typeof ListBarang> = {}
    
    filteredBarang.forEach((barang) => {
      if (!kelompok[barang.category]) {
        kelompok[barang.category] = []
      }
      kelompok[barang.category].push(barang)
    })
    
    return kelompok
  }, [filteredBarang])

  return (
    <div className="bg-[#FAFAFA] w-292.5 min-h-screen pb-12 px-12 rounded-2xl border border-[#1E5DC8] font-sans-poppins">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <HeaderTitle />

        {/* Search Bar and Filter */}
        <SearchBarang 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          daftarKategori={daftarKategori}
        />

        {/* Render List Berdasarkan Kategori */}
        {Object.keys(barangPerKategori).length === 0 ? (
          <div className="text-center text-gray-500 text-xl py-10">
            Alat tidak ditemukan...
          </div>
        ) : (
          Object.entries(barangPerKategori).map(([kategori, list]) => (
            <div key={kategori} className="flex flex-col gap-4">
              {/* Pemisah Kategori */}
              <div className="text-black font-bold text-[40px] font-sans-poppins border-b pb-2">
                {kategori}
              </div>

              {/* Daftar Barang di Kategori Ini */}
              <div className="flex flex-row max-w-full overflow-x-auto gap-8 pb-4 scrollbar-thin">
                {list.map((barang) => (
                  <CardDaftarBarang
                    key={barang.id}
                    nama={barang.name}
                    kategori={barang.category}
                    gambar={barang.toolImage}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default BarangFeature